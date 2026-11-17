// ================== INSTELLINGEN ==================
// Vul hier het e-mailadres in waar boekingsaanvragen naartoe moeten.
const CONTACT_EMAIL = "info@dutchcharger.nl";

// ================== TAAL (NL / EN) ==================
const root = document.documentElement;

function setLang(lang) {
  root.dataset.lang = lang;
  root.lang = lang;
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

(function initLang() {
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  const browser = (navigator.language || "nl").toLowerCase().startsWith("nl") ? "nl" : "en";
  setLang(saved || browser);
})();

document.getElementById("langToggle").addEventListener("click", () => {
  setLang(root.dataset.lang === "nl" ? "en" : "nl");
});

// ================== MENU (mobiel) ==================
const navLinks = document.getElementById("navLinks");
document.getElementById("burger").addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

// ================== CODE 3 (lichten op volle snelheid) ==================
document.getElementById("code3").addEventListener("click", () => {
  document.body.classList.toggle("code3-on");
});

// ================== TIJDLIJN: inschuiven bij scrollen ==================
const items = document.querySelectorAll(".tl");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
  }, { threshold: 0.2 });
  items.forEach(el => io.observe(el));
} else {
  items.forEach(el => el.classList.add("visible"));
}

// ================== TOEN & NU schuifbalk ==================
const range = document.getElementById("compareRange");
const before = document.getElementById("compareBefore");
const handle = document.getElementById("compareHandle");
range.addEventListener("input", () => {
  const v = range.value;
  before.style.clipPath = `inset(0 ${100 - v}% 0 0)`;
  handle.style.left = v + "%";
});

// ================== GALERIJ: foto groot openen ==================
document.querySelectorAll(".gallery__item").forEach(fig => {
  fig.addEventListener("click", () => {
    if (fig.classList.contains("is-empty")) return;
    const box = document.createElement("div");
    box.className = "lightbox";
    box.innerHTML = `<img src="${fig.querySelector("img").src}" alt="">`;
    box.addEventListener("click", () => box.remove());
    document.body.appendChild(box);
  });
});

// ================== BOEKINGSFORMULIER ==================
document.getElementById("bookingForm").addEventListener("submit", e => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target));
  const subject = `Aanvraag DutchCharger – ${d.gelegenheid}${d.datum ? " – " + d.datum : ""}`;
  const body =
`Naam: ${d.naam}
E-mail: ${d.email}
Telefoon: ${d.telefoon || "-"}
Datum: ${d.datum || "-"}
Gelegenheid: ${d.gelegenheid}
Locatie: ${d.locatie || "-"}

${d.bericht || ""}`;
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.getElementById("year").textContent = new Date().getFullYear();

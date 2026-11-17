// =========================================================
//  INSTELLINGEN – pas deze aan
// =========================================================
const SETTINGS = {
  email: "info@dutchcharger.nl",          // boekingsaanvragen komen hier binnen
  instagram: "https://www.instagram.com/",
  youtube: "https://www.youtube.com/",
  facebook: "https://www.facebook.com/",
  pinterest: "https://www.pinterest.com/",
};

// =========================================================
//  HEADER & FOOTER (staan hier één keer, voor alle pagina's)
// =========================================================
const t = (nl, en) => `<span lang="nl">${nl}</span><span lang="en">${en}</span>`;

const NAV = [
  ["index.html", t("Home", "Home")],
  ["dossier.html", t("Het dossier", "The file")],
  ["apparatuur.html", t("Apparatuur", "Equipment")],
  ["evenementen.html", t("Evenementen", "Events")],
  ["huren.html", t("Huren &amp; contact", "Book &amp; contact")],
];

const ICONS = {
  instagram: '<path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 4.7a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2zm0 8.4a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6zm5.3-9.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/>',
  youtube: '<path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/>',
  facebook: '<path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4h-3V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12z"/>',
  pinterest: '<path d="M12 0a12 12 0 0 0-4.4 23.2c-.1-.9-.2-2.4 0-3.4l1.4-6s-.4-.7-.4-1.8c0-1.7 1-2.9 2.2-2.9 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.1 0 3.8-2.3 3.8-5.5 0-2.9-2.1-4.9-5-4.9-3.4 0-5.4 2.6-5.4 5.2 0 1 .4 2.1.9 2.7.1.1.1.2.1.3l-.3 1.4c-.1.2-.2.3-.4.2-1.5-.7-2.4-2.9-2.4-4.6 0-3.8 2.7-7.2 7.9-7.2 4.1 0 7.3 3 7.3 6.9 0 4.1-2.6 7.4-6.2 7.4-1.2 0-2.4-.6-2.7-1.4l-.8 2.8c-.3 1-1 2.3-1.5 3.1A12 12 0 1 0 12 0z"/>',
};

function socialsHTML() {
  return ["instagram", "youtube", "facebook", "pinterest"].map(k =>
    `<a href="${SETTINGS[k]}" target="_blank" rel="noopener" aria-label="${k}"><svg viewBox="0 0 24 24">${ICONS[k]}</svg></a>`
  ).join("");
}

function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  const here = location.pathname.split("/").pop() || "index.html";
  el.className = "site-header";
  el.innerHTML = `
    <div class="wrap">
      <a href="index.html" class="logo">
        <span class="logo__badge">2101</span>
        <span class="logo__text">DutchCharger<small>Sebring Police · Florida → NL</small></span>
      </a>
      <nav class="main-nav" id="mainNav">
        ${NAV.map(([href, label]) => `<a href="${href}"${href === here ? ' aria-current="page"' : ""}>${label}</a>`).join("")}
      </nav>
      <div class="header-actions">
        <button class="lang-btn" id="langBtn" aria-label="Taal / Language"><span class="l-nl">NL</span> | <span class="l-en">EN</span></button>
        <a href="huren.html#aanvraag" class="btn-book">${t("Boek nu", "Book now")}</a>
        <button class="burger" id="burger" aria-label="Menu" aria-expanded="false">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>
    </div>`;
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.className = "site-footer";
  el.innerHTML = `
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-about">
          <a href="index.html" class="logo"><span class="logo__badge">2101</span><span class="logo__text" style="color:#fff">DutchCharger</span></a>
          <p style="margin-top:16px">${t(
            "Een voormalige politieauto van de Sebring Police Department, Florida. Nu in Nederland, voor goede doelen, evenementen en verhuur met chauffeur.",
            "A former Sebring Police Department patrol car from Florida. Now in the Netherlands for charities, events and chauffeured hire."
          )}</p>
          <div class="socials">${socialsHTML()}</div>
        </div>
        <div>
          <h4>${t("De auto", "The car")}</h4>
          <ul>
            <li><a href="dossier.html">${t("Het dossier", "The file")}</a></li>
            <li><a href="dossier.html#chronologie">${t("Chronologie", "Timeline")}</a></li>
            <li><a href="apparatuur.html">${t("Apparatuur", "Equipment")}</a></li>
          </ul>
        </div>
        <div>
          <h4>${t("Onderweg", "On the road")}</h4>
          <ul>
            <li><a href="evenementen.html">${t("Goede doelen", "Charities")}</a></li>
            <li><a href="evenementen.html#autoshows">${t("Autoshows", "Car shows")}</a></li>
            <li><a href="evenementen.html#in-beeld">${t("In beeld", "On screen")}</a></li>
            <li><a href="evenementen.html#spotted">Spotted</a></li>
          </ul>
        </div>
        <div>
          <h4>${t("Huren", "Book")}</h4>
          <ul>
            <li><a href="huren.html">${t("Mogelijkheden", "Options")}</a></li>
            <li><a href="huren.html#faq">${t("Veelgestelde vragen", "FAQ")}</a></li>
            <li><a href="huren.html#aanvraag">${t("Aanvraag doen", "Send a request")}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} DutchCharger</span>
        <span>${t(
          "Particulier bezit. Niet verbonden aan een politiedienst.",
          "Privately owned. Not affiliated with any law-enforcement agency."
        )}</span>
      </div>
    </div>`;
}

renderHeader();
renderFooter();

// =========================================================
//  TAAL
// =========================================================
const root = document.documentElement;
function setLang(lang) {
  root.dataset.lang = lang;
  root.lang = lang;
  try { localStorage.setItem("lang", lang); } catch (e) {}
}
(function () {
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  setLang(saved || "nl");
})();
document.getElementById("langBtn")?.addEventListener("click", () => setLang(root.dataset.lang === "nl" ? "en" : "nl"));

// =========================================================
//  MOBIEL MENU
// =========================================================
const burger = document.getElementById("burger");
const nav = document.getElementById("mainNav");
burger?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});

// =========================================================
//  FOTO'S: lege vakken netjes tonen tot er een foto staat
// =========================================================
document.querySelectorAll(".media img").forEach(img => {
  const mark = () => img.closest(".media").classList.add("is-empty");
  if (img.complete && img.naturalWidth === 0) mark();
  img.addEventListener("error", mark);
});

// =========================================================
//  TOEN & NU
// =========================================================
const range = document.getElementById("compareRange");
if (range) {
  const before = document.getElementById("compareBefore");
  const handle = document.getElementById("compareHandle");
  range.addEventListener("input", () => {
    before.style.clipPath = `inset(0 ${100 - range.value}% 0 0)`;
    handle.style.left = range.value + "%";
  });
}

// =========================================================
//  GALERIJ: foto groot openen
// =========================================================
document.querySelectorAll(".gallery figure").forEach(fig => {
  fig.addEventListener("click", () => {
    if (fig.querySelector(".media.is-empty")) return;
    const box = document.createElement("div");
    box.className = "lightbox";
    box.innerHTML = `<img src="${fig.querySelector("img").src}" alt="">`;
    box.addEventListener("click", () => box.remove());
    document.body.appendChild(box);
  });
});

// =========================================================
//  AANVRAAGFORMULIER
// =========================================================
document.getElementById("bookingForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target));
  const subject = `Aanvraag DutchCharger – ${d.gelegenheid}${d.datum ? " – " + d.datum : ""}`;
  const body = [
    `Naam: ${d.naam}`,
    `E-mail: ${d.email}`,
    `Telefoon: ${d.telefoon || "-"}`,
    `Datum: ${d.datum || "-"}`,
    `Gelegenheid: ${d.gelegenheid}`,
    `Locatie: ${d.locatie || "-"}`,
    "",
    d.bericht || "",
  ].join("\n");
  location.href = `mailto:${SETTINGS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

// E-mailadres op de contactpagina gelijk houden met de instellingen
const mailLink = document.getElementById("mailLink");
if (mailLink) { mailLink.href = "mailto:" + SETTINGS.email; mailLink.textContent = SETTINGS.email; }

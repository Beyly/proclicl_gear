/* =========================================================
   ProClick Gear — script.js
   កែតែផ្នែក CONFIG, PRODUCTS និង I18N (ការបកប្រែ) គឺគ្រប់គ្រាន់ហើយ
   ========================================================= */

/* ---------- 1) ព័ត៌មានហាង (កែនៅទីនេះ) ---------- */
const CONFIG = {
  telegramUsername: "PCG68", // ដោយគ្មាន @
  facebookUrl: "https://facebook.com/profile.php?id=61555301295020",
  youtubeChannelUrl: "https://youtube.com/@YOUR_CHANNEL",
  phone: "097 749 4255",
  currency: "$",
  defaultLang: "km", // 'km' ឬ 'en'
  defaultTheme: "dark", // 'dark' ឬ 'light' (ត្រូវតែដូចនឹងក្នុង <head> របស់ index.html)
};

/* ---------- 2) បញ្ជីផលិតផល (កែ/បន្ថែមនៅទីនេះ) ----------
   category: 'keyboard' | 'mouse' | 'mousepad' | 'rgb'
   image:    ដាក់ path រូប ឧ. 'images/k1.jpg' (ទុកទទេ '' ប្រើ emoji ជំនួស)
   desc:     { km: 'ពិពណ៌នាខ្មែរ', en: 'English description' }
   youtube:  link វីដេអូពេញលើ YouTube
*/
const PRODUCTS = [
  {
    id: 1,
    name: "RGB Mechanical Keyboard K1",
    category: "keyboard",
    price: 45,
    emoji: "⌨️",
    image: "",
    desc: {
      km: "Blue Switch, RGB 16 លានពណ៌, ប៊ូតុងរឹងមាំ។",
      en: "Blue switches, 16M-color RGB, sturdy build.",
    },
    youtube: "https://www.youtube.com/watch?v=VIDEO_ID",
  },
  {
    id: 2,
    name: "Wireless Keyboard K2",
    category: "keyboard",
    price: 38,
    emoji: "⌨️",
    image: "",
    desc: {
      km: "Bluetooth + 2.4G, ថ្មប្រើបានយូរ, ស្ងាត់។",
      en: "Bluetooth + 2.4G, long battery life, quiet typing.",
    },
    youtube: "https://www.youtube.com/watch?v=VIDEO_ID",
  },
  {
    id: 3,
    name: "Compact 60% Keyboard K3",
    category: "keyboard",
    price: 52,
    emoji: "⌨️",
    image: "",
    desc: {
      km: "ទំហំតូច Hot-swap Switch, Red Switch។",
      en: "Compact size, hot-swappable switches, Red switches.",
    },
    youtube: "https://www.youtube.com/watch?v=VIDEO_ID",
  },

  {
    id: 4,
    name: "Gaming Mouse M1",
    category: "mouse",
    price: 22,
    emoji: "🖱️",
    image: "",
    desc: {
      km: "DPI រហូតដល់ 12,000, RGB, ប៊ូតុង Macro ៦។",
      en: "Up to 12,000 DPI, RGB, 6 macro buttons.",
    },
    youtube: "https://www.youtube.com/watch?v=VIDEO_ID",
  },
  {
    id: 5,
    name: "Wireless Mouse M2",
    category: "mouse",
    price: 18,
    emoji: "🖱️",
    image: "",
    desc: {
      km: "គ្មានខ្សែ, ស្រាល, សាកថ្មបាន។",
      en: "Wireless, lightweight, rechargeable.",
    },
    youtube: "https://www.youtube.com/watch?v=VIDEO_ID",
  },
  {
    id: 6,
    name: "Ultra-light Mouse M3",
    category: "mouse",
    price: 35,
    emoji: "🖱️",
    image: "",
    desc: {
      km: "ស្រាលតែ 60 ក្រាម សម្រាប់ FPS។",
      en: "Only 60 g, built for FPS games.",
    },
    youtube: "https://www.youtube.com/watch?v=VIDEO_ID",
  },

  {
    id: 7,
    name: "Mouse Pad XL (900×400)",
    category: "mousepad",
    price: 12,
    emoji: "🟦",
    image: "",
    desc: {
      km: "ទំហំធំ ស្អិតមិនរអិល, គែមដេរមិនរបើក។",
      en: "Extra large, non-slip base, stitched edges.",
    },
    youtube: "https://www.youtube.com/watch?v=VIDEO_ID",
  },
  {
    id: 8,
    name: "RGB Mouse Pad P2",
    category: "mousepad",
    price: 20,
    emoji: "🌈",
    image: "",
    desc: {
      km: "មានពន្លឺ RGB ជុំវិញ, USB។",
      en: "RGB edge lighting, USB powered.",
    },
    youtube: "https://www.youtube.com/watch?v=VIDEO_ID",
  },
  {
    id: 9,
    name: "Leather Desk Mat P3",
    category: "mousepad",
    price: 16,
    emoji: "🟫",
    image: "",
    desc: {
      km: "ស្បែកសំយោគ ទ្រទាំង Keyboard និង Mouse។",
      en: "Faux leather, fits keyboard and mouse together.",
    },
    youtube: "https://www.youtube.com/watch?v=VIDEO_ID",
  },

  {
    id: 10,
    name: "RGB LED Strip 5m",
    category: "rgb",
    price: 10,
    emoji: "💡",
    image: "",
    desc: {
      km: "បញ្ជាដោយ Remote/App, ១៦ លានពណ៌។",
      en: "Remote/app control, 16M colors.",
    },
    youtube: "https://www.youtube.com/watch?v=VIDEO_ID",
  },
  {
    id: 11,
    name: "RGB Fan Kit (3 pcs)",
    category: "rgb",
    price: 25,
    emoji: "🌀",
    image: "",
    desc: {
      km: "ហ្វាន PC ៣ គ្រាប់ ស្ងាត់ ពន្លឺ ARGB។",
      en: "3 quiet PC fans with ARGB lighting.",
    },
    youtube: "https://www.youtube.com/watch?v=VIDEO_ID",
  },
  {
    id: 12,
    name: "RGB Headset Stand",
    category: "rgb",
    price: 15,
    emoji: "🎧",
    image: "",
    desc: {
      km: "ជើងទ្រកាស មាន USB Hub + RGB។",
      en: "Headset stand with USB hub and RGB.",
    },
    youtube: "https://www.youtube.com/watch?v=VIDEO_ID",
  },
];

const CATEGORIES = [
  { key: "all", i18n: "cat_all" },
  { key: "keyboard", i18n: "cat_keyboard" },
  { key: "mouse", i18n: "cat_mouse" },
  { key: "mousepad", i18n: "cat_mousepad" },
  { key: "rgb", i18n: "cat_rgb" },
];

/* ---------- 3) ការបកប្រែ (កែអត្ថបទនៅទីនេះ) ---------- */
const YEAR = new Date().getFullYear();

const I18N = {
  km: {
    title: "ProClick Gear | Keyboard, Mouse, Mouse Pad, RGB",
    meta_desc:
      "ProClick Gear - ហាងលក់ Keyboard, Mouse, Mouse Pad និងគ្រឿង RGB សម្រាប់ Gamer និងអ្នកធ្វើការ។",

    nav_home: "ទំព័រដើម",
    nav_products: "ផលិតផល",
    nav_why: "ហេតុអ្វីជ្រើសរើសយើង",
    nav_how: "របៀបបញ្ជាទិញ",
    nav_contact: "ទំនាក់ទំនង",

    hero_title:
      'ឱ្យរាល់ <span class="rgb-text">Click</span><br>មានអារម្មណ៍ <span class="rgb-text">Pro</span>',
    hero_sub:
      "Keyboard, Mouse, Mouse Pad និងគ្រឿង RGB ទំនើបៗ សម្រាប់ Gamer និងអ្នកធ្វើការ។ មើលវីដេអូពិនិត្យផលិតផលពេញ ហើយបញ្ជាទិញតាម Telegram បានភ្លាមៗ។",
    hero_btn_products: "មើលផលិតផល",
    hero_btn_how: "របៀបបញ្ជាទិញ",
    stat1: "ផលិតផលពិត",
    stat2: "ឆ្លើយតប Telegram",
    stat3: "ពន្លឺស្អាតៗ",

    products_title: "ផលិតផលរបស់យើង",
    products_sub: "ចុចលើរូប ឬប៊ូតុង ▶ ដើម្បីមើលវីដេអូពេញលើ YouTube",
    search_ph: "🔍 ស្វែងរកផលិតផល...",
    empty: "រកមិនឃើញផលិតផលទេ។",
    cat_all: "ទាំងអស់",
    cat_keyboard: "⌨️ Keyboard",
    cat_mouse: "🖱️ Mouse",
    cat_mousepad: "🟦 Mouse Pad",
    cat_rgb: "💡 RGB",
    watch: "▶ មើលវីដេអូ",
    badge_video: "▶ វីដេអូ",
    buy: "🛒 ទិញ",
    video_title: "មើលវីដេអូលើ YouTube",

    why_title: "ហេតុអ្វីជ្រើសរើស ProClick Gear",
    why1_t: "គុណភាពប្រាកដ",
    why1_d: "ជ្រើសរើសតែផលិតផលដែលបានសាកល្បងរួច។",
    why2_t: "មានវីដេអូពិនិត្យ",
    why2_d: "មើលផលិតផលពិតៗ មុនសម្រេចចិត្តទិញ។",
    why3_t: "ធានាក្រោយការលក់",
    why3_d: "មានការធានា និងជំនួយបច្ចេកទេសពេលមានបញ្ហា។",
    why4_t: "ដឹកជញ្ជូនលឿន",
    why4_d: "ដឹកជញ្ជូនទូទាំងប្រទេស ទទួលបានលឿន។",

    how_title: "របៀបបញ្ជាទិញ",
    how_sub: "ងាយស្រួល ៣ ជំហាន គ្មានបញ្ហា Screenshot",
    step1_t: "ជ្រើសរើសផលិតផល",
    step1_d: "មើលរូប និងវីដេអូ រួចចុចប៊ូតុង “ទិញ”។",
    step2_t: "បំពេញចំនួន និងព័ត៌មាន",
    step2_d: "ជ្រើសចំនួន ហើយបំពេញឈ្មោះ ទូរស័ព្ទ ទីតាំង។",
    step3_t: "ផ្ញើតាម Telegram",
    step3_d: "សារបញ្ជាទិញត្រូវបានសរសេរស្រាប់ គ្រាន់តែចុច Send។",

    footer_desc:
      "ហាងលក់ Keyboard, Mouse, Mouse Pad និងគ្រឿង RGB សម្រាប់ Gamer និងអ្នកធ្វើការ។",
    footer_contact: "ទំនាក់ទំនង",
    footer_links: "តំណរហ័ស",
    link_top: "ត្រឡប់ទៅលើ ↑",
    copyright: `© ${YEAR} ProClick Gear. រក្សាសិទ្ធិគ្រប់យ៉ាង។`,

    modal_title: "បញ្ជាទិញ",
    modal_qty: "ចំនួន",
    modal_name: "ឈ្មោះ (មិនចាំបាច់)",
    modal_phone: "លេខទូរស័ព្ទ (មិនចាំបាច់)",
    modal_address: "ទីតាំងដឹកជញ្ជូន (មិនចាំបាច់)",
    modal_total: "សរុប",
    modal_cancel: "បោះបង់",
    modal_send: "✈ ផ្ញើតាម Telegram",

    theme_to_light: "ប្តូរទៅពន្លឺ (Light mode)",
    theme_to_dark: "ប្តូរទៅងងឹត (Dark mode)",

    msg_greeting: "សួស្តី ProClick Gear! ខ្ញុំចង់បញ្ជាទិញ៖",
    msg_product: "ផលិតផល",
    msg_price: "តម្លៃ",
    msg_qty: "ចំនួន",
    msg_total: "សរុប",
    msg_name: "ឈ្មោះ",
    msg_phone: "លេខទូរស័ព្ទ",
    msg_address: "ទីតាំងដឹកជញ្ជូន",
  },

  en: {
    title: "ProClick Gear | Keyboard, Mouse, Mouse Pad, RGB",
    meta_desc:
      "ProClick Gear - keyboards, mice, mouse pads and RGB gear for gamers and professionals.",

    nav_home: "Home",
    nav_products: "Products",
    nav_why: "Why Us",
    nav_how: "How to Order",
    nav_contact: "Contact",

    hero_title:
      'Make every <span class="rgb-text">Click</span><br>feel <span class="rgb-text">Pro</span>',
    hero_sub:
      "Modern keyboards, mice, mouse pads and RGB gear for gamers and professionals. Watch full video reviews, then order instantly on Telegram.",
    hero_btn_products: "Shop Products",
    hero_btn_how: "How to Order",
    stat1: "Genuine products",
    stat2: "Telegram support",
    stat3: "Vivid lighting",

    products_title: "Our Products",
    products_sub:
      "Click an image or the ▶ button to watch the full video on YouTube",
    search_ph: "🔍 Search products...",
    empty: "No products found.",
    cat_all: "All",
    cat_keyboard: "⌨️ Keyboard",
    cat_mouse: "🖱️ Mouse",
    cat_mousepad: "🟦 Mouse Pad",
    cat_rgb: "💡 RGB",
    watch: "▶ Watch video",
    badge_video: "▶ Video",
    buy: "🛒 Buy",
    video_title: "Watch the video on YouTube",

    why_title: "Why Choose ProClick Gear",
    why1_t: "Real Quality",
    why1_d: "We only sell products we have tested.",
    why2_t: "Video Reviews",
    why2_d: "See the real product before you decide to buy.",
    why3_t: "After-sales Warranty",
    why3_d: "Warranty and technical help when you need it.",
    why4_t: "Fast Delivery",
    why4_d: "Nationwide shipping, delivered quickly.",

    how_title: "How to Order",
    how_sub: "3 easy steps, no screenshots needed",
    step1_t: "Choose a product",
    step1_d: "Watch the photos and video, then click “Buy”.",
    step2_t: "Fill in details",
    step2_d: "Pick the quantity and add your name, phone and address.",
    step3_t: "Send on Telegram",
    step3_d: "Your order message is pre-written. Just press Send.",

    footer_desc:
      "Keyboards, mice, mouse pads and RGB gear for gamers and professionals.",
    footer_contact: "Contact",
    footer_links: "Quick Links",
    link_top: "Back to top ↑",
    copyright: `© ${YEAR} ProClick Gear. All rights reserved.`,

    modal_title: "Place Order",
    modal_qty: "Quantity",
    modal_name: "Name (optional)",
    modal_phone: "Phone number (optional)",
    modal_address: "Delivery address (optional)",
    modal_total: "Total",
    modal_cancel: "Cancel",
    modal_send: "✈ Send on Telegram",

    theme_to_light: "Switch to light mode",
    theme_to_dark: "Switch to dark mode",

    msg_greeting: "Hello ProClick Gear! I'd like to order:",
    msg_product: "Product",
    msg_price: "Price",
    msg_qty: "Quantity",
    msg_total: "Total",
    msg_name: "Name",
    msg_phone: "Phone",
    msg_address: "Delivery address",
  },
};

/* =========================================================
   ខាងក្រោមនេះជាកូដដំណើរការ — មិនចាំបាច់កែទេ
   ========================================================= */
const STORAGE = { lang: "pc_lang", theme: "pc_theme" };

const grid = document.getElementById("productGrid");
const filtersEl = document.getElementById("filters");
const searchEl = document.getElementById("search");
const emptyMsg = document.getElementById("emptyMsg");
const themeBtn = document.getElementById("themeToggle");
const root = document.documentElement;

function storeGet(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return null;
  }
}
function storeSet(key, val) {
  try {
    localStorage.setItem(key, val);
  } catch (e) {
    /* ignore */
  }
}

let activeCategory = "all";
let currentProduct = null;
let lang = I18N[storeGet(STORAGE.lang)]
  ? storeGet(STORAGE.lang)
  : CONFIG.defaultLang;
let theme =
  storeGet(STORAGE.theme) === "light"
    ? "light"
    : storeGet(STORAGE.theme) === "dark"
      ? "dark"
      : CONFIG.defaultTheme;

const t = (key) =>
  I18N[lang] && I18N[lang][key] !== undefined ? I18N[lang][key] : key;
const money = (n) =>
  `${CONFIG.currency}${Number(n).toFixed(2).replace(/\.00$/, "")}`;
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (m) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        m
      ],
  );
const catLabel = (key) => {
  const c = CATEGORIES.find((c) => c.key === key);
  return c ? t(c.i18n) : key;
};
const descOf = (p) =>
  p.desc && typeof p.desc === "object"
    ? p.desc[lang] || p.desc.km || p.desc.en || ""
    : p.desc || "";

/* ---------- Theme (Dark / Light) ---------- */
function applyTheme(next, save) {
  theme = next;
  root.setAttribute("data-theme", theme);
  root.setAttribute("data-bs-theme", theme);
  if (save) storeSet(STORAGE.theme, theme);
  themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
  const label = theme === "dark" ? t("theme_to_light") : t("theme_to_dark");
  themeBtn.title = label;
  themeBtn.setAttribute("aria-label", label);
}

/* ---------- Language (KM / EN) ---------- */
function translateStatic() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.title = t("title");
  document.getElementById("metaDesc").setAttribute("content", t("meta_desc"));
  document
    .querySelectorAll("[data-lang]")
    .forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
}

function applyLang(next, save) {
  lang = next;
  root.setAttribute("lang", lang);
  if (save) storeSet(STORAGE.lang, lang);
  translateStatic();
  renderFilters();
  renderProducts();
  applyTheme(theme, false); // ធ្វើបច្ចុប្បន្នភាព tooltip ប៊ូតុង theme តាមភាសា
}

/* ---------- Render ---------- */
function renderFilters() {
  filtersEl.innerHTML = CATEGORIES.map(
    (c) =>
      `<button class="filter-btn ${c.key === activeCategory ? "active" : ""}" data-cat="${c.key}">${t(c.i18n)}</button>`,
  ).join("");
}

function mediaHTML(p) {
  return p.image
    ? `<img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy">`
    : `<div class="product-emoji">${p.emoji || "🎮"}</div>`;
}

function renderProducts() {
  const q = searchEl.value.trim().toLowerCase();
  const list = PRODUCTS.filter(
    (p) =>
      (activeCategory === "all" || p.category === activeCategory) &&
      (p.name.toLowerCase().includes(q) || descOf(p).toLowerCase().includes(q)),
  );

  grid.innerHTML = list
    .map(
      (p) => `
    <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
      <div class="product-card">
        <a class="product-media" href="${esc(p.youtube)}" target="_blank" rel="noopener" title="${esc(t("video_title"))}">
          ${mediaHTML(p)}
          <span class="cat-tag">${catLabel(p.category)}</span>
          <span class="play-badge">${t("badge_video")}</span>
        </a>
        <div class="product-body">
          <div class="product-name">${esc(p.name)}</div>
          <div class="product-desc">${esc(descOf(p))}</div>
          <div class="neon-price product-price">${money(p.price)}</div>
          <div class="d-flex gap-2">
            <a class="btn btn-video btn-sm flex-fill" href="${esc(p.youtube)}" target="_blank" rel="noopener">${t("watch")}</a>
            <button class="btn btn-neon btn-sm flex-fill" data-buy="${p.id}">${t("buy")}</button>
          </div>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  emptyMsg.classList.toggle("d-none", list.length > 0);
}

/* ---------- Order modal ---------- */
const modalEl = document.getElementById("orderModal");
const orderModal = new bootstrap.Modal(modalEl);
const mQty = document.getElementById("mQty");

function updateTotal() {
  if (!currentProduct) return;
  const qty = Math.max(1, parseInt(mQty.value, 10) || 1);
  document.getElementById("mTotal").textContent = money(
    currentProduct.price * qty,
  );
}

function openOrder(id) {
  currentProduct = PRODUCTS.find((p) => p.id === id);
  if (!currentProduct) return;
  document.getElementById("mName").textContent = currentProduct.name;
  document.getElementById("mPrice").textContent = money(currentProduct.price);
  document.getElementById("mIcon").innerHTML = currentProduct.image
    ? `<img src="${esc(currentProduct.image)}" alt="">`
    : currentProduct.emoji || "🎮";
  mQty.value = 1;
  updateTotal();
  orderModal.show();
}

function sendToTelegram() {
  const p = currentProduct;
  if (!p) return;
  const qty = Math.max(1, parseInt(mQty.value, 10) || 1);
  const name = document.getElementById("mCustomer").value.trim();
  const phone = document.getElementById("mPhone").value.trim();
  const address = document.getElementById("mAddress").value.trim();

  const message = `${t("msg_greeting")}
- ${t("msg_product")}: ${p.name}
- ${t("msg_price")}: ${money(p.price)}
- ${t("msg_qty")}: ${qty}
- ${t("msg_total")}: ${money(p.price * qty)}

${t("msg_name")}: ${name}
${t("msg_phone")}: ${phone}
${t("msg_address")}: ${address}`;

  const url = `https://t.me/${CONFIG.telegramUsername}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
  orderModal.hide();
}

/* ---------- Events ---------- */
filtersEl.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-cat]");
  if (!btn) return;
  activeCategory = btn.dataset.cat;
  renderFilters();
  renderProducts();
});

searchEl.addEventListener("input", renderProducts);

grid.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-buy]");
  if (btn) openOrder(Number(btn.dataset.buy));
});

document.getElementById("qtyMinus").addEventListener("click", () => {
  mQty.value = Math.max(1, (parseInt(mQty.value, 10) || 1) - 1);
  updateTotal();
});
document.getElementById("qtyPlus").addEventListener("click", () => {
  mQty.value = (parseInt(mQty.value, 10) || 1) + 1;
  updateTotal();
});
mQty.addEventListener("input", updateTotal);
document.getElementById("sendOrder").addEventListener("click", sendToTelegram);

themeBtn.addEventListener("click", () =>
  applyTheme(theme === "dark" ? "light" : "dark", true),
);
document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang, true));
});

/* ---------- Init ---------- */
document.querySelectorAll(".js-telegram-contact").forEach((a) => {
  a.href = `https://t.me/${CONFIG.telegramUsername}`;
});
document.getElementById("facebookLink").href = CONFIG.facebookUrl;
document.getElementById("youtubeLink").href = CONFIG.youtubeChannelUrl;
document.getElementById("phoneText").textContent = `📞 ${CONFIG.phone}`;

applyLang(lang, false);
applyTheme(theme, false);

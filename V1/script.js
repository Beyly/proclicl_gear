/* =========================================================
   ProClick Gear — script.js
   កែតែផ្នែក CONFIG និង PRODUCTS ខាងក្រោម គឺគ្រប់គ្រាន់ហើយ
   ========================================================= */

/* ---------- 1) ព័ត៌មានហាង (កែនៅទីនេះ) ---------- */
const CONFIG = {
  telegramUsername: 'YOUR_TELEGRAM_USERNAME', // ដោយគ្មាន @
  facebookUrl: 'https://facebook.com/YOUR_PAGE',
  youtubeChannelUrl: 'https://youtube.com/@YOUR_CHANNEL',
  phone: '012 345 678',
  currency: '$'
};

/* ---------- 2) បញ្ជីផលិតផល (កែ/បន្ថែមនៅទីនេះ) ----------
   category: 'keyboard' | 'mouse' | 'mousepad' | 'rgb'
   image:    ដាក់ path រូប ឧ. 'images/k1.jpg' (ទុកទទេ '' ប្រើ emoji ជំនួស)
   youtube:  link វីដេអូពេញលើ YouTube
*/
const PRODUCTS = [
  { id: 1,  name: 'RGB Mechanical Keyboard K1', category: 'keyboard', price: 45, emoji: '⌨️', image: '',
    desc: 'Blue Switch, RGB 16 លាន​ពណ៌, ប៊ូតុងរឹងមាំ។',
    youtube: 'https://www.youtube.com/watch?v=VIDEO_ID' },
  { id: 2,  name: 'Wireless Keyboard K2', category: 'keyboard', price: 38, emoji: '⌨️', image: '',
    desc: 'Bluetooth + 2.4G, ថ្មប្រើបានយូរ, ស្ងាត់។',
    youtube: 'https://www.youtube.com/watch?v=VIDEO_ID' },
  { id: 3,  name: 'Compact 60% Keyboard K3', category: 'keyboard', price: 52, emoji: '⌨️', image: '',
    desc: 'ទំហំតូច Hot-swap Switch, Red Switch។',
    youtube: 'https://www.youtube.com/watch?v=VIDEO_ID' },

  { id: 4,  name: 'Gaming Mouse M1', category: 'mouse', price: 22, emoji: '🖱️', image: '',
    desc: 'DPI រហូតដល់ 12,000, RGB, ប៊ូតុង Macro ៦។',
    youtube: 'https://www.youtube.com/watch?v=VIDEO_ID' },
  { id: 5,  name: 'Wireless Mouse M2', category: 'mouse', price: 18, emoji: '🖱️', image: '',
    desc: 'គ្មានខ្សែ, ស្រាល, សាកថ្មបាន។',
    youtube: 'https://www.youtube.com/watch?v=VIDEO_ID' },
  { id: 6,  name: 'Ultra-light Mouse M3', category: 'mouse', price: 35, emoji: '🖱️', image: '',
    desc: 'ស្រាលតែ 60 ក្រាម សម្រាប់ FPS។',
    youtube: 'https://www.youtube.com/watch?v=VIDEO_ID' },

  { id: 7,  name: 'Mouse Pad XL (900×400)', category: 'mousepad', price: 12, emoji: '🟦', image: '',
    desc: 'ទំហំធំ ស្អិតមិនរអិល, គែមដេរមិនរបើក។',
    youtube: 'https://www.youtube.com/watch?v=VIDEO_ID' },
  { id: 8,  name: 'RGB Mouse Pad P2', category: 'mousepad', price: 20, emoji: '🌈', image: '',
    desc: 'មានពន្លឺ RGB ជុំវិញ, USB។',
    youtube: 'https://www.youtube.com/watch?v=VIDEO_ID' },
  { id: 9,  name: 'Leather Desk Mat P3', category: 'mousepad', price: 16, emoji: '🟫', image: '',
    desc: 'ស្បែកសំយោគ ទ្រទាំង Keyboard និង Mouse។',
    youtube: 'https://www.youtube.com/watch?v=VIDEO_ID' },

  { id: 10, name: 'RGB LED Strip 5m', category: 'rgb', price: 10, emoji: '💡', image: '',
    desc: 'បញ្ជាដោយ Remote/App, ១៦ លានពណ៌។',
    youtube: 'https://www.youtube.com/watch?v=VIDEO_ID' },
  { id: 11, name: 'RGB Fan Kit (3 pcs)', category: 'rgb', price: 25, emoji: '🌀', image: '',
    desc: 'ហ្វាន PC ៣ គ្រាប់ ស្ងាត់ ពន្លឺ ARGB។',
    youtube: 'https://www.youtube.com/watch?v=VIDEO_ID' },
  { id: 12, name: 'RGB Headset Stand', category: 'rgb', price: 15, emoji: '🎧', image: '',
    desc: 'ជើងទ្រកាស មាន USB Hub + RGB។',
    youtube: 'https://www.youtube.com/watch?v=VIDEO_ID' }
];

const CATEGORIES = [
  { key: 'all',      label: 'ទាំងអស់' },
  { key: 'keyboard', label: '⌨️ Keyboard' },
  { key: 'mouse',    label: '🖱️ Mouse' },
  { key: 'mousepad', label: '🟦 Mouse Pad' },
  { key: 'rgb',      label: '💡 RGB' }
];

/* =========================================================
   ខាងក្រោមនេះជាកូដដំណើរការ — មិនចាំបាច់កែទេ
   ========================================================= */
const grid = document.getElementById('productGrid');
const filtersEl = document.getElementById('filters');
const searchEl = document.getElementById('search');
const emptyMsg = document.getElementById('emptyMsg');

let activeCategory = 'all';
let currentProduct = null;

const money = n => `${CONFIG.currency}${Number(n).toFixed(2).replace(/\.00$/, '')}`;
const catLabel = key => (CATEGORIES.find(c => c.key === key) || {}).label || key;
const esc = s => String(s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));

function renderFilters() {
  filtersEl.innerHTML = CATEGORIES.map(c =>
    `<button class="filter-btn ${c.key === activeCategory ? 'active' : ''}" data-cat="${c.key}">${c.label}</button>`
  ).join('');
}

function mediaHTML(p) {
  return p.image
    ? `<img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy">`
    : `<div class="product-emoji">${p.emoji || '🎮'}</div>`;
}

function renderProducts() {
  const q = searchEl.value.trim().toLowerCase();
  const list = PRODUCTS.filter(p =>
    (activeCategory === 'all' || p.category === activeCategory) &&
    (p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
  );

  grid.innerHTML = list.map(p => `
    <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
      <div class="product-card">
        <a class="product-media" href="${esc(p.youtube)}" target="_blank" rel="noopener" title="មើលវីដេអូលើ YouTube">
          ${mediaHTML(p)}
          <span class="cat-tag">${catLabel(p.category)}</span>
          <span class="play-badge">▶ វីដេអូ</span>
        </a>
        <div class="product-body">
          <div class="product-name">${esc(p.name)}</div>
          <div class="product-desc">${esc(p.desc)}</div>
          <div class="neon-price product-price">${money(p.price)}</div>
          <div class="d-flex gap-2">
            <a class="btn btn-video btn-sm flex-fill" href="${esc(p.youtube)}" target="_blank" rel="noopener">▶ មើលវីដេអូ</a>
            <button class="btn btn-neon btn-sm flex-fill" data-buy="${p.id}">🛒 ទិញ</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  emptyMsg.classList.toggle('d-none', list.length > 0);
}

/* ---------- Order modal ---------- */
const modalEl = document.getElementById('orderModal');
const orderModal = new bootstrap.Modal(modalEl);
const mQty = document.getElementById('mQty');

function updateTotal() {
  const qty = Math.max(1, parseInt(mQty.value, 10) || 1);
  document.getElementById('mTotal').textContent = money(currentProduct.price * qty);
}

function openOrder(id) {
  currentProduct = PRODUCTS.find(p => p.id === id);
  if (!currentProduct) return;
  document.getElementById('mName').textContent = currentProduct.name;
  document.getElementById('mPrice').textContent = money(currentProduct.price);
  document.getElementById('mIcon').innerHTML = currentProduct.image
    ? `<img src="${esc(currentProduct.image)}" alt="">`
    : (currentProduct.emoji || '🎮');
  mQty.value = 1;
  updateTotal();
  orderModal.show();
}

function sendToTelegram() {
  const p = currentProduct;
  const qty = Math.max(1, parseInt(mQty.value, 10) || 1);
  const name = document.getElementById('mCustomer').value.trim();
  const phone = document.getElementById('mPhone').value.trim();
  const address = document.getElementById('mAddress').value.trim();

  const message =
`សួស្តី ProClick Gear! ខ្ញុំចង់បញ្ជាទិញ៖
- ផលិតផល: ${p.name}
- តម្លៃ: ${money(p.price)}
- ចំនួន: ${qty}
- សរុប: ${money(p.price * qty)}

ឈ្មោះ: ${name}
លេខទូរស័ព្ទ: ${phone}
ទីតាំងដឹកជញ្ជូន: ${address}`;

  const url = `https://t.me/${CONFIG.telegramUsername}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener');
  orderModal.hide();
}

/* ---------- Events ---------- */
filtersEl.addEventListener('click', e => {
  const btn = e.target.closest('[data-cat]');
  if (!btn) return;
  activeCategory = btn.dataset.cat;
  renderFilters();
  renderProducts();
});

searchEl.addEventListener('input', renderProducts);

grid.addEventListener('click', e => {
  const btn = e.target.closest('[data-buy]');
  if (btn) openOrder(Number(btn.dataset.buy));
});

document.getElementById('qtyMinus').addEventListener('click', () => {
  mQty.value = Math.max(1, (parseInt(mQty.value, 10) || 1) - 1);
  updateTotal();
});
document.getElementById('qtyPlus').addEventListener('click', () => {
  mQty.value = (parseInt(mQty.value, 10) || 1) + 1;
  updateTotal();
});
mQty.addEventListener('input', updateTotal);
document.getElementById('sendOrder').addEventListener('click', sendToTelegram);

/* ---------- Init ---------- */
document.querySelectorAll('.js-telegram-contact').forEach(a => {
  a.href = `https://t.me/${CONFIG.telegramUsername}`;
});
document.getElementById('facebookLink').href = CONFIG.facebookUrl;
document.getElementById('youtubeLink').href = CONFIG.youtubeChannelUrl;
document.getElementById('phoneText').textContent = `📞 ${CONFIG.phone}`;
document.getElementById('year').textContent = new Date().getFullYear();

renderFilters();
renderProducts();

/* ============================================================
   Ferretería Ernesto's — app.js v2
   ============================================================ */

// ─── Datos ───────────────────────────────────────────────────
const CATEGORIES = [
  { name: 'Construcción', icon: '🔨', img: 'https://images.unsplash.com/photo-1590736969596-f27b3f29c7d2?w=400&q=80' },
  { name: 'Herramientas', icon: '🔧', img: 'https://images.unsplash.com/photo-1518709414768-a88981a4515d?w=400&q=80' },
  { name: 'Eléctrico',    icon: '⚡', img: 'https://images.unsplash.com/photo-1599377077583-bf8f3d9eb0f1?w=400&q=80' },
  { name: 'Fontanería',   icon: '💧', img: 'https://images.unsplash.com/photo-1503788943072-cd614c3056cf?w=400&q=80' },
  { name: 'Pintura',      icon: '🎨', img: 'https://images.unsplash.com/photo-1519520104014-df63821cb6f9?w=400&q=80' },
  { name: 'Medición',     icon: '📏', img: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400&q=80' },
];

const BRANDS = [
  { name: 'DeWalt',         logo: '🟡', desc: 'Herramientas eléctricas de alto rendimiento', products: 24 },
  { name: 'Makita',         logo: '🔵', desc: 'Innovación y calidad desde 1915',             products: 18 },
  { name: 'Bosch',          logo: '🔴', desc: 'Tecnología alemana para profesionales',        products: 31 },
  { name: 'Stanley',        logo: '🟠', desc: 'Herramientas manuales de confianza',           products: 15 },
  { name: 'Black & Decker', logo: '⚫', desc: 'Soluciones para el hogar y profesionales',     products: 20 },
  { name: 'Irwin',          logo: '🟢', desc: 'Herramientas de corte y sujeción',             products: 12 },
];

const PRODUCTS = [
  { id:1,  name:'Taladro Inalámbrico DeWalt 20V MAX',   brand:'DeWalt',         price:249.99, oldPrice:349.99, rating:5, reviews:128, img:'https://images.unsplash.com/photo-1546827209-a218e99fdbe9?w=400&q=80', badge:'-29%',       inStock:true,  categoria:'Herramientas', images:['https://images.unsplash.com/photo-1546827209-a218e99fdbe9?w=800&q=80','https://images.unsplash.com/photo-1518709414768-a88981a4515d?w=800&q=80','https://images.unsplash.com/photo-1770763233593-74dfd0da7bf0?w=800&q=80'] },
  { id:2,  name:'Sierra Circular Makita 7-1/4"',        brand:'Makita',         price:189.99, oldPrice:239.99, rating:4, reviews:87,  img:'https://images.unsplash.com/photo-1518709414768-a88981a4515d?w=400&q=80', badge:'-21%',       inStock:true,  categoria:'Herramientas', images:['https://images.unsplash.com/photo-1518709414768-a88981a4515d?w=800&q=80'] },
  { id:3,  name:'Juego de Llaves Stanley 5 Piezas',     brand:'Stanley',        price:45.99,  oldPrice:null,   rating:5, reviews:234, img:'https://images.unsplash.com/photo-1503788943072-cd614c3056cf?w=400&q=80', badge:null,         inStock:true,  categoria:'Herramientas', images:['https://images.unsplash.com/photo-1503788943072-cd614c3056cf?w=800&q=80'] },
  { id:4,  name:'Amoladora Angular Bosch 4-1/2"',       brand:'Bosch',          price:129.99, oldPrice:159.99, rating:4, reviews:156, img:'https://images.unsplash.com/photo-1770763233593-74dfd0da7bf0?w=400&q=80', badge:'-19%',       inStock:true,  categoria:'Herramientas', images:['https://images.unsplash.com/photo-1770763233593-74dfd0da7bf0?w=800&q=80'] },
  { id:5,  name:'Martillo Demoledor Eléctrico',         brand:'DeWalt',         price:399.99, oldPrice:null,   rating:5, reviews:92,  img:'https://images.unsplash.com/photo-1731694406562-1cfb3dd25624?w=400&q=80', badge:null,         inStock:false, categoria:'Construcción', images:['https://images.unsplash.com/photo-1731694406562-1cfb3dd25624?w=800&q=80'] },
  { id:6,  name:'Nivel Láser Autonivelante',            brand:'Bosch',          price:179.99, oldPrice:229.99, rating:5, reviews:203, img:'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400&q=80', badge:'Popular',    inStock:true,  categoria:'Medición',     images:['https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&q=80'] },
  { id:7,  name:'Compresor de Aire 6 Galones',          brand:'Black & Decker', price:199.99, oldPrice:null,   rating:4, reviews:145, img:'https://images.unsplash.com/photo-1590736969596-f27b3f29c7d2?w=400&q=80', badge:null,         inStock:true,  categoria:'Herramientas', images:['https://images.unsplash.com/photo-1590736969596-f27b3f29c7d2?w=800&q=80'] },
  { id:8,  name:'Pistola de Clavos Neumática',          brand:'Stanley',        price:149.99, oldPrice:189.99, rating:4, reviews:98,  img:'https://images.unsplash.com/photo-1599377077583-bf8f3d9eb0f1?w=400&q=80', badge:'-21%',       inStock:true,  categoria:'Construcción', images:['https://images.unsplash.com/photo-1599377077583-bf8f3d9eb0f1?w=800&q=80'] },
  { id:9,  name:'Cable Eléctrico 12 AWG x 100m',       brand:'Irwin',          price:89.99,  oldPrice:110.00, rating:4, reviews:67,  img:'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=400&q=80', badge:'-18%',       inStock:true,  categoria:'Eléctrico',    images:['https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&q=80'] },
  { id:10, name:'Pintura Látex Exterior 5 Galones',    brand:'Black & Decker', price:65.00,  oldPrice:null,   rating:4, reviews:112, img:'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=400&q=80', badge:null,         inStock:true,  categoria:'Pintura',      images:['https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800&q=80'] },
  { id:11, name:'Tubería PVC 4" x 6m',                 brand:'Irwin',          price:28.50,  oldPrice:null,   rating:5, reviews:89,  img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', badge:null,         inStock:true,  categoria:'Fontanería',   images:['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'] },
  { id:12, name:'Cemento Portland 42.5 kg',            brand:'Stanley',        price:12.99,  oldPrice:null,   rating:5, reviews:310, img:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80', badge:'Más vendido',inStock:true,  categoria:'Construcción', images:['https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80'] },
];

const IDEAS = [
  { title:'Cómo instalar una llave de agua',     desc:'Guía paso a paso para cambiar o instalar llaves de agua en tu hogar sin necesidad de un plomero.', img:'https://images.unsplash.com/photo-1503788943072-cd614c3056cf?w=400&q=80', tag:'Fontanería',   tiempo:'30 min' },
  { title:'Pintar paredes como un profesional',   desc:'Técnicas y consejos para lograr un acabado perfecto en tus paredes con los productos correctos.',   img:'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=400&q=80', tag:'Pintura',      tiempo:'2 horas' },
  { title:'Instalar un tomacorriente',            desc:'Aprende a instalar o reemplazar tomacorrientes de forma segura siguiendo el código eléctrico.',     img:'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=400&q=80', tag:'Eléctrico',    tiempo:'45 min' },
  { title:'Construir una pared de block',         desc:'Todo lo que necesitas saber para levantar una pared de block resistente y bien nivelada.',          img:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80', tag:'Construcción', tiempo:'1 día' },
  { title:'Cómo usar un taladro correctamente',   desc:'Guía básica para principiantes sobre el uso seguro y efectivo del taladro en diferentes materiales.',img:'https://images.unsplash.com/photo-1546827209-a218e99fdbe9?w=400&q=80', tag:'Herramientas', tiempo:'15 min' },
  { title:'Medir y nivelar como experto',         desc:'Usa correctamente los instrumentos de medición para obtener resultados precisos en tus proyectos.', img:'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400&q=80', tag:'Medición',     tiempo:'20 min' },
];

// ─── Estado carrito ──────────────────────────────────────────
let cart = [];

// ─── Helpers ─────────────────────────────────────────────────
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function starsHTML(rating, size = 14) {
  return Array.from({ length: 5 }, (_, i) =>
    `<svg class="star ${i < rating ? 'star--filled' : 'star--empty'}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${i < rating ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
  ).join('');
}

// ─── Navegación ───────────────────────────────────────────────
function showSection(name) {
  const ids = ['secInicio','secPromociones','secMarcas','secIdeas','secDepartamento','secBusqueda'];
  ids.forEach(id => { const el = document.getElementById(id); if (el) el.style.display = 'none'; });
  const target = document.getElementById('sec' + name.charAt(0).toUpperCase() + name.slice(1));
  if (target) target.style.display = '';
  const labels = { inicio:'Inicio', promociones:'Promociones', marcas:'Marcas', ideas:'Ideas y soluciones', departamento:'Departamentos', busqueda:'Búsqueda' };
  const bc = $('#breadcrumbCurrent');
  if (bc) bc.textContent = labels[name] || name;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── Promo Banner ─────────────────────────────────────────────
$('#closeBanner').addEventListener('click', () => $('#promoBanner').classList.add('hidden'));

// ─── Hero Slider ──────────────────────────────────────────────
(function() {
  const slides = $$('.hero__slide');
  const dotsEl = $('#heroDots');
  if (!slides.length || !dotsEl) return;
  let cur = 0, timer;
  slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'hero__dot' + (i===0?' active':'');
    d.onclick = () => go(i);
    dotsEl.appendChild(d);
  });
  function go(n) {
    slides[cur].classList.remove('active'); $$('.hero__dot')[cur].classList.remove('active');
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('active'); $$('.hero__dot')[cur].classList.add('active');
    clearInterval(timer); timer = setInterval(() => go(cur+1), 5000);
  }
  $('#heroNext').onclick = () => go(cur+1);
  $('#heroPrev').onclick = () => go(cur-1);
  timer = setInterval(() => go(cur+1), 5000);
})();

// ─── Categorías ───────────────────────────────────────────────
function renderCategories() {
  const grid = $('#categoriesGrid');
  if (!grid) return;
  grid.innerHTML = CATEGORIES.map(c => `
    <div class="category-card" data-cat="${c.name}" style="cursor:pointer">
      <img src="${c.img}" alt="${c.name}" loading="lazy">
      <div class="category-card__overlay"></div>
      <div class="category-card__label"><span>${c.icon}</span><span>${c.name}</span></div>
    </div>`).join('');
  $$('.category-card',grid).forEach(card => card.addEventListener('click', () => filterByDept(card.dataset.cat)));
}
renderCategories();

$$('.stars-row[data-rating]').forEach(el => el.innerHTML = starsHTML(parseInt(el.dataset.rating)));

const priceRange = $('#priceRange'), priceMax = $('#priceMax');
if (priceRange) priceRange.addEventListener('input', () => priceMax.textContent = `$${priceRange.value}`);

const btnFilter = $('.btn-apply-filters');
if (btnFilter) {
  btnFilter.addEventListener('click', () => {
    const cats = $$('input[type=checkbox]:checked').map(cb => cb.nextElementSibling?.textContent?.trim()).filter(c => c && c !== 'Solo en stock');
    const maxP = priceRange ? parseInt(priceRange.value) : 1000;
    const onlyStock = $$('input[type=checkbox]:checked').some(cb => cb.nextElementSibling?.textContent?.trim() === 'Solo en stock');
    const rEl = $('input[name=rating]:checked');
    const minR = rEl ? parseInt(rEl.closest('.filter-check').querySelector('.stars-row').dataset.rating) : 0;
    const filtered = PRODUCTS.filter(p =>
      (!cats.length || cats.includes(p.categoria)) &&
      p.price <= maxP &&
      (!onlyStock || p.inStock) &&
      (!minR || p.rating >= minR)
    );
    renderProducts(filtered);
    showToast(`${filtered.length} producto(s) encontrados`);
  });
}

// ─── Render Productos ─────────────────────────────────────────
function renderProducts(products, containerId = 'productsGrid') {
  const grid = $(`#${containerId}`);
  if (!grid) return;
  if (!products || !products.length) {
    grid.innerHTML = '<p style="color:var(--subtle);grid-column:1/-1;padding:2rem">No se encontraron productos.</p>';
    return;
  }
  grid.innerHTML = products.map((p, i) => `
    <div class="product-card" style="animation-delay:${i*0.07}s">
      <div class="product-card__image" data-id="${p.id}">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<div class="product-card__badge">${p.badge}</div>` : ''}
        <button class="product-card__fav" data-id="${p.id}">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        </button>
      </div>
      <div class="product-card__body">
        <p class="product-card__brand">${p.brand}</p>
        <p class="product-card__name" data-id="${p.id}">${p.name}</p>
        <div class="product-card__rating">${starsHTML(p.rating)}<span class="product-card__reviews">(${p.reviews})</span></div>
        <div class="product-card__price">
          ${p.oldPrice ? `<p class="product-card__old-price">$${p.oldPrice.toFixed(2)}</p>` : ''}
          <p class="product-card__current-price">$${p.price.toFixed(2)}</p>
        </div>
        <p class="product-card__stock ${p.inStock?'product-card__stock--in':'product-card__stock--out'}">${p.inStock?'En stock':'Agotado'}</p>
        <div class="product-card__actions">
          <button class="btn-cart" data-id="${p.id}" ${!p.inStock?'disabled':''}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            Agregar al carrito
          </button>
          <button class="btn-buy" data-id="${p.id}" ${!p.inStock?'disabled':''}>Comprar ahora</button>
        </div>
      </div>
    </div>`).join('');

  $$('.product-card__image,.product-card__name',grid).forEach(el => el.addEventListener('click', () => openModal(parseInt(el.dataset.id))));
  $$('.product-card__fav',grid).forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation(); btn.classList.toggle('active');
    btn.querySelector('svg').setAttribute('fill', btn.classList.contains('active')?'currentColor':'none');
  }));
  $$('.btn-cart',grid).forEach(btn => btn.addEventListener('click', () => { const p=PRODUCTS.find(x=>x.id===parseInt(btn.dataset.id)); if(p) addToCart(p); }));
  $$('.btn-buy',grid).forEach(btn => btn.addEventListener('click', () => { const p=PRODUCTS.find(x=>x.id===parseInt(btn.dataset.id)); if(p){addToCart(p);openCart();} }));
}
renderProducts(PRODUCTS);

// ─── Navbar ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  $$('.navbar__links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const t = link.textContent.trim().toLowerCase();
      if (t.includes('promoc')) { renderPromociones(); showSection('promociones'); }
      else if (t.includes('marca')) { renderMarcas(); showSection('marcas'); }
      else if (t.includes('ideas')) { renderIdeas(); showSection('ideas'); }
    });
  });
  const logo = $('.header__logo');
  if (logo) { logo.style.cursor='pointer'; logo.addEventListener('click', () => showSection('inicio')); }
});

// ─── Mega Menu links ──────────────────────────────────────────
$$('.mega-menu__col ul li a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const cat = a.closest('.mega-menu__col').querySelector('h3').textContent.trim();
    filterByDept(cat);
    $('#megaMenu').classList.remove('open');
  });
});

function filterByDept(cat) {
  const filtered = PRODUCTS.filter(p => p.categoria === cat);
  const title = $('#deptTitle');
  if (title) title.textContent = cat;
  renderProducts(filtered, 'deptGrid');
  showSection('departamento');
}

// ─── Promociones ──────────────────────────────────────────────
function renderPromociones() {
  renderProducts(PRODUCTS.filter(p => p.oldPrice !== null), 'promoGrid');
}

// ─── Marcas ───────────────────────────────────────────────────
function renderMarcas() {
  const grid = $('#brandsGrid');
  if (!grid) return;
  grid.innerHTML = BRANDS.map(b => `
    <div class="brand-card" data-brand="${b.name}">
      <div class="brand-card__logo">${b.logo}</div>
      <h3 class="brand-card__name">${b.name}</h3>
      <p class="brand-card__desc">${b.desc}</p>
      <span class="brand-card__count">${b.products} productos</span>
    </div>`).join('');
  $$('.brand-card',grid).forEach(card => card.addEventListener('click', () => {
    const filtered = PRODUCTS.filter(p => p.brand === card.dataset.brand);
    const title = $('#deptTitle'); if(title) title.textContent = card.dataset.brand;
    renderProducts(filtered,'deptGrid');
    showSection('departamento');
  }));
}

// ─── Ideas ────────────────────────────────────────────────────
function renderIdeas() {
  const grid = $('#ideasGrid');
  if (!grid) return;
  grid.innerHTML = IDEAS.map(idea => `
    <div class="idea-card">
      <div class="idea-card__img">
        <img src="${idea.img}" alt="${idea.title}" loading="lazy">
        <span class="idea-card__tag">${idea.tag}</span>
      </div>
      <div class="idea-card__body">
        <h3 class="idea-card__title">${idea.title}</h3>
        <p class="idea-card__desc">${idea.desc}</p>
        <div class="idea-card__footer">
          <span>⏱ ${idea.tiempo}</span>
          <button class="idea-card__btn">Ver guía →</button>
        </div>
      </div>
    </div>`).join('');
}

// ─── Búsqueda ─────────────────────────────────────────────────
const searchInput = $('#searchInput');
const searchDropdown = $('#searchDropdown');
const dropdownDefault = $('#dropdownDefault');
const dropdownResults = $('#dropdownResults');
const dropdownResultsList = $('#dropdownResultsList');

searchInput.addEventListener('focus', () => searchDropdown.classList.add('open'));
document.addEventListener('click', e => { if(!$('#searchWrapper').contains(e.target)) searchDropdown.classList.remove('open'); });

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) { dropdownDefault.style.display=''; dropdownResults.style.display='none'; return; }
  const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
  dropdownDefault.style.display = 'none'; dropdownResults.style.display = '';
  dropdownResultsList.innerHTML = matches.length
    ? matches.slice(0,6).map(p => `<button class="search-dropdown__item" data-id="${p.id}"><div class="search-dropdown__row"><span>${p.name}</span><span class="search-dropdown__cat">${p.categoria}</span></div></button>`).join('')
    : '<p style="padding:0.5rem 0.75rem;font-size:0.875rem;color:var(--subtle)">No se encontraron resultados</p>';
  $$('.search-dropdown__item',dropdownResultsList).forEach(btn => btn.addEventListener('click', () => {
    searchDropdown.classList.remove('open'); openModal(parseInt(btn.dataset.id));
  }));
});

searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') { searchDropdown.classList.remove('open'); doSearch(searchInput.value.trim()); }
});

$$('.search-dropdown__item','#dropdownDefault') || [];
document.querySelectorAll('#dropdownDefault .search-dropdown__item').forEach(btn => {
  btn.addEventListener('click', () => { searchInput.value=btn.textContent.trim(); searchDropdown.classList.remove('open'); doSearch(btn.textContent.trim()); });
});

function doSearch(query) {
  if (!query) return;
  const q = query.toLowerCase();
  const results = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.categoria.toLowerCase().includes(q));
  const title = $('#searchTitle'); if(title) title.textContent = `Resultados para "${query}" (${results.length})`;
  renderProducts(results,'searchGrid');
  showSection('busqueda');
}

// ─── Mega Menu ────────────────────────────────────────────────
const deptsBtn = $('#deptsBtn'), megaMenu = $('#megaMenu');
let megaTimeout;
deptsBtn.addEventListener('mouseenter', () => { clearTimeout(megaTimeout); megaMenu.classList.add('open'); });
deptsBtn.addEventListener('mouseleave', () => { megaTimeout = setTimeout(() => megaMenu.classList.remove('open'), 150); });
megaMenu.addEventListener('mouseenter', () => { clearTimeout(megaTimeout); megaMenu.classList.add('open'); });
megaMenu.addEventListener('mouseleave', () => { megaTimeout = setTimeout(() => megaMenu.classList.remove('open'), 150); });
deptsBtn.addEventListener('click', () => megaMenu.classList.toggle('open'));

// ─── Carrito ──────────────────────────────────────────────────
function updateCartBadge() {
  const total = cart.reduce((s,i)=>s+i.qty,0);
  const badge = $('#cartBadge'); badge.textContent=total; badge.style.display=total>0?'flex':'none';
}

function addToCart(product) {
  const ex = cart.find(i=>i.id===product.id);
  if (ex) ex.qty++; else cart.push({id:product.id,name:product.name,brand:product.brand,price:product.price,qty:1,img:product.img});
  updateCartBadge(); renderCartItems();
  showToast(`${product.name} agregado al carrito`);
}

function removeFromCart(id) { cart=cart.filter(i=>i.id!==id); renderCartItems(); updateCartBadge(); }
function changeQty(id,delta) { const item=cart.find(i=>i.id===id); if(item){item.qty=Math.max(1,item.qty+delta); renderCartItems(); updateCartBadge();} }

function renderCartItems() {
  const container = $('#cartItems'), footer = $('#cartFooter');
  if (!cart.length) {
    container.innerHTML=`<div class="cart-empty"><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg><p>Tu carrito está vacío</p></div>`;
    footer.style.display='none'; return;
  }
  container.innerHTML = cart.map(item=>`
    <div class="cart-item" data-id="${item.id}">
      <img src="${item.img}" alt="${item.name}">
      <div class="cart-item__info">
        <p class="cart-item__brand">${item.brand}</p>
        <p class="cart-item__name">${item.name}</p>
        <div class="cart-item__row">
          <div class="qty-control">
            <button class="qty-btn" data-action="minus" data-id="${item.id}"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" data-action="plus" data-id="${item.id}"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
          </div>
          <span class="cart-item__price">$${(item.price*item.qty).toFixed(2)}</span>
        </div>
      </div>
      <button class="cart-item__remove" data-id="${item.id}"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>`).join('');
  $$('.qty-btn',container).forEach(btn=>btn.addEventListener('click',()=>changeQty(parseInt(btn.dataset.id),btn.dataset.action==='plus'?1:-1)));
  $$('.cart-item__remove',container).forEach(btn=>btn.addEventListener('click',()=>removeFromCart(parseInt(btn.dataset.id))));
  const sub=cart.reduce((s,i)=>s+i.price*i.qty,0), tax=sub*0.13, shipping=sub>=100?0:15, total=sub+tax+shipping;
  $('#cartSubtotal').textContent=`$${sub.toFixed(2)}`; $('#cartTax').textContent=`$${tax.toFixed(2)}`;
  $('#cartShipping').textContent=shipping===0?'GRATIS':`$${shipping.toFixed(2)}`; $('#cartTotal').textContent=`$${total.toFixed(2)}`;
  $('#freeShippingMsg').textContent=shipping>0?`Agrega $${(100-sub).toFixed(2)} más para envío gratis`:'¡Tienes envío gratis! 🎉';
  footer.style.display='';
}
renderCartItems(); updateCartBadge();

function openCart() { $('#cartOverlay').classList.add('open'); $('#cartSidebar').classList.add('open'); document.body.style.overflow='hidden'; }
function closeCart() { $('#cartOverlay').classList.remove('open'); $('#cartSidebar').classList.remove('open'); document.body.style.overflow=''; }

$('#cartBtn').addEventListener('click', openCart);
$('#topCartBtn').addEventListener('click', openCart);
$('#cartClose').addEventListener('click', closeCart);
$('#cartOverlay').addEventListener('click', closeCart);

// ─── Modal ────────────────────────────────────────────────────
let currentProduct = null, modalQty = 1;

function openModal(id) {
  const p = PRODUCTS.find(x=>x.id===id); if(!p) return;
  currentProduct=p; modalQty=1; $('#qtyNum').textContent=1;
  $('#modalBrand').textContent=p.brand; $('#modalName').textContent=p.name; $('#modalPrice').textContent=`$${p.price.toFixed(2)}`;
  const oldEl=$('#modalOldPrice'); if(p.oldPrice){oldEl.textContent=`$${p.oldPrice.toFixed(2)}`;oldEl.style.display='';}else oldEl.style.display='none';
  const badgeEl=$('#modalBadge'); if(p.badge){badgeEl.textContent=p.badge;badgeEl.style.display='';}else badgeEl.style.display='none';
  $('#modalRating').innerHTML=starsHTML(p.rating,18)+`<span style="font-size:0.85rem;color:var(--subtle)">(${p.reviews} opiniones)</span>`;
  const imgs=p.images||[p.img]; $('#modalMainImg').src=imgs[0];
  $('#modalThumbs').innerHTML=imgs.map((src,i)=>`<div class="modal__thumb ${i===0?'active':''}" data-src="${src}"><img src="${src}" alt="img ${i+1}"></div>`).join('');
  $$('.modal__thumb',$('#modalThumbs')).forEach(t=>t.addEventListener('click',()=>{$$('.modal__thumb').forEach(x=>x.classList.remove('active'));t.classList.add('active');$('#modalMainImg').src=t.dataset.src;}));
  $$('.stars-row[data-rating]',$('#productModal')).forEach(el=>el.innerHTML=starsHTML(parseInt(el.dataset.rating)));
  $('#modalOverlay').classList.add('open'); document.body.style.overflow='hidden';
}

function closeModal() { $('#modalOverlay').classList.remove('open'); document.body.style.overflow=''; }

$('#modalClose').addEventListener('click', closeModal);
$('#modalOverlay').addEventListener('click', e=>{if(e.target===$('#modalOverlay'))closeModal();});
$('#qtyMinus').addEventListener('click', ()=>{if(modalQty>1)$('#qtyNum').textContent=--modalQty;});
$('#qtyPlus').addEventListener('click', ()=>$('#qtyNum').textContent=++modalQty);
$('#modalAddToCart').addEventListener('click', ()=>{if(!currentProduct)return;for(let i=0;i<modalQty;i++)addToCart(currentProduct);closeModal();openCart();});
$$('.modal__tab').forEach(tab=>tab.addEventListener('click',()=>{$$('.modal__tab').forEach(t=>t.classList.remove('active'));$$('.modal__tab-content').forEach(c=>c.classList.remove('active'));tab.classList.add('active');$(`#tab-${tab.dataset.tab}`).classList.add('active');}));

// ─── Toast ────────────────────────────────────────────────────
function showToast(msg) {
  const container=$('#toastContainer'), toast=document.createElement('div');
  toast.className='toast';
  toast.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(()=>{toast.classList.add('removing');toast.addEventListener('animationend',()=>toast.remove());},3000);
}
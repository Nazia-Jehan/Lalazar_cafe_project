const ALL_MENU_ITEMS = [
  {
    id: 'item-1',
    name: 'Half Fried Egg',
    category: 'Breakfast',
    price: 80,
    description: 'Freshly fried sunny side up egg with light black pepper seasoning.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80',
    isSignature: false
  },
  {
    id: 'item-2',
    name: 'Channay Plate',
    category: 'Breakfast',
    price: 150,
    description: 'Traditional Lahori styled spiced chickpea curry gravy.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    isSignature: true
  },
  {
    id: 'item-3',
    name: 'Special Chai',
    category: 'Tea & Kahwa',
    price: 130,
    description: 'Classic rich milk tea slow-simmered in traditional teahouse style.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    isSignature: false
  },
  {
    id: 'item-4',
    name: 'Malai Wali Chai',
    category: 'Tea & Kahwa',
    price: 180,
    description: 'Thick creamy doodh patti tea topped with thick milk cream layer.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80',
    isSignature: true
  },
  {
    id: 'item-5',
    name: 'Gur Wali Chai',
    category: 'Tea & Kahwa',
    price: 150,
    description: 'Sweetened with traditional pure jaggery (Gur) for rich flavor.',
    image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=600&q=80',
    isSignature: false
  },
  {
    id: 'item-6',
    name: 'Kashmiri Chai',
    category: 'Tea & Kahwa',
    price: 200,
    description: 'Pink cardamom tea infused with crushed almonds and pistachios.',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=600&q=80',
    isSignature: false
  },
  {
    id: 'item-7',
    name: 'Sulaimani Chai',
    category: 'Tea & Kahwa',
    price: 120,
    description: 'Refreshing black tea brewed with fresh mint leaves & lemon.',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80',
    isSignature: false
  },
  {
    id: 'item-8',
    name: 'Special Green Kahwa',
    category: 'Tea & Kahwa',
    price: 100,
    description: 'Traditional green tea infused with green cardamom pods.',
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=600&q=80',
    isSignature: false
  },
  {
    id: 'item-9',
    name: 'Gur Wala Kahwa',
    category: 'Tea & Kahwa',
    price: 120,
    description: 'Hot herbal green tea sweetened with natural organic jaggery.',
    image: 'https://images.unsplash.com/photo-1508253730651-e5ace80a7025?auto=format&fit=crop&w=600&q=80',
    isSignature: false
  },
  {
    id: 'item-10',
    name: 'Chicken Haleem',
    category: 'Mains',
    price: 350,
    description: 'Slow cooked tender chicken with grains, garnished with fried onions.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
    isSignature: false
  },
  {
    id: 'item-11',
    name: 'Aloo Qeema',
    category: 'Mains',
    price: 380,
    description: 'Minced chicken cooked with diced potatoes in rich gravy.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    isSignature: false
  },
  {
    id: 'item-12',
    name: 'Chicken Jalfrezi',
    category: 'Mains',
    price: 400,
    description: 'Boneless chicken cooked with capsicum, tomatoes & egg slices.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
    isSignature: false
  },
  {
    id: 'item-13',
    name: 'Special Lobia',
    category: 'Mains',
    price: 250,
    description: 'Red kidney beans stewed in rich onion-tomato desi masala.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    isSignature: true
  },
  {
    id: 'item-14',
    name: 'Daal Mash Fry',
    category: 'Mains',
    price: 300,
    description: 'White lentils fried in butter ghee with ginger & green chillies.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    isSignature: false
  },
  {
    id: 'item-15',
    name: 'Pota Kaleji Fry',
    category: 'Mains',
    price: 350,
    description: 'Spicy wok-fried chicken liver & gizzard masala.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
    isSignature: false
  },
  {
    id: 'item-16',
    name: 'Mix Vegetable',
    category: 'Mains',
    price: 250,
    description: 'Fresh seasonal vegetables cooked with ground aromatic spices.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    isSignature: false
  },
  {
    id: 'item-17',
    name: 'Chicken White Handi',
    category: 'Karahi & Handi',
    price: 400,
    description: 'Creamy boneless chicken in velvet white yoghurt & cream gravy.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
    isSignature: true
  },
  {
    id: 'item-18',
    name: 'Traditional Chicken Painda',
    category: 'Painda',
    price: 750,
    description: 'Balochi delicacy of shredded roti soaked in rich spicy chicken broth.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
    isSignature: true
  },
  {
    id: 'item-19',
    name: 'Tandoori Paratha',
    category: 'Tandoor',
    price: 80,
    description: 'Clay-baked layered crispy butter paratha.',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80',
    isSignature: false
  },
  {
    id: 'item-20',
    name: 'Plain Khamiri Roti',
    category: 'Tandoor',
    price: 35,
    description: 'Fresh soft clay tandoor baked roti.',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80',
    isSignature: false
  },
  {
    id: 'item-21',
    name: 'Fresh Zeera Raita',
    category: 'Sides',
    price: 100,
    description: 'Chilled yoghurt with roasted cumin and mint.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    isSignature: false
  },
  {
    id: 'item-22',
    name: 'Fresh Salad Bowl',
    category: 'Sides',
    price: 100,
    description: 'Sliced cucumbers, tomatoes, onions, and lemon.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    isSignature: false
  }
];

let cart = {};
let activeCategory = 'All';

window.addEventListener('DOMContentLoaded', () => {
  renderSignatureDishes();
  renderCategoryTabs();
  renderMenu();
  updateCartUI();
});

function renderSignatureDishes() {
  const container = document.getElementById('signatureDishesContainer');
  if (!container) return;

  const signatures = ALL_MENU_ITEMS.filter((item) => item.isSignature).slice(0, 3);

  container.innerHTML = signatures
    .map(
      (item) => `
        <div class="glass-card rounded-2xl overflow-hidden group hover:border-quetta-gold/60 transition-all duration-300">
          <div class="relative h-48 overflow-hidden">
            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
            <span class="absolute top-3 left-3 bg-quetta-maroon text-amber-200 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-red-500/30">
              Bestseller
            </span>
          </div>
          <div class="p-5">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-bold text-white text-lg">${item.name}</h3>
              <span class="text-quetta-gold font-extrabold text-base">Rs. ${item.price}</span>
            </div>
            <p class="text-xs text-quetta-mutedText leading-relaxed mb-4">${item.description}</p>
            <button onclick="addToCart('${item.id}')" class="w-full py-2.5 rounded-xl bg-quetta-saffron/20 border border-quetta-saffron/50 hover:bg-quetta-saffron text-quetta-gold hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-2">
              <i class="bi bi-cart-plus"></i> Quick Add to Order
            </button>
          </div>
        </div>
      `
    )
    .join('');
}

function renderCategoryTabs() {
  const categories = ['All', 'Breakfast', 'Tea & Kahwa', 'Mains', 'Karahi & Handi', 'Painda', 'Tandoor', 'Sides'];
  const container = document.getElementById('categoryTabs');
  if (!container) return;

  container.innerHTML = categories
    .map(
      (cat) => `
        <button onclick="setCategory('${cat}')" class="px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
          activeCategory === cat
            ? 'bg-gradient-to-r from-quetta-saffron to-quetta-gold text-white shadow-lg shadow-quetta-saffron/20'
            : 'bg-quetta-charcoal border border-white/10 text-quetta-mutedText hover:text-white hover:border-white/20'
        }">
          ${cat}
        </button>
      `
    )
    .join('');
}

function setCategory(cat) {
  activeCategory = cat;
  renderCategoryTabs();
  renderMenu();
}

function filterMenu() {
  renderMenu();
}

function renderMenu() {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;

  const searchVal = document.getElementById('searchInput')?.value.toLowerCase().trim() || '';

  const filtered = ALL_MENU_ITEMS.filter((item) => {
    const matchesCat = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchVal) || item.description.toLowerCase().includes(searchVal);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center text-quetta-mutedText">
        <i class="bi bi-search text-4xl block mb-2 opacity-40"></i>
        No food items match your search.
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map((item) => {
      const qty = cart[item.id] || 0;
      const isSelected = qty > 0;

      return `
        <div class="glass-card rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-quetta-gold/40">
          <div>
            <div class="relative h-44 overflow-hidden">
              <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
              <span class="absolute top-3 right-3 bg-quetta-obsidian/80 backdrop-blur-md text-quetta-gold text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/10">
                ${item.category}
              </span>
            </div>
            <div class="p-5">
              <div class="flex justify-between items-start mb-2">
                <h3 class="font-bold text-white text-base leading-snug">${item.name}</h3>
                <span class="text-quetta-gold font-extrabold text-sm ml-2 whitespace-nowrap">Rs. ${item.price}</span>
              </div>
              <p class="text-xs text-quetta-mutedText leading-relaxed line-clamp-2">${item.description}</p>
            </div>
          </div>

          <div class="p-5 pt-0">
            ${isSelected ? `
              <div class="w-full py-2 px-3 rounded-xl bg-quetta-emerald text-white flex items-center justify-between shadow-lg shadow-emerald-900/30 transition-all duration-300">
                <button onclick="decrementCart('${item.id}')" class="w-7 h-7 rounded-lg bg-black/20 hover:bg-black/40 flex items-center justify-center text-white font-bold text-sm transition-colors">
                  <i class="bi bi-dash-lg"></i>
                </button>
                
                <span class="font-extrabold text-xs tracking-wider flex items-center gap-1">
                  <i class="bi bi-bag-check-fill"></i> ${qty} Added
                </span>

                <button onclick="addToCart('${item.id}')" class="w-7 h-7 rounded-lg bg-black/20 hover:bg-black/40 flex items-center justify-center text-white font-bold text-sm transition-colors">
                  <i class="bi bi-plus-lg"></i>
                </button>
              </div>
            ` : `
              <button onclick="addToCart('${item.id}')" class="w-full py-2.5 rounded-xl bg-gradient-to-r from-quetta-saffron to-quetta-gold hover:from-amber-600 hover:to-amber-500 text-white font-bold text-xs shadow-md shadow-quetta-saffron/20 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2">
                <i class="bi bi-cart-plus text-base"></i> Add to Cart
              </button>
            `}
          </div>
        </div>
      `;
    })
    .join('');
}

function addToCart(itemId) {
  cart[itemId] = (cart[itemId] || 0) + 1;
  updateCartUI();
}

function decrementCart(itemId) {
  if (cart[itemId]) {
    cart[itemId]--;
    if (cart[itemId] <= 0) delete cart[itemId];
  }
  updateCartUI();
}

function removeFromCart(itemId) {
  delete cart[itemId];
  updateCartUI();
}

function updateCartUI() {
  renderMenu();

  const cartItemsContainer = document.getElementById('cartItemsList');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const cartBadgeCount = document.getElementById('cartBadgeCount');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartTotal = document.getElementById('cartTotal');

  let totalItemCount = 0;
  let subtotal = 0;
  const itemKeys = Object.keys(cart);

  if (!cartItemsContainer || !checkoutBtn || !cartBadgeCount || !cartSubtotal || !cartTotal) {
    return;
  }

  if (itemKeys.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="h-64 flex flex-col items-center justify-center text-center text-quetta-mutedText">
        <i class="bi bi-cart-x text-5xl mb-3 opacity-30 text-quetta-saffron"></i>
        <p class="text-sm">Your cart is currently empty.</p>
        <a href="#menu" onclick="toggleCartDrawer()" class="mt-4 px-4 py-2 rounded-xl bg-quetta-saffron/20 text-quetta-gold text-xs font-bold border border-quetta-saffron/40">Browse Menu</a>
      </div>
    `;
    checkoutBtn.disabled = true;
  } else {
    cartItemsContainer.innerHTML = itemKeys
      .map((id) => {
        const item = ALL_MENU_ITEMS.find((m) => m.id === id);
        if (!item) return '';

        const qty = cart[id];
        const itemTotal = item.price * qty;
        totalItemCount += qty;
        subtotal += itemTotal;

        return `
          <div class="flex items-center justify-between p-3 rounded-xl bg-quetta-obsidian border border-white/5">
            <div class="flex items-center gap-3">
              <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded-lg object-cover">
              <div>
                <h4 class="font-bold text-white text-xs">${item.name}</h4>
                <div class="text-[11px] text-quetta-mutedText">Rs. ${item.price} &times; ${qty}</div>
              </div>
            </div>
            <div class="text-right">
              <div class="font-bold text-quetta-gold text-xs mb-1">Rs. ${itemTotal}</div>
              <div class="flex items-center gap-1">
                <button onclick="decrementCart('${id}')" class="w-5 h-5 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center justify-center">-</button>
                <span class="text-xs text-white px-1 font-bold">${qty}</span>
                <button onclick="addToCart('${id}')" class="w-5 h-5 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center justify-center">+</button>
                <button onclick="removeFromCart('${id}')" class="ml-2 text-rose-400 hover:text-rose-300 text-xs"><i class="bi bi-trash"></i></button>
              </div>
            </div>
          </div>
        `;
      })
      .join('');

    checkoutBtn.disabled = false;
  }

  cartBadgeCount.innerText = totalItemCount;
  cartSubtotal.innerText = `Rs. ${subtotal}`;
  const total = subtotal > 0 ? subtotal + 150 : 0;
  cartTotal.innerText = `Rs. ${total}`;
}

function toggleMobileNav() {
  const nav = document.getElementById('mobileNav');
  nav?.classList.toggle('hidden');
}

function toggleCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (!drawer || !backdrop) return;

  const isOpen = !drawer.classList.contains('translate-x-full');

  if (isOpen) {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
  } else {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
  }
}

function openCheckoutModal() {
  toggleCartDrawer();
  const modal = document.getElementById('checkoutModal');
  modal?.classList.remove('opacity-0', 'pointer-events-none');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  modal?.classList.add('opacity-0', 'pointer-events-none');
}

function submitWhatsAppOrder(e) {
  e.preventDefault();

  const name = document.getElementById('custName')?.value.trim() || '';
  const phone = document.getElementById('custPhone')?.value.trim() || '';
  const address = document.getElementById('custAddress')?.value.trim() || '';
  const notes = document.getElementById('custNotes')?.value.trim() || '';

  let orderSummary = '*NEW ONLINE ORDER - QUETTA LALAZAR CAFE*\n';
  orderSummary += '----------------------------------------\n';
  orderSummary += `*Customer Name:* ${name}\n`;
  orderSummary += `*Contact:* ${phone}\n`;
  orderSummary += `*Delivery Address:* ${address}\n`;
  if (notes) orderSummary += `*Special Instructions:* ${notes}\n`;
  orderSummary += '----------------------------------------\n';
  orderSummary += '*ORDERED ITEMS:*\n';

  let subtotal = 0;
  Object.keys(cart).forEach((id) => {
    const item = ALL_MENU_ITEMS.find((m) => m.id === id);
    if (!item) return;

    const qty = cart[id];
    const itemTotal = item.price * qty;
    subtotal += itemTotal;
    orderSummary += `• ${item.name} x ${qty} = Rs. ${itemTotal}\n`;
  });

  const deliveryFee = 150;
  const grandTotal = subtotal + deliveryFee;

  orderSummary += '----------------------------------------\n';
  orderSummary += `*Subtotal:* Rs. ${subtotal}\n`;
  orderSummary += `*Delivery Fee:* Rs. ${deliveryFee}\n`;
  orderSummary += `*GRAND TOTAL:* Rs. ${grandTotal}\n`;
  orderSummary += '----------------------------------------\n';
  orderSummary += 'Thank you for ordering from Quetta Lalazar Cafe!';

  const targetPhone = '923000000000';
  const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(orderSummary)}`;
  window.open(whatsappUrl, '_blank');

  closeCheckoutModal();
  cart = {};
  updateCartUI();

  const form = document.getElementById('checkoutForm');
  form?.reset();
}


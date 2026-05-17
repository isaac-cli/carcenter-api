async function obtenerProductosBD() {
  const { data, error } = await supabaseClient
    .from('productos')
    .select('*');

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}
// Inicializar AOS

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});


  // ========== PRODUCTOS COMPLETOS - CAR CENTER ==========
const products = [
    // ASPIRADOR
    {
        id: 1,
        name: "Aspirador limpia tapicería SEG 10 COMPACT",
        price: 189990,
        oldPrice: 219990,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23B71C1C'/%3E%3Ctext x='40' y='80' font-family='Arial' font-size='14' fill='%23fff'%3EASpirador%3C/text%3E%3C/svg%3E",
        category: "limpieza",
        brand: "wurth",
        compatibility: ["universal"],
        badge: "-14%"
    },
    // NEUMÁTICOS (solo 1 para destacar)
    {
        id: 2,
        name: "Neumático 155/65R13 MR166 Mirage H/T",
        price: 45990,
        oldPrice: 52990,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23333'/%3E%3Ctext x='40' y='80' font-family='Arial' font-size='14' fill='%23fff'%3ENEUMÁTICO 13'%3C/text%3E%3C/svg%3E",
        category: "neumaticos",
        brand: "mirage",
        compatibility: ["chevrolet", "hyundai", "kia"],
        badge: "-13%"
    },
    // ILUMINACIÓN (solo 1 para destacar)
    {
        id: 3,
        name: "Ampolleta H4 LED T4 BRM",
        price: 24990,
        oldPrice: 32990,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23FFD700'/%3E%3Ctext x='40' y='80' font-family='Arial' font-size='14' fill='%23000'%3EH4 LED%3C/text%3E%3C/svg%3E",
        category: "iluminacion",
        brand: "brm",
        compatibility: ["universal"],
        badge: "-24%"
    },
    // PLUMILLAS (solo 1 para destacar)
    {
        id: 4,
        name: "Plumilla Wurth Flatblade 16 pulgadas",
        price: 8990,
        oldPrice: 10990,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%232196F3'/%3E%3Ctext x='30' y='80' font-family='Arial' font-size='14' fill='%23fff'%3EPLUMILLA 16'%3C/text%3E%3C/svg%3E",
        category: "plumillas",
        brand: "wurth",
        compatibility: ["universal"],
        badge: "-18%"
    },
    // REFRIGERANTES (solo 1 para destacar)
    {
        id: 5,
        name: "Prestone Max Asiáticos Azul",
        price: 15990,
        oldPrice: 18990,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%2300F'/%3E%3Ctext x='30' y='80' font-family='Arial' font-size='12' fill='%23fff'%3EPRESTONE AZUL%3C/text%3E%3C/svg%3E",
        category: "refrigerantes",
        brand: "prestone",
        compatibility: ["hyundai", "kia", "mitsubishi"],
        badge: "-16%"
    },
    // LUBRICANTES (solo 1 para destacar)
    {
        id: 6,
        name: "Aceite Motor Motul 6100 5W30 5L",
        price: 45990,
        oldPrice: 52990,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23F90'/%3E%3Ctext x='30' y='80' font-family='Arial' font-size='12' fill='%23000'%3EMOTUL 5W30%3C/text%3E%3C/svg%3E",
        category: "lubricantes",
        brand: "motul",
        compatibility: ["universal"],
        badge: "-13%"
    },
    // ========== RESTO DE PRODUCTOS (para mostrar al filtrar) ==========
    // Neumáticos adicionales
    {
        id: 7,
        name: "Neumático 185/65R14 Colo H02 Grenlander",
        price: 54990,
        oldPrice: null,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23333'/%3E%3Ctext x='40' y='80' font-family='Arial' font-size='14' fill='%23fff'%3ENEUMÁTICO 14'%3C/text%3E%3C/svg%3E",
        category: "neumaticos",
        brand: "grenlander",
        compatibility: ["chevrolet", "ford", "toyota"],
        badge: null
    },
    {
        id: 8,
        name: "Neumático 185/65R14 RoadX RXMotion",
        price: 57990,
        oldPrice: 62990,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23333'/%3E%3Ctext x='40' y='80' font-family='Arial' font-size='14' fill='%23fff'%3EROADX 14'%3C/text%3E%3C/svg%3E",
        category: "neumaticos",
        brand: "roadx",
        compatibility: ["nissan", "toyota", "hyundai"],
        badge: "-8%"
    },
    {
        id: 9,
        name: "Neumático 175/70R14 Delmax Ultimapro",
        price: 49990,
        oldPrice: null,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23333'/%3E%3Ctext x='40' y='80' font-family='Arial' font-size='14' fill='%23fff'%3EDELMAX 14'%3C/text%3E%3C/svg%3E",
        category: "neumaticos",
        brand: "delmax",
        compatibility: ["chevrolet", "fiat", "renault"],
        badge: null
    },
    {
        id: 10,
        name: "Neumático 245/75R16 Mirage MR-AT172",
        price: 129990,
        oldPrice: 149990,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23333'/%3E%3Ctext x='40' y='80' font-family='Arial' font-size='14' fill='%23fff'%3EMIRAGE AT'%3C/text%3E%3C/svg%3E",
        category: "neumaticos",
        brand: "mirage",
        compatibility: ["toyota", "nissan", "chevrolet"],
        badge: "-13%"
    },
    {
        id: 11,
        name: "Neumático 205/60R16 Compasal Blazer",
        price: 89990,
        oldPrice: null,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23333'/%3E%3Ctext x='40' y='80' font-family='Arial' font-size='14' fill='%23fff'%3ECOMPASAL'%3C/text%3E%3C/svg%3E",
        category: "neumaticos",
        brand: "compasal",
        compatibility: ["chevrolet", "ford"],
        badge: null
    },
    // Iluminación adicional
    {
        id: 12,
        name: "Ampolleta H7 LED T4 BRM",
        price: 24990,
        oldPrice: 32990,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23FFD700'/%3E%3Ctext x='40' y='80' font-family='Arial' font-size='14' fill='%23000'%3EH7 LED%3C/text%3E%3C/svg%3E",
        category: "iluminacion",
        brand: "brm",
        compatibility: ["universal"],
        badge: "-24%"
    },
    // Plumillas adicionales (8 más)
    {
        id: 13,
        name: "Plumilla Trasera BRM 12 pulgadas",
        price: 6990,
        oldPrice: null,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%232196F3'/%3E%3Ctext x='30' y='80' font-family='Arial' font-size='14' fill='%23fff'%3ETRASERA 12'%3C/text%3E%3C/svg%3E",
        category: "plumillas",
        brand: "brm",
        compatibility: ["universal"],
        badge: null
    },
    {
        id: 14,
        name: "Plumilla Trasera BRM Flat 10 pulgadas",
        price: 6990,
        oldPrice: null,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%232196F3'/%3E%3Ctext x='30' y='80' font-family='Arial' font-size='14' fill='%23fff'%3ETRASERA 10'%3C/text%3E%3C/svg%3E",
        category: "plumillas",
        brand: "brm",
        compatibility: ["universal"],
        badge: null
    },
    {
        id: 15,
        name: "Plumilla Wurth Flatblade 14 pulgadas",
        price: 8990,
        oldPrice: 10990,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%232196F3'/%3E%3Ctext x='30' y='80' font-family='Arial' font-size='14' fill='%23fff'%3EFLAT 14'%3C/text%3E%3C/svg%3E",
        category: "plumillas",
        brand: "wurth",
        compatibility: ["universal"],
        badge: "-18%"
    },
    {
        id: 16,
        name: "Plumilla Wurth Flatblade 20 pulgadas",
        price: 9990,
        oldPrice: 11990,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%232196F3'/%3E%3Ctext x='30' y='80' font-family='Arial' font-size='14' fill='%23fff'%3EFLAT 20'%3C/text%3E%3C/svg%3E",
        category: "plumillas",
        brand: "wurth",
        compatibility: ["universal"],
        badge: "-16%"
    },
    {
        id: 17,
        name: "Plumilla Wurth Flatblade 24 pulgadas",
        price: 10990,
        oldPrice: 12990,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%232196F3'/%3E%3Ctext x='30' y='80' font-family='Arial' font-size='14' fill='%23fff'%3EFLAT 24'%3C/text%3E%3C/svg%3E",
        category: "plumillas",
        brand: "wurth",
        compatibility: ["universal"],
        badge: "-15%"
    },
    {
        id: 18,
        name: "Plumilla Wurth Flatblade 22 pulgadas",
        price: 10990,
        oldPrice: 12990,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%232196F3'/%3E%3Ctext x='30' y='80' font-family='Arial' font-size='14' fill='%23fff'%3EFLAT 22'%3C/text%3E%3C/svg%3E",
        category: "plumillas",
        brand: "wurth",
        compatibility: ["universal"],
        badge: "-15%"
    },
    {
        id: 19,
        name: "Plumilla Wurth Standard 14 pulgadas",
        price: 5990,
        oldPrice: 6990,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23999'/%3E%3Ctext x='30' y='80' font-family='Arial' font-size='14' fill='%23fff'%3ESTD 14'%3C/text%3E%3C/svg%3E",
        category: "plumillas",
        brand: "wurth",
        compatibility: ["universal"],
        badge: "-14%"
    },
    {
        id: 20,
        name: "Plumilla Wurth Standard 16 pulgadas",
        price: 6990,
        oldPrice: 7990,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23999'/%3E%3Ctext x='30' y='80' font-family='Arial' font-size='14' fill='%23fff'%3ESTD 16'%3C/text%3E%3C/svg%3E",
        category: "plumillas",
        brand: "wurth",
        compatibility: ["universal"],
        badge: "-12%"
    },
    // Refrigerantes adicionales (5 más)
    {
        id: 21,
        name: "Prestone Max Asiáticos Rojo",
        price: 15990,
        oldPrice: 18990,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23F00'/%3E%3Ctext x='30' y='80' font-family='Arial' font-size='12' fill='%23fff'%3EPRESTONE ROJO%3C/text%3E%3C/svg%3E",
        category: "refrigerantes",
        brand: "prestone",
        compatibility: ["toyota", "honda", "nissan"],
        badge: "-16%"
    },
    {
        id: 22,
        name: "Prestone Max Asiáticos Verde",
        price: 15990,
        oldPrice: 18990,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%230F0'/%3E%3Ctext x='30' y='80' font-family='Arial' font-size='12' fill='%23000'%3EPRESTONE VERDE%3C/text%3E%3C/svg%3E",
        category: "refrigerantes",
        brand: "prestone",
        compatibility: ["mazda", "subaru", "suzuki"],
        badge: "-16%"
    },
    {
        id: 23,
        name: "Prestone Europeo Rosa",
        price: 16990,
        oldPrice: 19990,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23F0F'/%3E%3Ctext x='30' y='80' font-family='Arial' font-size='12' fill='%23fff'%3EPRESTONE ROSA%3C/text%3E%3C/svg%3E",
        category: "refrigerantes",
        brand: "prestone",
        compatibility: ["volkswagen", "audi", "bmw"],
        badge: "-15%"
    },
    {
        id: 24,
        name: "Prestone Europeos Azul",
        price: 16990,
        oldPrice: 19990,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%2300F'/%3E%3Ctext x='30' y='80' font-family='Arial' font-size='12' fill='%23fff'%3EEUROPA AZUL%3C/text%3E%3C/svg%3E",
        category: "refrigerantes",
        brand: "prestone",
        compatibility: ["mercedes", "bmw", "volvo"],
        badge: "-15%"
    },
    {
        id: 25,
        name: "Prestone Dex-Cool 50% 3.78L",
        price: 18990,
        oldPrice: 21990,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23F00'/%3E%3Ctext x='30' y='80' font-family='Arial' font-size='12' fill='%23fff'%3EDEX-COOL%3C/text%3E%3C/svg%3E",
        category: "refrigerantes",
        brand: "prestone",
        compatibility: ["chevrolet", "gm", "ford"],
        badge: "-14%"
    }
];

async function reemplazarProductsConBD() {
  const { data, error } = await supabaseClient
    .from('productos')
    .select('*');

  if (error) {
    console.error(error);
    return;
  }

  products.length = 0;

  data.forEach(p => {
    products.push({
      id: p.id,
      name: p.nombre,
      price: Number(p.precio) || 0,
      category: p.categoria,
      description: p.marca || '',
      image: (p.imagen && p.imagen.startsWith('data:image'))
        ? p.imagen
        : 'https://via.placeholder.com/200x150?text=Producto'
    });
  });

  mostrarDestacados();
  renderProducts();
}

// ========== CARRITO DE COMPRAS ==========
let cart = [];

// ========== FUNCIONES DEL CARRITO ==========
function toggleCart() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.classList.toggle('show');
    }
}

function updateCartUI() {
    // Actualizar contador
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }

    // Actualizar modal del carrito
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItems || !cartTotal) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">El carrito está vacío</p>';
        cartTotal.textContent = 'Total: $0';
    } else {
        let html = '';
        let total = 0;
        
        cart.forEach(item => {
            total += item.price * item.quantity;
            html += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <div class="cart-item-price">$${item.price.toLocaleString('es-CL')}</div>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
            `;
        });
        
        cartItems.innerHTML = html;
        cartTotal.textContent = `Total: $${total.toLocaleString('es-CL')}`;
    }
}
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        updateCartUI();
        
        // Feedback visual en el botón
        const button = event.target.closest('.btn-add-cart');
        if (button) {
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="bi bi-check"></i> Agregado';
            button.style.backgroundColor = '#28a745';
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.backgroundColor = '';
            }, 1500);
        }
    }
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        cart = cart.filter(item => item.id !== productId);
    } else {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity = newQuantity;
        }
    }
    updateCartUI();
}

// Reemplaza la función checkout existente con esta:

function checkout() {
    if (cart.length === 0) {
        alert('❌ El carrito está vacío');
        return;
    }
    
    // Guardar carrito en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Redirigir a checkout
    window.location.href = 'checkout.html';
}
// ========== RENDERIZAR PRODUCTOS ==========
function renderProducts() {
    const container = document.getElementById('product-list-container');
    if (!container) return;

    container.innerHTML = '';

    products.forEach(product => {
        const discountHtml = product.oldPrice ? `<span>$${product.oldPrice.toLocaleString('es-CL')}</span>` : '';
        const badgeHtml = product.badge ? `<div class="product-badge">${product.badge}</div>` : '';

        const productCard = document.createElement('div');
        productCard.className = 'col-lg-3 col-md-6 mb-4';
        productCard.setAttribute('data-aos', 'zoom-in');

        productCard.innerHTML = `
            <div class="product-card">
                ${badgeHtml}
                <img src="${product.image}" alt="${product.name}">
                <h4>${product.name}</h4>
                <p class="product-price">$${product.price.toLocaleString('es-CL')} ${discountHtml}</p>
                <button class="btn-add-cart" data-id="${product.id}">
                    <i class="bi bi-cart-plus"></i> Agregar
                </button>
            </div>
        `;
        container.appendChild(productCard);
    });

    if (AOS) {
        AOS.refresh();
    }
}

// ========== EVENT LISTENERS (CUANDO CARGA LA PÁGINA) ==========
document.addEventListener('DOMContentLoaded', function() {
    reemplazarProductsConBD();
    
    // ===== EVENTOS DEL CARRITO (DELEGACIÓN) =====
    document.addEventListener('click', function(e) {
        // Botones de agregar al carrito
        if (e.target.closest('.btn-add-cart')) {
            const button = e.target.closest('.btn-add-cart');
            const productId = parseInt(button.getAttribute('data-id'));
            addToCart(productId);
        }
        
        // Botón del carrito (toggle)
        if (e.target.closest('#carritoBoton')) {
            e.preventDefault();
            toggleCart();
        }
    });
    
   // Cerrar carrito SOLO al hacer clic fuera del modal (IGNORA los botones + y -)
document.addEventListener('click', function(e) {
    const modal = document.getElementById('cartModal');
    const cartButton = document.getElementById('carritoBoton');
    
    // Si el clic es en un botón de cantidad (+ o -), NO cerrar el modal
    if (e.target.closest('.quantity-btn') || e.target.closest('.cart-item-quantity')) {
        return; // Salir de la función, no cerrar el modal
    }
    
    if (modal && modal.classList.contains('show')) {
        // Si el clic NO es en el modal Y NO es en el botón del carrito
        if (!modal.contains(e.target) && !cartButton.contains(e.target)) {
            modal.classList.remove('show');
        }
    }
});
    // ===== BUSCADOR POR VEHÍCULO =====
    const btnBuscar = document.getElementById('btnBuscar');
    const marca = document.getElementById('marca');
    const modelo = document.getElementById('modelo');
    const anio = document.getElementById('anio');
    const resultado = document.getElementById('resultadoBusqueda');
    
    if (marca) {
        marca.addEventListener('change', function() {
            const marcaSeleccionada = this.value;
            const modeloSelect = document.getElementById('modelo');
            
            modeloSelect.innerHTML = '<option value="">Seleccionar modelo</option>';
            
            const modelos = {
                'chevrolet': ['Silverado', 'Cruze', 'Onix', 'Tracker', 'S10'],
                'ford': ['Ranger', 'F-150', 'Escape', 'Focus', 'Mustang'],
                'toyota': ['Hilux', 'Corolla', 'RAV4', 'Yaris', 'Land Cruiser'],
                'nissan': ['Frontier', 'Versa', 'Sentra', 'X-Trail', 'Kicks'],
                'hyundai': ['Tucson', 'Santa Fe', 'Creta', 'Accent', 'Elantra']
            };
            
            if (modelos[marcaSeleccionada]) {
                modelos[marcaSeleccionada].forEach(function(modeloNombre) {
                    const option = document.createElement('option');
                    option.value = modeloNombre.toLowerCase();
                    option.textContent = modeloNombre;
                    modeloSelect.appendChild(option);
                });
            }
        });
    }
    
    if (btnBuscar) {
        btnBuscar.addEventListener('click', function() {
            if (marca && modelo && anio && marca.value && modelo.value && anio.value) {
                resultado.innerHTML = `<i class="bi bi-check-circle-fill" style="color: #28a745;"></i> 
                    Mostrando productos compatibles con ${marca.options[marca.selectedIndex].text} 
                    ${modelo.options[modelo.selectedIndex].text} ${anio.value}`;
            } else {
                resultado.innerHTML = `<i class="bi bi-exclamation-circle-fill" style="color: #dc3545;"></i> 
                    Por favor selecciona marca, modelo y año del vehículo`;
            }
        });
    }
    
    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===== NEWSLETTER =====
    const btnNewsletter = document.querySelector('.btn-newsletter');
    const newsletterInput = document.querySelector('.newsletter-form input');
    
    if (btnNewsletter && newsletterInput) {
        btnNewsletter.addEventListener('click', function() {
            const email = newsletterInput.value;
            if (email && email.includes('@') && email.includes('.')) {
                alert('✅ ¡Gracias por suscribirte! Pronto recibirás nuestras ofertas.');
                newsletterInput.value = '';
            } else {
                alert('❌ Por favor ingresa un email válido');
            }
        });
    }
});

// Hacer funciones globales para los onclick en HTML
window.toggleCart = toggleCart;
window.updateQuantity = updateQuantity;
window.checkout = checkout;

// ========== FUNCIONES DE FILTRO POR CATEGORÍA ==========

// Variable para controlar el estado actual
let categoriaActual = 'destacados';

// Función para mostrar productos destacados (1 de cada categoría)
function mostrarDestacados() {
    categoriaActual = 'destacados';
    
    // IDs de los productos destacados (1 de cada categoría)
    const idsDestacados = [1, 2, 3, 4, 5, 6];
    const productosDestacados = products.filter(p => idsDestacados.includes(p.id));
    
    renderProductos(productosDestacados);
    
    // Ocultar botón volver
    document.getElementById('boton-volver').style.display = 'none';
    
    // Actualizar título
    document.querySelector('#productos .section-title span').textContent = 'destacados';
}

// Función para filtrar por categoría
function filtrarPorCategoria(categoria) {
    categoriaActual = categoria;
    
    // Traducir categoría para mostrar
    let nombreCategoria = '';
    switch(categoria) {
        case 'neumaticos': nombreCategoria = 'Neumáticos'; break;
        case 'iluminacion': nombreCategoria = 'Iluminación LED'; break;
        case 'plumillas': nombreCategoria = 'Plumillas'; break;
        case 'refrigerantes': nombreCategoria = 'Refrigerantes'; break;
        case 'lubricantes': nombreCategoria = 'Lubricantes'; break;
        case 'limpieza': nombreCategoria = 'Limpieza'; break;
        default: nombreCategoria = categoria;
    }
    
    const productosFiltrados = products.filter(p => p.category === categoria);
    renderProductos(productosFiltrados);
    
    // Mostrar botón volver
    document.getElementById('boton-volver').style.display = 'block';
    
    // Actualizar título
    document.querySelector('#productos .section-title span').textContent = nombreCategoria;
}

// Función para renderizar productos (mejorada)
function renderProductos(productosARenderizar) {
    const container = document.getElementById('product-list-container');
    if (!container) return;
    
    container.innerHTML = '';

    productosARenderizar.forEach(product => {
        const discountHtml = product.oldPrice ? `<span>$${product.oldPrice.toLocaleString('es-CL')}</span>` : '';
        const badgeHtml = product.badge ? `<div class="product-badge">${product.badge}</div>` : '';

        const productCard = document.createElement('div');
        productCard.className = 'col-lg-3 col-md-6 mb-4';
        productCard.setAttribute('data-aos', 'fade-up');

        productCard.innerHTML = `
            <div class="product-card">
                ${badgeHtml}
                <img src="${product.image}" alt="${product.name}" style="height: 150px; object-fit: contain;">
                <h6 class="fw-bold mt-2" style="height: 40px; overflow: hidden; font-size: 14px;">${product.name}</h6>
                <p class="product-price">$${product.price.toLocaleString('es-CL')} ${discountHtml}</p>
                <button class="btn-add-cart" data-id="${product.id}">
                    <i class="bi bi-cart-plus"></i> Agregar
                </button>
            </div>
        `;
        container.appendChild(productCard);
    });

    if (AOS) {
        AOS.refresh();
    }
}

// Modificar la función de búsqueda por vehículo
function buscarPorVehiculo() {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const anio = document.getElementById('anio').value;
    const resultado = document.getElementById('resultadoBusqueda');
    
    if (marca && modelo && anio) {
        // Filtrar productos compatibles
        const productosCompatibles = products.filter(p => 
            p.compatibility.includes(marca) || p.compatibility.includes('universal')
        );
        
        if (productosCompatibles.length > 0) {
            renderProductos(productosCompatibles);
            categoriaActual = 'busqueda';
            resultado.innerHTML = `<i class="bi bi-check-circle-fill" style="color: #28a745;"></i> 
                Mostrando ${productosCompatibles.length} productos compatibles`;
            document.getElementById('boton-volver').style.display = 'block';
        } else {
            resultado.innerHTML = `<i class="bi bi-exclamation-circle-fill" style="color: #dc3545;"></i> 
                No hay productos para esta combinación`;
        }
    } else {
        resultado.innerHTML = `<i class="bi bi-exclamation-circle-fill" style="color: #dc3545;"></i> 
            Selecciona marca, modelo y año`;
    }
}

async function reemplazarProductsConBD() {
  const { data, error } = await supabaseClient
    .from('productos')
    .select('*');

  if (!error && data && data.length > 0) {
    products.length = 0;
    data.forEach(p => products.push(p));
  }

  // INICIO REAL DE TU WEB
  mostrarDestacados();
  renderProducts();
}
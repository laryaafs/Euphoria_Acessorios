// =======================================================================
// === SCRIPT FINAL E COMPLETO - TODAS AS FUNCIONALIDADES INTEGRADAS ===
// =======================================================================

// BANCO DE DADOS MESTRE (DESTAQUES + CATEGORIAS)
const products = [
    // 16 Produtos de Destaque
    { id: 1, name: 'Conjunto De Joias Com Fivela Em Forma De U', price: '149.90', image: 'assets/images/produtos/produto_01.png', category: 'destaques' },
    { id: 2, name: 'Bolsa em bege com detalhes marrons. Elegante e prática', price: '229.90', image: 'assets/images/produtos/produto_02.png', category: 'destaques' },
    { id: 3, name: 'Cinto de corrente dourada com fivela', price: '89.90', image: 'assets/images/produtos/produto_03.png', category: 'destaques' },
    { id: 4, name: 'Presilhas douradas com design delicado', price: '49.90', image: 'assets/images/produtos/produto_04.png', category: 'destaques' },
    { id: 5, name: 'Conjunto delicado mais chamativo', price: '189.90', image: 'assets/images/produtos/produto_05.png', category: 'destaques' },
    { id: 6, name: 'Bolsa com design clássico e sofisticado', price: '249.90', image: 'assets/images/produtos/produto_06.png', category: 'destaques' },
    { id: 7, name: 'Cinto de corrente prateada com argolas', price: '79.90', image: 'assets/images/produtos/corrente.png', category: 'destaques' },
    { id: 8, name: 'Presilha de Cabelo Reta Fosca', price: '39.90', image: 'assets/images/produtos/produto_07.png', category: 'destaques' },

    // 8 Novos Acessórios
    { id: 17, name: 'Colar de Pérolas Finas', price: '210.50', image: 'assets/images/acessorios/acessorio_01.png', category: 'acessorios' },
    { id: 18, name: 'Brinco Argola Dourado', price: '120.00', image: 'assets/images/acessorios/acessorio_02.png', category: 'acessorios' },
    { id: 19, name: 'Pulseira de Prata com Berloques', price: '350.00', image: 'assets/images/acessorios/acessorio_01.png', category: 'acessorios' },
    { id: 20, name: 'Anel Solitário de Zircônia', price: '180.75', image: 'assets/images/acessorios/acessorio_03.png', category: 'acessorios' },
    { id: 21, name: 'Tornozeleira Indiana de Prata', price: '95.20', image: 'assets/images/acessorios/acessorio_05.png', category: 'acessorios' },
    { id: 22, name: 'Broche de Cristal Formato Estrela', price: '75.00', image: 'assets/images/acessorios/acessorio_06.png', category: 'acessorios' },
    { id: 23, name: 'Choker de Couro com Pingente', price: '88.00', image: 'assets/images/acessorios/acessorio_07.png', category: 'acessorios' },
    { id: 24, name: 'Earcuff de Prata com Pedras', price: '150.00', image: 'assets/images/acessorios/acessorio_08.png', category: 'acessorios' },

    // 8 Novas Bolsas
    { id: 25, name: 'Bolsa Tote de Couro Caramelo', price: '450.00', image: 'assets/images/bolsas/bolsa_01.png', category: 'bolsas' },
    { id: 26, name: 'Bolsa de Ombro Matelassê Preta', price: '380.50', image: 'assets/images/bolsas/bolsa_02.png', category: 'bolsas' },
    { id: 27, name: 'Clutch de Festa Dourada', price: '290.00', image: 'assets/images/bolsas/bolsa_03.png', category: 'bolsas' },
    { id: 28, name: 'Mochila Urbana de Nylon', price: '320.00', image: 'assets/images/bolsas/bolsa_04.png', category: 'bolsas' },
    { id: 29, name: 'Bolsa Saco com Franjas', price: '275.80', image: 'assets/images/bolsas/bolsa_05.png', category: 'bolsas' },
    { id: 30, name: 'Bolsa Transversal Pequena', price: '199.90', image: 'assets/images/bolsas/bolsa_06.png', category: 'bolsas' },
    { id: 31, name: 'Bolsa de Praia de Palha', price: '180.00', image: 'assets/images/bolsas/bolsa_07.png', category: 'bolsas' },
    { id: 32, name: 'Carteira de Couro Legítimo', price: '250.00', image: 'assets/images/bolsas/bolsa_08.png', category: 'bolsas' },

    // 8 Novos Cintos & Correntes
    { id: 33, name: 'Cinto de Couro com Fivela Dupla', price: '140.00', image: 'assets/images/cinto_corrente/sinto_01.png', category: 'cintos' },
    { id: 34, name: 'Cinto Fino Dourado de Metal', price: '99.50', image: 'assets/images/cinto_corrente/sinto_02.png', category: 'cintos' },
    { id: 35, name: 'Cinto Trançado de Camurça', price: '110.00', image: 'assets/images/cinto_corrente/sinto_03.png', category: 'cintos' },
    { id: 36, name: 'Corrente de Corpo com Pingentes', price: '180.00', image: 'assets/images/cinto_corrente/sinto_04.png', category: 'cintos' },
    { id: 37, name: 'Cinto de Elástico com Fivela', price: '85.00', image: 'assets/images/cinto_corrente/sinto_05.png', category: 'cintos' },
    { id: 38, name: 'Cinto Country com Detalhes', price: '160.00', image: 'assets/images/cinto_corrente/sinto_06.png', category: 'cintos' },
    { id: 39, name: 'Corrente de Calça Estilo Punk', price: '90.00', image: 'assets/images/cinto_corrente/sinto_07.png', category: 'cintos' },
    { id: 40, name: 'Cinto Obi de Couro', price: '125.00', image: 'assets/images/cinto_corrente/sinto_08.png', category: 'cintos' },

    // 8 Novas Presilhas
    { id: 41, name: 'Presilha de Pérola Clássica', price: '45.00', image: 'assets/images/presilha/precilha_01.png', category: 'presilhas' },
    { id: 42, name: 'Grampo de Cabelo com Strass', price: '55.50', image: 'assets/images/presilha/precilha_02.png', category: 'presilhas' },
    { id: 43, name: 'Presilha Piranha Acrílico', price: '35.00', image: 'assets/images/presilha/precilha_03.png', category: 'presilhas' },
    { id: 44, name: 'Hair Clip com Miçangas', price: '49.90', image: 'assets/images/presilha/precilha_04.png', category: 'presilhas' },
    { id: 45, name: 'Presilha de Metal Formato Folha', price: '60.00', image: 'assets/images/presilha/precilha_05.png', category: 'presilhas' },
    { id: 46, name: 'Conjunto de Grampos Coloridos', price: '40.00', image: 'assets/images/presilha/precilha_06.png', category: 'presilhas' },
    { id: 47, name: 'Presilha Laço de Veludo', price: '65.00', image: 'assets/images/presilha/precilha_03.png', category: 'presilhas' },
    { id: 48, name: 'Pente de Cabelo Decorativo', price: '70.00', image: 'assets/images/presilha/precilha_01.png', category: 'presilhas' }
];

// LÓGICA PRINCIPAL (EXECUTADA QUANDO A PÁGINA CARREGA)
document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DA PÁGINA HOME ---
    if (document.querySelector('.product-grid')) {
        const productGrid = document.querySelector('.product-grid');
        const categoryButtons = document.querySelectorAll('.category-nav a');
        const searchInput = document.querySelector('.search-bar input');

        function renderProducts(productsToRender) {
            productGrid.innerHTML = '';
            if (productsToRender.length === 0) {
                productGrid.innerHTML = '<p class="empty-message">Nenhum produto encontrado.</p>';
                return;
            }
            productsToRender.forEach(product => {
                productGrid.innerHTML += `
                    <div class="product-card" data-product-id="${product.id}">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="product-info">
                            <p>${product.name}</p>
                            <div class="product-price">
                                <span>R$</span><strong>${product.price.replace('.', ',')}</strong>
                            </div>
                            <button class="buy-button">Comprar</button>
                        </div>
                    </div>`;
            });
            addEventListenersToCards();
        }

        function addEventListenersToCards() {
            document.querySelectorAll('.product-card').forEach(card => {
                card.addEventListener('click', () => {
                    window.location.href = `produto-detalhe.html?id=${card.dataset.productId}`;
                });
            });
        }

        categoryButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                event.target.classList.add('active');
                const selectedCategory = event.target.dataset.category;
                searchInput.value = '';
                const productsToDisplay = products.filter(p => {
                    if (selectedCategory === 'todos') return p.category === 'destaques';
                    return p.category === selectedCategory;
                });
                renderProducts(productsToDisplay);
            });
        });
        
        if (searchInput) {
            searchInput.addEventListener('input', (event) => {
                const searchTerm = event.target.value.toLowerCase();
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                if (searchTerm === '') {
                    const initialProducts = products.filter(p => p.category === 'destaques');
                    renderProducts(initialProducts);
                    document.querySelector('.category-nav a[data-category="todos"]').classList.add('active');
                    return;
                }
                const filteredProducts = products.filter(product => 
                    product.name.toLowerCase().includes(searchTerm)
                );
                renderProducts(filteredProducts);
            });
        }

        const initialProducts = products.filter(p => p.category === 'destaques');
        renderProducts(initialProducts);
    }

    // --- LÓGICA DA PÁGINA DE DETALHES DO PRODUTO ---
    if (document.querySelector('.product-detail-page')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const productData = products.find(p => p.id == productId);

        if (productData) {
            document.getElementById('mainProductImage').src = productData.image;
            document.getElementById('mainProductImage').alt = productData.name;
            document.querySelector('.product-details h2').textContent = productData.name;
            document.querySelector('.current-price').innerHTML = `R$ ${productData.price.replace('.', ',')}`;
        }

        const quantityInput = document.getElementById('quantity');
        document.getElementById('decrease-qty')?.addEventListener('click', () => { if (parseInt(quantityInput.value) > 1) quantityInput.value--; });
        document.getElementById('increase-qty')?.addEventListener('click', () => { quantityInput.value++; });

        document.querySelector('.btn-add-to-cart')?.addEventListener('click', () => {
            const selectedQuantity = parseInt(quantityInput.value);
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingProductIndex = cart.findIndex(item => item.id == productId);
            if (existingProductIndex > -1) { cart[existingProductIndex].quantity += selectedQuantity; } 
            else { cart.push({ id: productId, quantity: selectedQuantity }); }
            localStorage.setItem('cart', JSON.stringify(cart));
            window.location.href = 'carrinho.html';
        });

        const buyNowButton = document.querySelector('.btn-buy-now');
        if (buyNowButton) {
            buyNowButton.addEventListener('click', () => {
                const selectedQuantity = parseInt(quantityInput.value);
                window.location.href = `checkout.html?buyNowId=${productId}&qty=${selectedQuantity}`;
            });
        }
        
        const favoriteButton = document.querySelector('.gallery-actions .action-btn:nth-child(2)');
        if (favoriteButton && productId) {
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            if (favorites.includes(productId)) {
                favoriteButton.innerHTML = '<i class="fas fa-heart"></i> Favoritado';
                favoriteButton.classList.add('active');
            }
            favoriteButton.addEventListener('click', () => {
                let currentFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
                const productIndex = currentFavorites.indexOf(productId);
                if (productIndex > -1) {
                    currentFavorites.splice(productIndex, 1);
                    favoriteButton.innerHTML = '<i class="fas fa-heart"></i> Favoritar';
                    favoriteButton.classList.remove('active');
                } else {
                    currentFavorites.push(productId);
                    favoriteButton.innerHTML = '<i class="fas fa-heart"></i> Favoritado';
                    favoriteButton.classList.add('active');
                }
                localStorage.setItem('favorites', JSON.stringify(currentFavorites));
            });
        }
    }

    // --- LÓGICA DA PÁGINA DO CARRINHO ---
    if (document.querySelector('.cart-page')) {
        function renderCart() {
            const cartItemsContainer = document.getElementById('cart-items-container');
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p class="empty-cart-message">Seu carrinho está vazio.</p>';
            } else {
                cartItemsContainer.innerHTML = ''; 
                cart.forEach(item => {
                    const productData = products.find(p => p.id == item.id);
                    if (productData) {
                        const cartItemHTML = `<div class="cart-item" data-product-id="${productData.id}"><img src="${productData.image}" alt="${productData.name}" class="cart-item-image"><div class="cart-item-details"><p class="item-name">${productData.name}</p><p class="item-price">R$ ${productData.price.replace('.', ',')}</p></div><div class="quantity-selector-cart"><button class="decrease-cart-qty">-</button><input type="number" value="${item.quantity}" min="1" class="cart-quantity-input" readonly><button class="increase-cart-qty">+</button></div><button class="remove-item-btn">Excluir</button></div>`;
                        cartItemsContainer.innerHTML += cartItemHTML;
                    }
                });
            }
            updateCartSummary();
            addCartEventListeners();
        }
        function updateCartSummary() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const subtotalPriceElement = document.getElementById('subtotal-price');
            const totalPriceElement = document.getElementById('total-price');
            let subtotal = 0;
            cart.forEach(item => {
                const productData = products.find(p => p.id == item.id);
                if (productData) { subtotal += parseFloat(productData.price) * item.quantity; }
            });
            const formattedSubtotal = subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            if (subtotalPriceElement) subtotalPriceElement.textContent = formattedSubtotal;
            if (totalPriceElement) totalPriceElement.textContent = formattedSubtotal;
        }
        function addCartEventListeners() {
            document.querySelectorAll('.cart-item').forEach(cartItem => {
                const productId = cartItem.dataset.productId;
                cartItem.querySelector('.remove-item-btn').addEventListener('click', () => {
                    let cart = JSON.parse(localStorage.getItem('cart')) || [];
                    localStorage.setItem('cart', JSON.stringify(cart.filter(item => item.id != productId)));
                    renderCart();
                });
                cartItem.querySelector('.increase-cart-qty').addEventListener('click', () => {
                    let cart = JSON.parse(localStorage.getItem('cart')) || [];
                    const productInCart = cart.find(item => item.id == productId);
                    if (productInCart) { productInCart.quantity++; localStorage.setItem('cart', JSON.stringify(cart)); renderCart(); }
                });
                cartItem.querySelector('.decrease-cart-qty').addEventListener('click', () => {
                    let cart = JSON.parse(localStorage.getItem('cart')) || [];
                    const productInCart = cart.find(item => item.id == productId);
                    if (productInCart && productInCart.quantity > 1) { productInCart.quantity--; localStorage.setItem('cart', JSON.stringify(cart)); renderCart(); }
                });
            });
        }
        renderCart();
    }

    // --- LÓGICA DA PÁGINA DE FAVORITOS ---
    if (document.querySelector('.favorites-list')) {
        const favoritesContainer = document.getElementById('favorites-items-container');
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (favorites.length === 0) {
            favoritesContainer.innerHTML = '<p class="empty-message">Você ainda não curtiu nenhum item.</p>';
        } else {
            favoritesContainer.innerHTML = '';
            favorites.forEach(productId => {
                const productData = products.find(p => p.id == productId);
                if (productData) {
                    favoritesContainer.innerHTML += `<div class="favorite-item" data-product-id="${productData.id}"><img src="${productData.image}" alt="${productData.name}" class="fav-item-image"><div class="fav-item-details"><p class="fav-item-name">${productData.name}</p><div class="fav-item-price-wrapper"><span class="fav-item-price">R$ ${productData.price.replace('.', ',')}</span></div></div><button class="btn-remove-fav">Remover</button></div>`;
                }
            });
            document.querySelectorAll('.btn-remove-fav').forEach(button => {
                button.addEventListener('click', (event) => {
                    const productIdToRemove = event.target.closest('.favorite-item').dataset.productId;
                    let currentFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
                    localStorage.setItem('favorites', JSON.stringify(currentFavorites.filter(id => id != productIdToRemove)));
                    window.location.reload(); 
                });
            });
        }
    }

    // --- LÓGICA DA PÁGINA DE CHECKOUT ---
    if (document.querySelector('.checkout-page')) {
        const urlParams = new URLSearchParams(window.location.search);
        const buyNowId = urlParams.get('buyNowId');
        let cartToDisplay = [];
        if (buyNowId) {
            const buyNowQty = urlParams.get('qty') || 1;
            cartToDisplay.push({ id: buyNowId, quantity: parseInt(buyNowQty) });
        } else {
            cartToDisplay = JSON.parse(localStorage.getItem('cart')) || [];
        }
        const summaryContainer = document.getElementById('summary-items');
        const subtotalPriceElement = document.getElementById('subtotal-price');
        const totalPriceElement = document.getElementById('total-price');
        function displaySummary(cart) {
            if (!summaryContainer) return;
            summaryContainer.innerHTML = '';
            let subtotal = 0;
            cart.forEach(item => {
                const productData = products.find(p => p.id == item.id);
                if (productData) {
                    summaryContainer.innerHTML += `<div class="summary-item"><img src="${productData.image}" alt=""><div><span>${productData.name} (x${item.quantity})</span><br><strong>R$ ${productData.price.replace('.',',')}</strong></div></div>`;
                    subtotal += parseFloat(productData.price) * item.quantity;
                }
            });
            const formattedSubtotal = subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            if (subtotalPriceElement) subtotalPriceElement.textContent = formattedSubtotal;
            if (totalPriceElement) totalPriceElement.textContent = formattedSubtotal;
        }
        displaySummary(cartToDisplay);
        document.querySelectorAll('input[name="payment"]').forEach(radio => {
            radio.addEventListener('change', (event) => {
                document.querySelectorAll('.payment-details').forEach(div => div.classList.remove('active'));
                document.getElementById(`${event.target.value}-info`).classList.add('active');
            });
        });
        document.querySelector('.btn-pay').addEventListener('click', () => {
            alert('Processando pagamento... (simulação)');
            if (!buyNowId) { localStorage.removeItem('cart'); }
            window.location.href = 'obrigado.html';
        });
    }

    // --- LÓGICA DA PÁGINA DE PERFIL ---
    if (document.querySelector('.profile-page')) {
        const editBtn = document.getElementById('edit-info-btn');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        if(editBtn) {
            editBtn.addEventListener('click', () => {
                if (nameInput.hasAttribute('readonly')) {
                    nameInput.removeAttribute('readonly');
                    emailInput.removeAttribute('readonly');
                    nameInput.style.backgroundColor = '#fff';
                    emailInput.style.backgroundColor = '#fff';
                    editBtn.textContent = 'Salvar';
                    nameInput.focus();
                } else {
                    nameInput.setAttribute('readonly', true);
                    emailInput.setAttribute('readonly', true);
                    nameInput.style.backgroundColor = '#e9ecef';
                    emailInput.style.backgroundColor = '#e9ecef';
                    editBtn.textContent = 'Editar';
                    alert('Informações salvas com sucesso! (simulação)');
                }
            });
        }
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                if (confirm('Tem certeza que deseja sair?')) {
                    alert('Você foi desconectado.');
                    window.location.href = 'login.html';
                }
            });
        }
        const deleteBtn = document.getElementById('delete-account-btn');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => {
                if (confirm('ATENÇÃO: Esta ação é irreversível. Tem certeza que deseja excluir sua conta e todos os seus dados?')) {
                    localStorage.clear();
                    alert('Sua conta foi excluída com sucesso.');
                    window.location.href = 'home.html';
                }
            });
        }
    }
});
// =====================================================
// CONFIGURACIÓN
// =====================================================

const WHATSAPP_NUMBER = "573150472837";

const DELIVERY_PRICE = 7000;

let cart = [];


// =====================================================
// CATÁLOGO
// =====================================================

const products = [

    {
        id: "pro3",

        name: "AirPods Pro 3",

        category: "AIRPODS",

        description:
            "AirPods Pro 3 según catálogo.",

        icon:
            "https://co.tiendasishop.com/cdn/shop/files/IMG-18067429_m_jpeg_1.jpg?v=1757469538&width=1445",

        prices: [
            [1, 75000],
            [3, 216000],
            [6, 420000],
            [10, 680000],
            [20, 1320000],
            [50, 3050000]
        ]
    },


    {
        id: "pro2",

        name: "AirPods Pro 2",

        category: "AIRPODS",

        description:
            "AirPods Pro 2 según catálogo.",

        icon:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwZSHbFlhUpeF_tbP5fYoUCP058jDp8FP3b_yZy9OQl-oxLtZnFvPwrqg6&s=10",

        prices: [
            [1, 60000],
            [3, 138000],
            [6, 267000],
            [10, 420000],
            [20, 780000],
            [50, 1899500]
        ]
    },


    {
        id: "4ta",

        name: "AirPods 4ta",

        category: "AIRPODS",

        description:
            "AirPods 4ta generación según catálogo.",

        icon:
            "https://http2.mlstatic.com/D_NQ_NP_757930-MLA99571091278_122025-O.webp",

        prices: [
            [1, 70000],
            [3, 168000],
            [6, 318000],
            [10, 499900],
            [20, 960000],
            [50, 2250000]
        ]
    },


    {
        id: "watch11",

        name: "Apple Watch Serie 11",

        category: "APPLE WATCH",

        description:
            "Apple Watch Serie 11. Obsequio: correa adicional.",

        icon:
            "https://co.tiendasishop.com/cdn/shop/files/IMG-18078652_m_jpeg_1_346eb99c-6bc1-42a3-956e-ded84f20f215.jpg?v=1757469547&width=823",

        prices: [
            [1, 139990],
            [3, 135000],
            [6, 131000],
            [10, 128000],
            [20, 125000],
            [50, 120000]
        ],

        gift:
            "🎁 Obsequio: correa adicional"
    },


    {
        id: "head20",

        name: "Cabeza 20W Original",

        category: "CARGADORES",

        description:
            "Cabeza de carga 20W original.",

        icon:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8anMcG96UyJ0Uw7JGoB9UCLBoet1k09KfJHKU3xzBP96z9lGHzLiIpA8&s=10",

        prices: [
            [1, 90000],
            [10, 850000],
            [20, 1500000],
            [50, 3500000]
        ]
    },


    {
        id: "head40",

        name: "Cabeza 40W Original",

        category: "CARGADORES",

        description:
            "Cabeza de carga 40W original.",

        icon:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeDVyEvESbMTtFAMMvCFi0Wtkn8kWsHsqzzo4s3EvnOA&s",

        prices: [
            [1, 150000],
            [10, 1400000],
            [20, 2600000],
            [50, 5500000]
        ]
    },


    {
        id: "lightning",

        name: "Cable Lightning Original",

        category: "CARGADORES",

        description:
            "Cable Lightning original.",

        icon:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkXmbm41V94WGBU2cz6n5tIhohWSAYoZ9e0bI_Soh0NN9BaB3Edaya_i-y&s=10",

        prices: [
            [1, 75000],
            [10, 720000],
            [20, 1340000],
            [50, 2999990]
        ]
    },


    {
        id: "typec",

        name: "Cable Tipo C Original",

        category: "CARGADORES",

        description:
            "Cable Tipo C original.",

        icon:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQadlmDm4fzItqM0G2SCfdCQTetsQdPz2relf7k1NAlShMs2nHbtVrKZCU&s=10",

        prices: [
            [1, 80000],
            [10, 720000],
            [20, 1340000],
            [50, 2999990]
        ]
    },


    {
        id: "combo20",

        name: "Combo de Cargadores 20W",

        category: "COMBOS",

        description:
            "Cabeza de 20W + cable Lightning, ambos originales.",

        icon:
            "https://http2.mlstatic.com/D_NQ_NP_693561-MCO111560418336_062026-O.webp",

        prices: [
            [1, 160000]
        ]
    },


    {
        id: "combo40",

        name: "Combo de Cargadores 40W",

        category: "COMBOS",

        description:
            "Cabeza de 40W + cable Tipo C, ambos originales.",

        icon:
            "https://exitocol.vtexassets.com/arquivos/ids/34986904/cargador-apple-40w-tipo-c-para-iphone-original.jpg?v=639234649735770000",

        prices: [
            [1, 210000]
        ]
    },


    {
        id: "magsafe",

        name: "MagSafe 1.1",

        category: "MAGSAFE",

        description:
            "MagSafe 1.1.",

        icon:
            "https://kfdigital.co/wp-content/uploads/2023/07/MHXH3.jpg",

        prices: [
            [1, 80000]
        ]
    }

];


// =====================================================
// COMBOS EMPRENDEDORES
// =====================================================

const entrepreneurProducts = [

    {
        id: "emp-airpods",

        name: "Combo AirPods",

        description:
            "3 AirPods Pro 3 + 3 AirPods Pro 2 + 3 AirPods 4ta + 3 AirPods 3ra.",

        detail:
            "• 3 AirPods Pro 3 — 3 × $59.000\n" +
            "• 3 AirPods Pro 2 — 3 × $44.990\n" +
            "• 3 AirPods 4ta — 3 × $50.800\n" +
            "• 3 AirPods 3ra — 3 × $44.990",

        price:
            599990
    },


    {
        id: "emp-familiar",

        name: "Combo Familiar",

        description:
            "4 AirPods Pro 3 + 2 Apple Watch Serie 11.",

        detail:
            "• 4 AirPods Pro 3 — 4 × $59.000\n" +
            "• 2 Watch Serie 11 — 2 × $119.990",

        price:
            479990
    },


    {
        id: "emp-emprendedor",

        name: "Combo Emprendedor",

        description:
            "4 AirPods Pro 2 + 4 AirPods 3ra + 2 Apple Watch Serie 11.",

        detail:
            "• 4 AirPods Pro 2 — 4 × $44.990\n" +
            "• 4 AirPods 3ra — 4 × $44.990\n" +
            "• 2 Watch Serie 11 — 2 × $119.990",

        price:
            599990
    }

];


// =====================================================
// CARGAR CARRITO
// =====================================================

const savedCart =
    localStorage.getItem("airpodsCart");


if (savedCart) {

    try {

        cart =
            JSON.parse(savedCart);

    } catch {

        cart = [];

    }

}


// =====================================================
// FORMATO DE PRECIO
// =====================================================

function formatPrice(price) {

    return "$" +
        Number(price)
            .toLocaleString("es-CO");

}


// =====================================================
// RENDERIZAR PRODUCTOS
// =====================================================

function renderProducts() {

    const container =
        document.getElementById("products");


    if (!container)
        return;


    container.innerHTML =

        products.map(product => {

            const unitPrice =
                product.prices[0][1];


            const pricing =

                product.prices
                    .map(([qty, price]) => {

                        return `

                            <div>

                                <span>
                                    ${
                                        qty === 1
                                            ? "1 unidad"
                                            : `${qty} unidades`
                                    }
                                </span>

                                <strong>
                                    ${formatPrice(price)}
                                </strong>

                            </div>

                        `;

                    })
                    .join("");


            return `

                <article class="product-card">

                    <div class="product-image">

                        <span class="category">
                            ${product.category}
                        </span>

                        <img
                            src="${product.icon}"
                            alt="${product.name}"
                            loading="lazy"
                            onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
                        >

                        <span
                            class="product-icon"
                            style="display:none;"
                        >
                            ◉
                        </span>

                    </div>


                    <div class="product-info">

                        ${
                            product.gift

                                ? `
                                    <span class="tag gift">
                                        OBSEQUIO
                                    </span>
                                `

                                : ""
                        }


                        <h3>
                            ${product.name}
                        </h3>


                        <p>
                            ${product.description}
                        </p>


                        ${
                            product.gift

                                ? `
                                    <p class="gift-text">
                                        ${product.gift}
                                    </p>
                                `

                                : ""
                        }


                        <div class="price">

                            ${formatPrice(unitPrice)}

                        </div>


                        <button
                            class="price-toggle"
                            onclick="togglePrices('${product.id}')"
                        >

                            Ver precios por cantidad

                            <span>
                                ⌄
                            </span>

                        </button>


                        <div
                            id="prices-${product.id}"
                            class="bulk-prices"
                        >

                            ${pricing}

                        </div>


                        <button
                            class="add-button"
                            onclick="addToCart(
                                '${product.name}',
                                ${unitPrice}
                            )"
                        >

                            Agregar al carrito

                        </button>

                    </div>

                </article>

            `;

        })

        .join("");

}


// =====================================================
// RENDERIZAR EMPRENDEDORES
// =====================================================

function renderEntrepreneurs() {

    const container =
        document.getElementById(
            "entrepreneur-products"
        );


    if (!container)
        return;


    container.innerHTML =

        entrepreneurProducts

            .map(combo => {

                return `

                    <article class="entrepreneur-card">

                        <span class="tag">
                            PRECIO EMPRENDEDOR
                        </span>


                        <h3>
                            ${combo.name}
                        </h3>


                        <p>
                            ${combo.description}
                        </p>


                        <div class="combo-detail">

                            ${combo.detail.replace(
                                /\n/g,
                                "<br>"
                            )}

                        </div>


                        <div class="combo-bottom">

                            <span>
                                Total
                            </span>

                            <strong>
                                ${formatPrice(combo.price)}
                            </strong>

                        </div>


                        <button
                            class="add-button"
                            onclick="addToCart(
                                '${combo.name}',
                                ${combo.price}
                            )"
                        >

                            Agregar al carrito

                        </button>

                    </article>

                `;

            })

            .join("");

}


// =====================================================
// MOSTRAR PRECIOS
// =====================================================

function togglePrices(id) {

    const prices =
        document.getElementById(
            `prices-${id}`
        );


    if (!prices)
        return;


    prices.classList.toggle("show");

}


// =====================================================
// AGREGAR AL CARRITO
// =====================================================

function addToCart(name, price) {

    const existingProduct =
        cart.find(
            product =>
                product.name === name
        );


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({

            name:
                name,

            price:
                price,

            quantity:
                1

        });

    }


    saveCart();

    updateCart();

    openCart();

}


// =====================================================
// GUARDAR CARRITO
// =====================================================

function saveCart() {

    localStorage.setItem(

        "airpodsCart",

        JSON.stringify(cart)

    );

}


// =====================================================
// ACTUALIZAR CARRITO
// =====================================================

function updateCart() {

    const cartItems =
        document.getElementById(
            "cart-items"
        );


    const cartCount =
        document.getElementById(
            "cart-count"
        );


    const cartTotal =
        document.getElementById(
            "cart-total"
        );


    if (!cartItems)
        return;


    cartItems.innerHTML =
        "";


    let total =
        0;


    let quantityTotal =
        0;


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <p class="empty-cart">
                Tu carrito está vacío.
            </p>

        `;

    }


    cart.forEach(
        (product, index) => {

            const productTotal =
                product.price *
                product.quantity;


            total +=
                productTotal;


            quantityTotal +=
                product.quantity;


            cartItems.innerHTML += `

                <div class="cart-item">

                    <div class="cart-item-info">

                        <h3>
                            ${product.name}
                        </h3>

                        <p>
                            ${formatPrice(
                                product.price
                            )} c/u
                        </p>

                    </div>


                    <div class="quantity">

                        <button
                            onclick="changeQuantity(
                                ${index},
                                -1
                            )"
                        >
                            −
                        </button>


                        <span>
                            ${product.quantity}
                        </span>


                        <button
                            onclick="changeQuantity(
                                ${index},
                                1
                            )"
                        >
                            +
                        </button>

                    </div>

                </div>

            `;

        }
    );


    if (cartTotal) {

        cartTotal.textContent =
            formatPrice(total);

    }


    if (cartCount) {

        cartCount.textContent =
            quantityTotal;

    }

}


// =====================================================
// CAMBIAR CANTIDAD
// =====================================================

function changeQuantity(index, change) {

    cart[index].quantity +=
        change;


    if (
        cart[index].quantity <= 0
    ) {

        cart.splice(index, 1);

    }


    saveCart();

    updateCart();

}


// =====================================================
// ABRIR CARRITO
// =====================================================

function openCart() {

    const modal =
        document.getElementById(
            "cart-modal"
        );


    if (modal) {

        modal.classList.add(
            "active"
        );

    }

}


// =====================================================
// CERRAR CARRITO
// =====================================================

function closeCart() {

    const modal =
        document.getElementById(
            "cart-modal"
        );


    if (modal) {

        modal.classList.remove(
            "active"
        );

    }

}


// =====================================================
// ABRIR CHECKOUT
// =====================================================

function openCheckout() {

    if (cart.length === 0) {

        alert(
            "Tu carrito está vacío."
        );

        return;

    }


    closeCart();


    const modal =
        document.getElementById(
            "checkout-modal"
        );


    if (modal) {

        modal.classList.add(
            "active"
        );

    }


    updateAddressVisibility();

}


// =====================================================
// CERRAR CHECKOUT
// =====================================================

function closeCheckout() {

    const modal =
        document.getElementById(
            "checkout-modal"
        );


    if (modal) {

        modal.classList.remove(
            "active"
        );

    }

}


// =====================================================
// ENTREGA
// =====================================================

function updateAddressVisibility() {

    const delivery =
        document.getElementById(
            "delivery"
        );


    const addressBox =
        document.getElementById(
            "address-box"
        );


    if (!delivery || !addressBox)
        return;


    addressBox.classList.toggle(

        "show",

        delivery.value ===
            "Punto de entrega"

    );

}


// =====================================================
// SELECT DE ENTREGA
// =====================================================

const deliverySelect =
    document.getElementById(
        "delivery"
    );


if (deliverySelect) {

    deliverySelect.addEventListener(

        "change",

        updateAddressVisibility

    );

}


// =====================================================
// NÚMERO DE PEDIDO
// =====================================================

function getOrderNumber() {

    let orderNumber =

        parseInt(

            localStorage.getItem(
                "airpodsOrderNumber"
            )

        ) || 0;


    orderNumber++;


    localStorage.setItem(

        "airpodsOrderNumber",

        orderNumber

    );


    return orderNumber;

}


// =====================================================
// ENVIAR PEDIDO POR WHATSAPP
// =====================================================

const orderForm =
    document.getElementById(
        "order-form"
    );


if (orderForm) {

    orderForm.addEventListener(

        "submit",

        function(event) {

            event.preventDefault();


            if (cart.length === 0) {

                alert(
                    "Tu carrito está vacío."
                );

                return;

            }


            const name =

                document
                    .getElementById("name")
                    .value
                    .trim();


            const phone =

                document
                    .getElementById("phone")
                    .value
                    .trim();


            const delivery =

                document
                    .getElementById("delivery")
                    .value;


            const payment =

                document
                    .getElementById("payment")
                    .value;


            const orderNumber =
                getOrderNumber();


            // =========================================
            // PRODUCTOS
            // =========================================

            let productsTotal =
                0;


            let productsMessage =
                "";


            cart.forEach(product => {

                const productTotal =

                    product.price *
                    product.quantity;


                productsTotal +=
                    productTotal;


                productsMessage +=

                    `• ${product.name} x${product.quantity} — ${formatPrice(productTotal)}\n`;

            });


            // =========================================
            // DOMICILIO
            // =========================================

            const deliveryCost =

                delivery === "Domicilio"

                    ? DELIVERY_PRICE

                    : 0;


            const finalTotal =

                productsTotal +
                deliveryCost;


            // =========================================
            // INFORMACIÓN DE ENTREGA
            // =========================================

            let deliveryMessage =
                "";


            if (
                delivery ===
                "Domicilio"
            ) {

                deliveryMessage =

                    `🚚 MÉTODO DE ENTREGA: Domicilio\n` +

                    `📍 DIRECCIÓN: Avenida Santander, calle 22 #22-14, Edificio Molinos de la Pampa, apartamento 10-02\n` +

                    `💵 DOMICILIO: ${formatPrice(
                        DELIVERY_PRICE
                    )}`;

            } else {

                deliveryMessage =

                    `📦 MÉTODO DE ENTREGA: Punto de entrega\n` +

                    `📍 PUNTO DE ENTREGA: Avenida Santander, calle 22 #22-14, Edificio Molinos de la Pampa, apartamento 10-02`;

            }


            // =========================================
            // MENSAJE
            // =========================================

            const message =

                `Hola, pedido #${orderNumber} 👋

🛍️ PRODUCTOS
${productsMessage}
💰 SUBTOTAL: ${formatPrice(productsTotal)}

${deliveryMessage}

💳 MÉTODO DE PAGO: ${payment}

👤 NOMBRE: ${name}
📞 NÚMERO: ${phone}

💰 TOTAL DEL PEDIDO: ${formatPrice(finalTotal)}

Gracias. Quedo atento/a a la confirmación del pedido.`;


            // =========================================
            // WHATSAPP
            // =========================================

            const whatsappURL =

                `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


            window.open(

                whatsappURL,

                "_blank"

            );


            // =========================================
            // LIMPIAR
            // =========================================

            cart = [];


            saveCart();

            updateCart();

            closeCheckout();

            orderForm.reset();

            updateAddressVisibility();

        }

    );

}


// =====================================================
// CERRAR MODAL CARRITO
// =====================================================

const cartModal =
    document.getElementById(
        "cart-modal"
    );


if (cartModal) {

    cartModal.addEventListener(

        "click",

        function(event) {

            if (
                event.target === this
            ) {

                closeCart();

            }

        }

    );

}


// =====================================================
// CERRAR MODAL CHECKOUT
// =====================================================

const checkoutModal =
    document.getElementById(
        "checkout-modal"
    );


if (checkoutModal) {

    checkoutModal.addEventListener(

        "click",

        function(event) {

            if (
                event.target === this
            ) {

                closeCheckout();

            }

        }

    );

}


// =====================================================
// INICIAR PÁGINA
// =====================================================

renderProducts();

renderEntrepreneurs();

updateCart();
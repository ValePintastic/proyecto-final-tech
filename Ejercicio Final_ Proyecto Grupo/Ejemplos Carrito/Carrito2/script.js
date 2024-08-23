// script.js
document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    const cartItems = document.querySelector('.cart-items');
    const totalPriceElement = document.querySelector('.total-price');
    let totalPrice = 0;

    products.forEach(product => {
        product.querySelector('.add-to-cart').addEventListener('click', () => {
            const productId = product.getAttribute('data-id');
            const productName = product.querySelector('h2').innerText;
            const productPrice = parseFloat(product.querySelector('p').innerText.replace('Precio: $', ''));

            addItemToCart(productId, productName, productPrice);
            updateTotalPrice(productPrice);
        });
    });

    function addItemToCart(id, name, price) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.setAttribute('data-id', id);
        cartItem.innerHTML = `
            <h2>${name}</h2>
            <p>Precio: $${price}</p>
            <button class="remove-from-cart">Quitar</button>
        `;
        cartItems.appendChild(cartItem);

        cartItem.querySelector('.remove-from-cart').addEventListener('click', () => {
            cartItem.remove();
            updateTotalPrice(-price);
        });
    }

    function updateTotalPrice(amount) {
        totalPrice += amount;
        totalPriceElement.innerText = totalPrice.toFixed(2);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.querySelector('.total-price');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', event => {
            const product = event.target.closest('.product');
            const productName = product.querySelector('h2').textContent;
            const productPrice = parseFloat(product.querySelector('p').textContent.replace('Precio: $', ''));

            const cartItem = { name: productName, price: productPrice };
            cartItems.push(cartItem);
            renderCartItems();
            updateTotalPrice();
        });
    });

    function renderCartItems() {
        cartItemsContainer.innerHTML = '';
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('cart-item');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(li);
        });
    }

    function updateTotalPrice() {
        const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }
});

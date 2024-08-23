$(document).ready(function() {
    // Array para almacenar los productos en el carrito
    let cart = [];

    // Función para actualizar el total del carrito
    function updateCartTotal() {
        let total = 0;
        cart.forEach(function(item) {
            total += item.price;
        });
        $("#cartTotal").text("$" + total.toLocaleString());
    }

    // Función para renderizar los productos en el carrito y Botón Eliminar
    function renderCart() {
        let cartItems = $("#cartItems");
        cartItems.empty();

        cart.forEach(function(item, index) {
            cartItems.append(
                `<li class="list-group-item d-flex justify-content-between align-items-center">
                    ${item.name}
                    <span>$${item.price.toLocaleString()}</span>
                    <button class="btn btn-danger btn-sm remove-item" data-index="${index}">Eliminar</button> 
                </li>`
            );            
        });

        updateCartTotal();
    }

    // Evento para añadir un producto al carrito
    $(".add-to-cart").click(function(e) {
        e.preventDefault(); // Evita la acción por defecto del enlace

        let name = $(this).data("name");
        let price = parseInt($(this).data("price"));

        // Añadir producto al carrito
        cart.push({ name: name, price: price });
        renderCart();
    });

    // Evento para eliminar un producto del carrito
    $("#cartItems").on("click", ".remove-item", function() {
        let index = $(this).data("index");

        // Eliminar el producto del carrito
        cart.splice(index, 1);
        renderCart();
    });

    // Evento para finalizar la compra (checkout)
    $("#checkoutBtn").click(function() {
        if (cart.length === 0) {
            alert("El carrito está vacío.");
        } else {
            alert("Compra finalizada. ¡Gracias por tu compra!");
            // Limpiar el carrito
            cart = [];
            renderCart();
            $("#cartModal").modal("hide");
        }
    });

    // Mostrar el modal del carrito cuando se hace clic en "Mi carrito"
    $('a[href="#cartModal"]').click(function(e) {
        e.preventDefault(); // Evita la acción por defecto del enlace
        $("#cartModal").modal("show");
    });
});

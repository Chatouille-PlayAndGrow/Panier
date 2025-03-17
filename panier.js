document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Votre panier est vide.</p>";
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div>
                <h2>${item.name}</h2>
                <p>Prix: ${item.price}€</p>
                <p>Quantité: ${item.quantity}</p>
            </div>
        `).join("");
    }
});

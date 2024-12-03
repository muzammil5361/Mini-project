let cart = [];

function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    
    if (cartSidebar.classList.contains('visible')) {
        cartSidebar.classList.remove('visible');
        cartSidebar.classList.add('hidden');
        setTimeout(() => {
            cartSidebar.style.display = 'none';
        }, 300);
    } else {
        cartSidebar.style.display = 'block';
        cartSidebar.classList.remove('hidden');
        cartSidebar.classList.add('visible');
    }
    updateCart();
}

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(productName + ' added to cart!');
    updateCart();
    saveCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>No items in cart.</p>';
        return;
    }

    let total = 0;
    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `<p>${item.name} - $${item.price}</p>`;
        cartItems.appendChild(div);
        total += item.price;
    });

    const totalElement = document.createElement('p');
    totalElement.textContent = `Total: $${total}`;
    cartItems.appendChild(totalElement);
}

function clearCart() {
    cart = [];
    updateCart();
    saveCart();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    updateCart();
});

function buyNow(productName) {
    alert('Redirecting to buy ' + productName + '!');
    // Redirect to buy page logic goes here
}

document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('reviewer-name').value;
    const text = document.getElementById('review-text').value;

    const reviewSection = document.getElementById('reviews');
    const newReview = document.createElement('div');
    newReview.className = 'review';
    newReview.innerHTML = `<h3>${name}</h3><p>${text}</p>`;
    
    reviewSection.appendChild(newReview);
    document.getElementById('review-form').reset();
});

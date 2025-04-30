let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    document.getElementById('clear-cart').addEventListener('click', clearCart);
});

function addToCart(event) {
    event.preventDefault();
    const productId = event.target.closest('.add-to-cart').dataset.id;
    const product = getProductById(productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
}

function getProductById(id) {
    const products = [
        { id: '1', name: '20 Stems', price: 350, image: 'Shop/Sproducts/20 Stems/20 stems.jpeg' },
        { id: '2', name: '40 Stems', price: 700, image: 'Shop/Sproducts/40 Stems/40 stems.jpeg' },
        { id: '3', name: '60 Stems', price: 1050, image: 'Shop/Sproducts/60 Stems/60 stems.jpeg' },
        { id: '4', name: '80 Stems', price: 1400, image: 'Shop/Sproducts/80 Stems/80 stems.jpeg' },
        { id: '5', name: '100 Stems', price: 1750, image: 'Shop/Sproducts/100 Stems/100 stems.jpeg' },
        { id: '6', name: '200 Stems', price: 2100, image: 'Shop/Sproducts/200 Stems/200 stems.jpeg' },
        { id: '7', name: "Baby's Breath", price: 250, image: 'Products/Add-on Flower Per Bunch/Baby Breath.jpeg' },
        { id: '8', name: 'Celebrate You Package', price: 1450, image: 'Products/The flower Studio Collection/Celebrate you package.jpeg' },
        { id: '9', name: 'The Royal Treatment', price: 2000, image: 'Products/The flower Studio Collection/The Royal Treatment.jpg' },
    ];
    return products.find(product => product.id === id);
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    } else {
        cart = [];
    }
}

function removeFromCart(event) {
    const productId = event.target.dataset.id;
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

function clearCart() {
    cart = [];
    localStorage.removeItem('cart');
    alert('Your cart has been cleared.');
}
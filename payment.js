document.getElementById('payment-form').addEventListener('submit', function (event) {
    event.preventDefault();

 
    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const address = document.querySelector('input[name="address"]').value.trim();
    const city = document.querySelector('input[name="city"]').value.trim();
    const state = document.querySelector('input[name="state"]').value.trim();
    const zip = document.querySelector('input[name="zip"]').value.trim();
    const country = document.querySelector('input[name="country"]').value.trim();
    const cardName = document.querySelector('input[name="card-name"]').value.trim();
    const cardNumber = document.querySelector('input[name="card-number"]').value.trim();
    const expiry = document.querySelector('input[name="expiry"]').value.trim();
    const cvv = document.querySelector('input[name="cvv"]').value.trim();

   
    if (!name || !email || !address || !city || !state || !zip || !country || !cardName || !cardNumber || !expiry || !cvv) {
        alert('Please fill in all the fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!validateCardNumber(cardNumber)) {
        alert('Please enter a valid card number.');
        return;
    }

    if (!validateExpiryDate(expiry)) {
        alert('Please enter a valid expiry date (MM/YY).');
        return;
    }

    if (!validateCVV(cvv)) {
        alert('Please enter a valid CVV.');
        return;
    }

    alert('Payment processed successfully! Thank you for your purchase.');

   
    window.location.href = 'confirmation.html';
});


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateCardNumber(cardNumber) {
    const cardNumberRegex = /^\d{16}$/; // 16 digits
    return cardNumberRegex.test(cardNumber);
}

function validateExpiryDate(expiry) {
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
    return expiryRegex.test(expiry);
}

function validateCVV(cvv) {
    const cvvRegex = /^\d{3}$/; // 3 digits
    return cvvRegex.test(cvv);
}
// Handle donation payment form submission (Money Donation)
document.getElementById('moneyDonationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const amount = document.getElementById('amount').value;
    const donationStatusDiv = document.getElementById('donationStatus');

    if (amount > 0) {
        donationStatusDiv.textContent = `Thank you for your donation of $${amount}!`;
        donationStatusDiv.style.color = 'green';
    } else {
        donationStatusDiv.textContent = 'Please enter a valid donation amount.';
        donationStatusDiv.style.color = 'red';
    }
});

// Handle item donation form submission (Clothes/Food)
document.getElementById('itemDonationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const itemType = document.getElementById('itemType').value;
    const quantity = document.getElementById('itemQuantity').value;

    alert(`Thank you for donating ${quantity} ${itemType}(s)!`);
});

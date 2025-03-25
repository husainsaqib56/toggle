function updateBundle() {
    const options = document.querySelectorAll('.option');
    const totalPriceElement = document.getElementById('total-price');

    options.forEach(option => {
        const radio = option.querySelector('input[type="radio"]');
        const pairDetails = option.querySelector('.pair-details');

        if (radio.checked) {
            option.classList.add('active');
            pairDetails.classList.add('active');
            const priceText = option.querySelector('.price').textContent;
            totalPriceElement.textContent = priceText;
            console.log(`Selected option: ${radio.value}, Pair details active: ${pairDetails.classList.contains('active')}`);
        } else {
            option.classList.remove('active');
            pairDetails.classList.remove('active');
            console.log(`Deselected option: ${radio.value}, Pair details active: ${pairDetails.classList.contains('active')}`);
        }
    });
}

// Initialize the page with the default selection
document.addEventListener('DOMContentLoaded', () => {
    updateBundle();
});
function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        console.error('Invalid input. Please enter valid numbers.');
        return;
    }
    
    const interestAmount = (principal * rate * time) / 100;

    document.getElementById('interestAmount').textContent = `$${interestAmount.toFixed(2)}`;
}
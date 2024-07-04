function generateMoney() {
    const amount = document.getElementById('amount').value;
    const message = document.getElementById('message');

    // Check if amount is empty
    if (amount.trim() === '') {
        message.innerHTML = "Please fill in the amount!";
        return; // Exit the function early
    }

    message.innerHTML = "Processing...";
    
    setTimeout(() => {
        message.innerHTML = `Generating ₱${amount}...`;
        
        setTimeout(() => {
            message.innerHTML = `Success! You've just generated ₱${amount}!`;
            
            // Redirect to Rickroll (YouTube)
            window.location.href = 'https://youtu.be/xvFZjo5PgG0?si=6RaJ7t3_1wpZZlFp';
            
        }, 2000);
    }, 2000);
}

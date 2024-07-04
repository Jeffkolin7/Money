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
            window.location.href = 'https://youtu.be/xMHJGd3wwZk?si=nHEOx_F-JUZIiJ-i';
            
        }, 2000);
    }, 2000);
}

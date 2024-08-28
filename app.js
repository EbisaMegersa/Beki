window.Telegram.WebApp.ready();

document.addEventListener("DOMContentLoaded", () => {
    const tg = window.Telegram.WebApp;
    const user = tg.initDataUnsafe?.user;

    if (user) {
        // Hide loading message
        document.getElementById('loading-message').style.display = 'none';

        // Display user information
        const userName = user.username ? `@${user.username}` : `${user.first_name}`;
        document.getElementById('user-name').textContent = `Hello, ${userName}!`;

        // Show user info div
        document.getElementById('user-info').style.display = 'block';

        // Initialize user balance (in a real app, fetch actual balance from your backend)
        let balance = 0;  // Starting balance
        updateBalance(balance);  // Update UI with balance
        
        // Generate and display referral link
        const referralLink = generateReferralLink(user.id);
        document.getElementById('referral-link').value = referralLink;
        document.getElementById('referral').style.display = 'block';
        
        // Check if this user came from a referral link
        const params = new URLSearchParams(window.location.search);
        const referrerId = params.get('referrer');
        if (referrerId && referrerId !== user.id.toString()) {
            // Simulate adding points to referrer's balance
            // In a real app, make an API call to your backend here
            addPointsToReferrer(referrerId);  // Add 2 points to the inviter's balance
            alert(`You've been referred by user ID: ${referrerId}`);
        }
    } else {
        // Display error if user info is not available
        document.getElementById('loading-message').textContent = 'Unable to retrieve user information.';
    }
});

// Function to update balance display
function updateBalance(balance) {
    document.getElementById('user-balance').textContent = `${balance} points`;
    document.getElementById('balance').style.display = 'block';
}

// Function to generate a referral link for the user
function generateReferralLink(userId) {
    const botUsername = 'Ebabdgbbot';  // Your Telegram bot's username
    return `https://t.me/${botUsername}/app?startapp=${userId}`;  // Generate referral link using the bot username and user ID
}

// Function to copy the referral link to clipboard
function copyReferralLink() {
    const referralInput = document.getElementById('referral-link');
    referralInput.select();
    document.execCommand('copy');
    alert('Referral link copied to clipboard!');
}

// Simulate adding points to the referrer's balance
// In a real app, you would call your backend API to update the referrer's balance
function addPointsToReferrer(referrerId) {
    // This function would typically make a server call to update the balance
    console.log(`Adding 2 points to referrer with ID: ${referrerId}`);
}
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

        // Show balance div with a sample balance (in a real app, fetch actual balance from your backend)
        let balance = 100;  // Example starting balance
        updateBalance(balance);  // Update UI with balance
        
        // Generate and display referral link
        const referralLink = generateReferralLink(user.id);
        document.getElementById('referral-link').value = referralLink;
        document.getElementById('referral').style.display = 'block';
        
        // Check if this user came from a referral link
        const params = new URLSearchParams(window.location.search);
        const referrerId = params.get('referrer');
        if (referrerId && referrerId !== user.id.toString()) {
            // Handle referral - in a real app, you'd call your backend API to update the inviter's balance
            balance += 2;  // Increment inviter's balance by 2 points
            updateBalance(balance);  // Update UI with new balance
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
    const baseUrl = window.location.origin + window.location.pathname;  // Base URL of the web app
    return `${baseUrl}?referrer=${userId}`;  // Referral link with user ID as a query parameter
}

// Function to copy the referral link to clipboard
function copyReferralLink() {
    const referralInput = document.getElementById('referral-link');
    referralInput.select();
    document.execCommand('copy');
    alert('Referral link copied to clipboard!');
}
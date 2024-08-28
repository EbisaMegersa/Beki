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

        // Show referral system
        document.getElementById('referral-system').style.display = 'block';
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

// Function to handle referral submission
function submitReferral() {
    const inviterId = document.getElementById('inviter-id').value.trim();
    if (!inviterId) {
        document.getElementById('referral-message').textContent = 'Please enter an inviter ID.';
        return;
    }

    // Check if the inviter ID is valid
    if (isValidUserId(inviterId)) {
        // Simulate adding points to the inviter's balance
        // In a real app, you would send a request to your backend server here
        addPointsToInviter(inviterId);
    } else {
        document.getElementById('referral-message').textContent = 'Invalid inviter ID or already invited.';
    }
}

// Function to check if the user ID is valid and not already used
// In a real application, this check would be done on the server
function isValidUserId(userId) {
    // Simulate checking user ID validity
    // In a real application, check if the ID exists and if the current user has not used it before
    // Example: return fetch(`/check-user/${userId}`).then(response => response.json()).then(data => data.valid);
    
    // For demo purposes, assume all user IDs are valid if not already used
    // This should be replaced with actual backend logic
    return true;
}

// Function to add points to the inviter's balance
// In a real application, this function would make an API call to your backend server
function addPointsToInviter(inviterId) {
    // Simulate adding points
    console.log(`Adding 2 points to inviter with ID: ${inviterId}`);
    document.getElementById('referral-message').textContent = `Referral successful! 2 points added to the inviter's balance.`;
    // Update the balance UI accordingly
    // In a real app, fetch updated balance from your backend
}
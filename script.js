window.Telegram.WebApp.ready();

document.addEventListener("DOMContentLoaded", () => {
    // Access the user's data from the Telegram Web App
    const tg = window.Telegram.WebApp;
    const user = tg.initDataUnsafe?.user;

    if (user) {
        // Display user information
        document.getElementById('user-info').textContent = `Hello, ${user.first_name} (ID: ${user.id})!`;
    } else {
        // Handle the case when user data is not available
        document.getElementById('user-info').textContent = 'Unable to retrieve user information.';
    }
});
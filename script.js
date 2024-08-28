window.Telegram.WebApp.ready();

document.addEventListener("DOMContentLoaded", () => {
    // Access the user's data from the Telegram Web App
    const tg = window.Telegram.WebApp;
    const user = tg.initDataUnsafe?.user;

    if (user) {
        // Display user's username or fallback to first name if username is not available
        const username = user.username ? `@${user.username}` : `${user.first_name}`;
        document.getElementById('user-info').textContent = `Hello, ${username} (ID: ${user.id})!`;
    } else {
        // Handle the case when user data is not available
        document.getElementById('user-info').textContent = 'Unable to retrieve user information.';
    }
});
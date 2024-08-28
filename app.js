window.Telegram.WebApp.ready();

document.addEventListener("DOMContentLoaded", () => {
  // Access the user's data from the Telegram Web App
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

    // Show balance div with sample balance (you can fetch actual balance from your backend or API)
    document.getElementById('user-balance').textContent = '$100.00'; // Example balance
    document.getElementById('balance').style.display = 'block';
  } else {
    // Display error if user info is not available
    document.getElementById('loading-message').textContent = 'Unable to retrieve user information.';
  }
});
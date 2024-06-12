document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');
    const today = new Date();
    const day = today.getDate();

    if (day % 2 === 0) {
        messageElement.innerHTML = "MARCO";
    } else {
        messageElement.innerHTML = "COSIMO";
    }
    messageElement.classList.add('animated-message');
});
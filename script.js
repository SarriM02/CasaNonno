document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');
    const today = new Date();
    const day = today.getDate();

    if (day % 2 === 0) {
        messageElement.textContent = "MARCO";
    } else {
        messageElement.textContent = "COSIMO";
    }
});
const chatOutput = document.getElementById('chat-output');

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;

    if (message.trim() !== '') {
        displayMessage(chatOutput, message);

        // Отправляем сообщение на сервер
        // В данном примере просто выводим ответ от сервера
        displayMessage(chatOutput, `Server Echo: ${message}`);
    }
}

function displayMessage(outputElement, message) {
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    outputElement.appendChild(newMessage);
}

function sendLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const mapLink = `https://www.openstreetmap.org/#map=12/${latitude}/${longitude}`;
            displayMessage(chatOutput, `Моя гео-локация: ${mapLink}`);
        }, () => {
            displayMessage(chatOutput, 'Невозможно получить ваше местоположение.');
        });
    } else {
        displayMessage(chatOutput, 'Гео-локация не поддерживается вашим браузером.');
    }
}
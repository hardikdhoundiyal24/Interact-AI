function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (!message) return;

    appendMessage(message, "user");
    input.value = "";

    // Simulate bot response
    setTimeout(() => {
        appendMessage("I'm just a demo bot 🤖", "bot");
    }, 1000);
}

function appendMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");
    const msg = document.createElement("div");
    msg.className = `message ${sender}`;
    msg.innerText = message;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

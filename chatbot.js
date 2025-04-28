function sendChat() {
  const input = document.getElementById('chatInput').value.trim();
  const chatArea = document.getElementById('chatArea');

  if (input !== "") {
    const newMessage = document.createElement('p');
    newMessage.innerHTML = `<strong>You:</strong> ${input}`;
    chatArea.appendChild(newMessage);

    // Simple bot response
    const botReply = document.createElement('p');
    botReply.innerHTML = `<strong>Bot:</strong> Thank you for your message. We will respond shortly.`;
    chatArea.appendChild(botReply);

    document.getElementById('chatInput').value = "";
    chatArea.scrollTop = chatArea.scrollHeight;
  }
}

function switchLanguage() {
  const lang = document.getElementById('languageSelect').value;
  const chatArea = document.getElementById('chatArea');

  const botReply = document.createElement('p');

  if (lang === "en") {
    botReply.innerHTML = `<strong>Bot:</strong> Language switched to English.`;
  } else if (lang === "fr") {
    botReply.innerHTML = `<strong>Bot:</strong> Langue changée en français.`;
  } else if (lang === "ha") {
    botReply.innerHTML = `<strong>Bot:</strong> An canza harshe zuwa Hausa.`;
  }

  chatArea.appendChild(botReply);
  chatArea.scrollTop = chatArea.scrollHeight;
}

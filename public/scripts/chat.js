const input = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messagesContainer = document.getElementById('messages-container');

sendButton.addEventListener('click', () => {
  const message = input.value;

  if (message !== '') {
    sendMessage(message);
  }
});

input.addEventListener('keyup', event => {
  if (event.key === 'Enter') {
    const message = input.value;

    if (message !== '') {
      sendMessage(message);
    }
  }
});

async function sendMessage(message) {
  addMessageToContainer(message, 'user');

  const reply = await getReplyFromChatbot(message);

  addMessageToContainer(reply, 'chatbot');
}

async function getReplyFromChatbot(message) {
  const response = await fetch('/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message })
  });

  const { reply } = await response.json();

  return reply;
}

function addMessageToContainer(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.textContent = message;
  messageDiv.classList.add('message');
  messageDiv.classList.add(sender);

  messagesContainer.appendChild(messageDiv);

  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

input.focus();
const openChatBtn = document.getElementById('boton');
const chatContainer = document.getElementById('text_box1');
const chatInput = document.getElementById('chat1');
const title = document.getElementById('titulo1');
const sendBtn = document.getElementById('enviar');

openChatBtn.addEventListener('click', () => {
  chatContainer.style.display = 'block';
});

sendBtn.addEventListener('click', () => {
  const userInput = chatInput.value.trim();
  if (userInput !== '') {
    const message = document.createElement('p');
    message.textContent = userInput;
    title.value='';
    chatInput.value = '';
    chatContainer.style.display = 'none';
  }
});

chatContainer.addEventListener('click', (e) => {
  if (e.target === chatContainer) {
    chatContainer.style.display = 'none';
  }
});
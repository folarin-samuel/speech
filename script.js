const textInput = document.getElementById('text-input');
const readButton = document.getElementById('read-button');
const outputDiv = document.getElementById('output');

readButton.addEventListener('click', () => {
  const text = textInput.value;
  const speech = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(speech);
  outputDiv.innerText = text;
});



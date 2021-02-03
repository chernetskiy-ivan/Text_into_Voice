function speak(text) {
    const message = new SpeechSynthesisUtterance();
    message.lang = 'ru-RU';
    message.text = text;
    window.speechSynthesis.speak(message);
}

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    speak(document.querySelector('.text').value)
})

btn.onpause
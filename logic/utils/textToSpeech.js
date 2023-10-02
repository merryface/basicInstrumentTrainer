export function textToSpeech(textToSpeak) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.voice = speechSynthesis.getVoices()[0]; // Choose a voice (optional)
    utterance.rate = 1.0; // Speech rate (optional)
    utterance.pitch = 1.0; // Speech pitch (optional)

    utterance.onstart = () => {
      console.log('Speech started.');
    };

    utterance.onend = () => {
      console.log('Speech ended.');
    };

    utterance.onerror = (event) => {
      console.error('Speech error:', event.error);
    };

    speechSynthesis.speak(utterance);
  } else {
    console.error('Web Speech API is not supported in this browser.');
  }
}
export function textToSpeech(textToSpeak) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    const voices = speechSynthesis.getVoices();
    
    // Find and set the desired voice (e.g., English US)
    const desiredVoice = voices.find((voice) => voice.lang === 'en-US');
    if (desiredVoice) {
      utterance.voice = desiredVoice;
    } else {
      console.warn('Desired voice (en-US) not found. Using the default voice.');
    }

    utterance.lang = 'en-US';
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

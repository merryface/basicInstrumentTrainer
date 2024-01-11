export function textToSpeech(textToSpeak) {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'en-US';
    utterance.rate = 1.0; // Speech rate (optional)
    utterance.pitch = 1.0; // Speech pitch (optional)

    // Function to check if the current device is iOS
    function isIOS() {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }

    // Check if the device is iOS and manually set the voice
    if (isIOS()) {
      // Manually set an English voice known to exist on iOS
      utterance.lang = 'en-GB';
    }

    utterance.onstart = () => {
      console.log('Speech started.');
    };

    utterance.onend = () => {
      console.log('Speech ended.');
    };

    // Speak the utterance
    window.speechSynthesis.speak(utterance);
  }
}
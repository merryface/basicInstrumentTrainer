export function textToSpeech(textToSpeak) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    // Function to check if an available voice has a given language code
    function hasLanguage(voice, language) {
      return voice.lang.startsWith(language);
    }

    // Wait for voices to be loaded
    speechSynthesis.onvoiceschanged = () => {
      const voices = speechSynthesis.getVoices();

      // Find the first voice with English language
      const englishVoice = voices.find((voice) => hasLanguage(voice, 'en'));
      console.log(voices);
      
      if (englishVoice) {
        utterance.voice = englishVoice;
        utterance.lang = englishVoice.lang;
      } else {
        console.warn('No English voice found. Using the default voice.');
      }

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
    };
  } else {
    console.error('Web Speech API is not supported in this browser.');
  }
}

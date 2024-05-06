// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const synth = window.speechSynthesis;

  const inputBox = document.getElementById("text-to-speak");
  const voiceSelect = document.querySelector("select");
  
  let voices = [];

  // add all available voices to the dropdown menu
  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }
  
    voices = speechSynthesis.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }
  
  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // text-to-speech configuration
  function speak() {
    if (synth.speaking) {
      console.error("speechSynthesis.speaking");
      return;
    }

    if (inputBox.value !== "") {
      const utterThis = new SpeechSynthesisUtterance(inputBox.value);

      utterThis.onend = function (event) {
        console.log("SpeechSynthesisUtterance.onend");
        document.querySelector("img[alt='Smiling face']").src="/Lab5_Starter_rs-eh/assets/images/smiling.png";
      };

      utterThis.onerror = function (event) {
        console.error("SpeechSynthesisUtterance.onerror");
        document.querySelector("img[alt='Smiling face']").src="/Lab5_Starter_rs-eh/assets/images/smiling.png";
      };

      const selectedOption =
        voiceSelect.selectedOptions[0].getAttribute("data-name");

      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
          utterThis.voice = voices[i];
          break;
        }
      }

      synth.speak(utterThis);
      document.querySelector("img[alt='Smiling face']").src="/Lab5_Starter_rs-eh/assets/images/smiling-open.png";
    }
  }

  document.querySelector("button").addEventListener('click', function() {
    speak();
  });
}

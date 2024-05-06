// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const jsConfetti = new JSConfetti();

  // drop down menu configuration
  document.getElementById("horn-select").addEventListener('input', function() {

    const hornIcon = document.querySelector("img[alt='No image selected']");
    const audioElem = document.getElementsByClassName("hidden");
    const selected = this.value;

    switch(selected){
      case "air-horn":
        hornIcon.src="/Lab5_Starter_rs-eh/assets/images/air-horn.svg";
        audioElem[0].src="/Lab5_Starter_rs-eh/assets/audio/air-horn.mp3";
        break;
      case "car-horn":
        hornIcon.src="/Lab5_Starter_rs-eh/assets/images/car-horn.svg";
        audioElem[0].src="/Lab5_Starter_rs-eh/assets/audio/car-horn.mp3";
        break;
      case "party-horn":
        hornIcon.src="/Lab5_Starter_rs-eh/assets/images/party-horn.svg";
        audioElem[0].src="/Lab5_Starter_rs-eh/assets/audio/party-horn.mp3";
        break;
      default:
        hornIcon.src="/Lab5_Starter_rs-eh/assets/images/no-image.png";
    }

  });

  // slider configuration
  document.getElementById("volume").addEventListener('input', function() {

    const volumeIcon = document.querySelector("img[alt='Volume level 2']");
    const audioElem = document.getElementsByClassName("hidden");
    const value = parseInt(this.value);

    if(value == 0){
      volumeIcon.src="/Lab5_Starter_rs-eh/assets/icons/volume-level-0.svg";
    }
    else if(value > 0 && value < 33){
      volumeIcon.src="/Lab5_Starter_rs-eh/assets/icons/volume-level-1.svg";
    }
    else if(value >= 33 && value < 67){
      volumeIcon.src="/Lab5_Starter_rs-eh/assets/icons/volume-level-2.svg";
    }
    else if(value >= 67){
      volumeIcon.src="/Lab5_Starter_rs-eh/assets/icons/volume-level-3.svg";
    }

    audioElem[0].volume = (value / 100);

  })

  // button configuration
  document.querySelector("button").addEventListener('click', function() {
    const audioElem = document.getElementsByClassName("hidden");
    const selectedElem = document.getElementById("horn-select");

    if(selectedElem.value == "party-horn"){
      jsConfetti.addConfetti();
    }

    audioElem[0].play();

  });

}
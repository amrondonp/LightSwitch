const playAudio = () => {
  const audio = document.getElementById("toggleSound");
  audio.play();
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 150);
};

function newCodeOrSwitchesSet() {
  try {
    computeLightState();
    alert("Change made successfully");
  } catch (error) {
    alert(
      "Error, please make sure your light routine is correct you have an error in your function" +
        error
    );
  }
}

renderUI();

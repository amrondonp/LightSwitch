const toggleSwitchWithAudioAndRendering = (name) => {
  toggleSwitch(name);
  playAudio();
  renderUI();
};

const setNumberOfSwitches = () => {
  const numberOfSwitches = parseInt(
    document.getElementById("numberOfSwitchesInput").value
  );

  if (isNaN(numberOfSwitches) || numberOfSwitches <= 0) {
    alert("Please enter a number > 0");
    return;
  }

  updateTheNumberOfSwitches(numberOfSwitches);
  renderUI();
};

const updateCode = () => {
  const code = document.getElementById("logic").value;
  updateLogic(code);
  renderUI();
};

document
  .getElementById("setNumberOfSwitchesButton")
  .addEventListener("click", setNumberOfSwitches);

document
  .getElementById("updateCodeButton")
  .addEventListener("click", updateCode);

document.getElementById("root").addEventListener("keydown", (event) => {
  const name = event.key.toLocaleLowerCase();
  toggleSwitchWithAudioAndRendering(name);
});

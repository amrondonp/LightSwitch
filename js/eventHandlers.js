const toggleSwitch = (name) => {
  const switchObj = appState.switches.filter(
    (s) => s.name.toLocaleLowerCase() === name
  )[0];

  if (!switchObj) {
    return;
  }

  switchObj.state = !switchObj.state;

  computeLightState();
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

  appState.switches = [];

  for (let i = 0; i < numberOfSwitches; i++) {
    appState.switches.push({
      state: false,
      name: String.fromCharCode(65 + i),
    });
  }

  newCodeOrSwitchesSet();
  renderUI();
};

const updateCode = () => {
  const code = document.getElementById("logic").value;
  computeLightState = new Function(code);
  newCodeOrSwitchesSet();
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
  toggleSwitch(name);
});

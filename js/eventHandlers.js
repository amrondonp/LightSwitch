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

const appState = {
  isLightOn: false,
  switches: [
    { name: "A", state: false },
    { name: "B", state: false },
  ],
};

let computeLightState = () => {
  const a = getSwitchState("A");
  const b = getSwitchState("B");

  if (xor(a, b)) {
    turnOn();
  } else {
    turnOff();
  }
};

const toggleSwitch = (switchName) => {
  const switchObj = findSwitchByName(switchName);

  if (!switchObj) {
    return;
  }

  switchObj.state = !switchObj.state;
  computeLightState();
};

const updateLogic = (code) => {
  computeLightState = new Function(code);
  try {
    computeLightState();
    alert("The new logic executed successfully");
  } catch (error) {
    alert(
      "Error, please make sure your logic is correct you have the following error in your function " +
        error
    );
  }
};

const updateTheNumberOfSwitches = (numberOfSwitches) => {
  appState.switches = [];

  for (let i = 0; i < numberOfSwitches; i++) {
    appState.switches.push({
      state: false,
      name: String.fromCharCode(65 + i),
    });
  }

  try {
    computeLightState();
    alert("Changed the number switches successfully");
  } catch (error) {
    alert(
      "Error in the logic, this may be caused because the logic is referencing a switch that no longer exists " +
        error
    );
  }
};

const xor = (a, b) => {
  return Boolean(a ^ b);
};

const getSwitchState = (name) => {
  return findSwitchByName(name).state;
};

const turnOn = () => {
  appState.isLightOn = true;
};

const turnOff = () => {
  appState.isLightOn = false;
};

const findSwitchByName = (name) => {
  return appState.switches.filter(
    (s) => s.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  )[0];
};

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
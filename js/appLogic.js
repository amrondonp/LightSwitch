const appState = {
  isLightOn: false,
  switches: [
    { name: "A", state: false },
    { name: "B", state: false },
  ],
};

const computeLightState = () => {
  const a = getSwitchState("A");
  const b = getSwitchState("B");

  if (xor(a, b)) {
    turnOn();
  } else {
    turnOff();
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

const appState = {
  isLightOn: false,
  switches: [
    { name: "A", state: false },
    { name: "B", state: false },
    //{ name: "C", state: false },
    //{ name: "D", state: false },
  ],
};

const LightBulbComponent = () => {
  if (appState.isLightOn) {
    return `<img src="lightOn.png" width="200" height="300">`;
  } else {
    return `<img src="lightOff.png" width="200" height="300">`;
  }
};

const switchesComponent = () => {
  return `<table style="margin: auto;">
    <tr>
      ${appState.switches
        .map((switchObj) => `<th>${switchObj.name}</th>`)
        .join("")}
    </tr>
    <tr>
      ${appState.switches.map(switchComponent).join("")}
    </tr>
  </table>`;
};

const switchComponent = (switchObj, switchNumber) => {
  const switchImage = switchObj.state
    ? `<img src="switchOn.png" width="65" height="100" onclick="toggleSwitch('${switchObj.name.toLocaleLowerCase()}')">`
    : `<img src="switchOff.png" width="65" height="100" onclick="toggleSwitch('${switchObj.name.toLocaleLowerCase()}')">`;
  return `<td><div style="padding: 5">${switchImage}</div></td>`;
};

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
  render();
};

const playAudio = () => {
  const audio = document.getElementById("toggleSound");
  audio.play();
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 150);
};

const xor = (a, b) => {
  return Boolean(a ^ b);
};

function computeLightState() {
  const a = appState.switches[0].state;
  const b = appState.switches[1].state;

  if (xor(a, b)) {
    appState.isLightOn = true;
  } else {
    appState.isLightOn = false;
  }
}

document.addEventListener("keydown", function (event) {
  const name = event.key.toLocaleLowerCase();
  toggleSwitch(name);
});

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

  console.log(appState);
  computeLightState();
  render();
};

const setLogic = () => {
  document.getElementById("logic").value = computeLightState.toString();
};

const App = () => {
  const light = LightBulbComponent();
  const switches = switchesComponent();
  const app = `${light}${switches}`;
  return app;
};

const render = () => {
  document.getElementById("root").innerHTML = App();
};

render();
setLogic();

const appState = {
  isLightOn: false,
  switches: [
    { name: "A", state: false },
    // { name: "B", state: false },
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
    ? `<img src="switchOn.png" width="65" height="100">`
    : `<img src="switchOff.png" width="65" height="100">`;
  return `<td><div style="padding: 5" onclick="toggleSwitch('${switchObj.name}')">${switchImage}</div></td>`;
};

const toggleSwitch = (name) => {
  const switchObj = appState.switches.filter((s) => s.name === name)[0];
  switchObj.state = !switchObj.state;

  computeLightState();
  render();
};

const computeLightState = () => {
  const a = appState.switches[0].state;

  if(a) {
    appState.isLightOn = true;
  } else {
    appState.isLightOn = false;
  }
}

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

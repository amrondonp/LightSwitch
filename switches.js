const appState = {
  isLightOn: false,
  switches: [{name: "A", state: false}],
};

const LightBulbComponent = () => {
  if (appState.isLightOn) {
    return `<img src="lightOn.png" width="230" height="300">`;
  } else {
    return `<img src="lightOff.png" width="200" height="300">`;
  }
};

const switchesComponent = () => {
  return `<table style="margin: auto;">
    <tr>
      ${appState.switches.map((switchObj) => `<th>${switchObj.name}</th>`).join("")}
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
  return `<td><div style="padding: 5">${switchImage}</div></td>`;
};

const App = () => {
  const light = LightBulbComponent();
  const switches = switchesComponent();
  const app = `${light}${switches}`;
  console.log(app);
  return app;
};

document.getElementById("root").innerHTML = App();

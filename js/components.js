const LightBulbComponent = () => {
  if (appState.isLightOn) {
    return `<img src="images/lightOn.png" width="200" height="300">`;
  } else {
    return `<img src="images/lightOff.png" width="200" height="300">`;
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
    ? `<img src="images/switchOn.png" width="65" height="100" onclick="toggleSwitch('${switchObj.name.toLocaleLowerCase()}')">`
    : `<img src="images/switchOff.png" width="65" height="100" onclick="toggleSwitch('${switchObj.name.toLocaleLowerCase()}')">`;
  return `<td><div style="padding: 5">${switchImage}</div></td>`;
};

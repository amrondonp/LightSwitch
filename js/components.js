const LIGHT_ON_IMAGE_URL = "images/lightOn.png";
const LIGHT_OFF_IMAGE_URL = "images/lightOff.png";

const SWITCH_ON_IMAGE_URL = "images/switchOn.png";
const SWITCH_OFF_IMAGE_URL = "images/switchOff.png";

const LightBulbComponent = () => {
  if (appState.isLightOn) {
    return `<img src="${LIGHT_ON_IMAGE_URL}" width="200" height="300">`;
  } else {
    return `<img src="${LIGHT_OFF_IMAGE_URL}" width="200" height="300">`;
  }
};

const switchesComponent = () => {
  return `<table class="switches-table">
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
  const onClickHandlerHtml = `toggleSwitch('${switchObj.name.toLocaleLowerCase()}')`;

  const switchImage = switchObj.state
    ? `<img src="${SWITCH_ON_IMAGE_URL}" width="65" height="100" onclick="${onClickHandlerHtml}">`
    : `<img src="${SWITCH_OFF_IMAGE_URL}" width="65" height="100" onclick="${onClickHandlerHtml}">`;

  return `<td><div class="switch">${switchImage}</div></td>`;
};

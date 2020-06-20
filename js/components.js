const LIGHT_ON_IMAGE_URL = "images/lightOn.png";
const LIGHT_OFF_IMAGE_URL = "images/lightOff.png";

const SWITCH_ON_IMAGE_URL = "images/switchOn.png";
const SWITCH_OFF_IMAGE_URL = "images/switchOff.png";

const LightBulbComponent = () => {
  if (appState.isLightOn) {
    return `<img class="bulb-image" src="${LIGHT_ON_IMAGE_URL}">`;
  } else {
    return `<img class="bulb-image" src="${LIGHT_OFF_IMAGE_URL}">`;
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

const switchComponent = (switchObj) => {
  const onClickHandlerHtml = `toggleSwitch('${switchObj.name.toLocaleLowerCase()}')`;

  const switchImage = switchObj.state
    ? `<img class="switch-image" src="${SWITCH_ON_IMAGE_URL}" onclick="${onClickHandlerHtml}">`
    : `<img class="switch-image" src="${SWITCH_OFF_IMAGE_URL}" onclick="${onClickHandlerHtml}">`;

  return `<td><div class="switch">${switchImage}</div></td>`;
};

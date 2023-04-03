import { DateTime } from "./modules/luxon.js";
function getTime() {
  const currentTime = document.getElementById('currentTime');
  currentTime.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}
setInterval(getTime, 1000);
import { DateTime } from './modules/luxon.js';
import BookList from './modules/booklist.js';

function getTime() {
  const currentTime = document.getElementById('currentTime');
  currentTime.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}
setInterval(getTime, 1000);
const bookList = new BookList();
bookList();

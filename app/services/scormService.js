import { SCORM } from 'pipwerks-scorm-api-wrapper';
import store from '../store/store';
import getLocation from 'services/getLocation';

SCORM.init();

let savedData = SCORM.get('cmi.suspend_data');
if (savedData !== 'null' && savedData !== '') {
  savedData = JSON.parse(savedData);
} else {
  savedData = {
    pagesComplete: []
  };
}

const lessonLocation = SCORM.get('cmi.core.lesson_location');

window.addEventListener('hashchange', () => setLessonLocation(getLocation()));

function setLessonLocation(location) {
 if (location !== '/') {
   SCORM.set('cmi.core.lesson_location', location);
   SCORM.save();
 }
}

function getLessonLocation() {
  return lessonLocation;
}

function setPageComplete() {
  const page = getLocation();
  const pagesComplete = [...savedData.pagesComplete];
  if (pagesComplete.indexOf(page) < 0) pagesComplete.push(page);
  setTimeout(() => (
    store.dispatch({
      type: 'UPDATE_COMPLETED_PAGES',
      data: pagesComplete
    })
  ), 0);
  updateSuspendData({
    pagesComplete
  });
  return true;
}

function getPagesComplete() {
  return savedData.pagesComplete;
}

function setScore(score) {
  SCORM.set('cmi.core.score.raw', score);
}

function setModuleComplete() {
  SCORM.set('cmi.core.lesson_status', 'completed');
  SCORM.save();
}

function updateSuspendData(data) {
  // console.clear();
  savedData = Object.assign({}, savedData, data);
  // console.log('savedData :', JSON.stringify(savedData));
  SCORM.set('cmi.suspend_data', JSON.stringify(savedData));
  SCORM.save();
}

// SCORM.quit();

export {
  getLessonLocation,
  setPageComplete,
  getPagesComplete,
  setScore,
  setModuleComplete
};

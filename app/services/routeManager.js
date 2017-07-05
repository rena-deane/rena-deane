/* globals window */
import routesConfig from 'config/routesConfig';
import getLocation from 'services/getLocation';
import { getPagesComplete } from 'services/scormService';

const SUBPAGES = 'subPages';
const allPaths = getAllPaths();
let routeOverrideBackPath = '';
let routeOverrideNextPath = '';

window.addEventListener('hashchange', () => {
  routeOverrideBackPath = '';
  routeOverrideNextPath = '';
});

function checkIfTopicComplete(topic) {
  const pagesInTopic = Object.keys(routesConfig[topic]);
  const pagesCompleteInTopic = getPagesComplete().filter((page) => pagesInTopic.indexOf(page) > -1);
  return pagesCompleteInTopic.length === pagesInTopic.length;
}

function getCurrentPathIndex() {
  return allPaths.indexOf(getLocation());
}

function getConfig() {
  // this is just for ' convenience '. can be gotten from the routesConfig.js file too
  return routesConfig;
}

function getAllPaths() {
  const paths = [];
  Object.keys(routesConfig).forEach((topic) => {
    Object.keys(routesConfig[topic]).forEach(path => paths.push(path));
  });
  return paths;
}

function getAllTopics(keyName) {
  const result = Object.keys(routesConfig);
  return result.filter(topic => topic !== (keyName || 'subPages'));
}

function getPrev(nav = false) {
  const prevPath = (routeOverrideBackPath && routeOverrideBackPath !== getLocation())
  ? routeOverrideBackPath
  : allPaths[getCurrentPathIndex() - 1];
  if (prevPath) {
    if (prevPath && nav === true) window.location.hash = prevPath;
  }
  return prevPath;
}

function getNext(nav = false) {
  const nextPath = (routeOverrideNextPath && routeOverrideNextPath !== getLocation())
  ? routeOverrideNextPath
  : allPaths[getCurrentPathIndex() + 1];
  if (nextPath) {
    if (nav === true) window.location.hash = nextPath;
  }
  return nextPath;
}

function routeOverrideBack(path) {
  routeOverrideBackPath = path;
}

function routeOverrideNext(path) {
  routeOverrideNextPath = path;
}

function getComponentFromPath(currentPath) {
  // will refactor out to use a method eslint prefers
  for (const topic in routesConfig) {
    if (routesConfig[topic].hasOwnProperty(currentPath)) return routesConfig[topic][currentPath];
  }
  return null;
}

function getTopicFromPath(currentPath) {
  // will refactor out to use a method eslint prefers
  for (const topic in routesConfig) {
    for (const path in routesConfig[topic]) {
      if (path === currentPath) return topic;
    }
  }
  return null;
}

function getCompletePercentage() {
  const length = allPaths.length - 1;

  return (getCurrentPathIndex() / length) * 100;
}

function goToLocation(hash) {
  window.location.hash = hash;
}

function goToTopic(topic) {
  const pages = Object.keys(routesConfig[topic]);
  const nextPath = pages[0];

  goToLocation(nextPath);
}

export default {
  checkIfTopicComplete,
  getConfig,
  getAllPaths,
  getAllTopics,
  getPrev,
  getNext,
  routeOverrideBack,
  routeOverrideNext,
  getComponentFromPath,
  getCompletePercentage,
  getTopicFromPath,
  goToTopic,
};

export {
  checkIfTopicComplete,
  getConfig,
  getAllPaths,
  getAllTopics,
  getPrev,
  getNext,
  routeOverrideBack,
  routeOverrideNext,
  getComponentFromPath,
  getCompletePercentage,
  getTopicFromPath,
  goToTopic,
};

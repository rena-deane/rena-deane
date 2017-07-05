function getLocation() {
  return window.location.hash.replace(/#|\//g, '');
}

export default getLocation;

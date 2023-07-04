/* eslint-disable */
export default function cleanSet(setArg, startString) {
  const arr = [...setArg];
  let abridgedArr = [];
  const startStringLen = startString.length;

  if (startString === undefined || startString.length === 0) {
    return '';
  }
  abridgedArr = arr
    .filter(el => (el !== undefined ? el.startsWith(startString) : ''))
    .map(el => (el !== undefined ? el.slice(startStringLen) : ''))
    .join('-');

  return abridgedArr;
}

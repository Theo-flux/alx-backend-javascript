/* eslint-disable */
export default function cleanSet(setArg, startString) {
  const arr = [...setArg];
  const abridgedArr = [];
  const startStringLen = startString.length;

  if (startStringLen === 0) {
    return abridgedArr.join('-');
  }
  arr.map((el, index) => {
    if (el.slice(0, startStringLen) === startString) {
      abridgedArr[index] = el.slice(startStringLen);
    }
  });
  return abridgedArr.join('-');
}

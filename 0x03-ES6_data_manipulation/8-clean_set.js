export default function cleanSet(setArg, startString) {
  const arr = [...setArg];
  const startStrLen = startString.length;

  if (startString === undefined || startStrLen === 0) {
    return '';
  }
  return arr
    .filter((el) => (el !== undefined ? el.slice(0, startStrLen) : ''))
    .map((el) => (el !== undefined ? el.slice(startStrLen) : ''))
    .join('-');
}

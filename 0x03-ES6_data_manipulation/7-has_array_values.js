export default function hasValuesFromArray(setArg, arrArg) {
  const arrToSet = new Set(arrArg);
  let flag = true;

  for (const el of arrToSet) {
    if (!setArg.has(el)) {
      flag = false;
      break;
    }
  }

  return flag;
}

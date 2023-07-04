export default function updateUniqueItems(mapArg) {
  if (!(mapArg instanceof Map)) throw new Error('Cannot process');

  for (let [key, value] of mapArg) {
    if (value === 1) {
      mapArg.set(key, 100);
    }
  }

  return mapArg;
}

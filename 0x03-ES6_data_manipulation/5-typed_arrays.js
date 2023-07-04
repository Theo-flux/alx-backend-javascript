export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position > length - 1) {
    throw new Error('Position outside range');
  }

  const int8View = new ArrayBuffer(length, position, value);

  return int8View;
}

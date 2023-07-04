export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position > length - 1) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer, 0, length);
  int8View[position] = value;

  return new DataView(buffer);
}

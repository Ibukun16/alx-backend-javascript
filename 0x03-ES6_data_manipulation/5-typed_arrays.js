export default function createInt8TypedArray(length, position, value) {
  if (length <= 0) {
    throw new Error('Length must be a positive number');
  }

  const buffer = new DataView(new ArrayBuffer(length), 0, length);
  const int8Array = new Int8Array(buffer);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  buffer.setInt8(position, value);
  return buffer;
}

export default function setFromArray(array) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }

  return new Set(array);
}

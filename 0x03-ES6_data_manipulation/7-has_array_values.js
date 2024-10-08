export default function hasValuesFromArray(set, array) {
  if (!(set instanceof Set)) {
    throw new Error('First argument must be a set');
  }

  if (!Array.isArray(array)) {
    throw new Error('Second argumrnt must be an array');
  }

  return array.every((element) => set.has(element));
}

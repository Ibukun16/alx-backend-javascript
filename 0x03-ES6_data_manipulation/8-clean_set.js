export default function cleanSet(set, startString) {
  if (
    !set ||
    !startString ||
    !(set instanceof Set) ||
    typeof startString !== 'string'
  ) {
    return '';
  }

  const result = Array.from(set)
    .filter((value) =>
      value !== undefined ? value.startsWith(startString) : '',
    )
    .map((value) =>
      value !== undefined ? value.slice(startString.length) : '',
    );

  return result.join('-');
}

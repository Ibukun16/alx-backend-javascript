export default function iterateThroughObject(reportWithIterator) {
  const employeeName = [];

  for (const employee of reportWithIterator) {
    employeeName.push(employee);
  }
  return employeeName.join(' | ');
}

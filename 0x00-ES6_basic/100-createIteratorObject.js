export default function createIteratorObject(report) {
  const employees = [];

  for (const deptEmployees of Object.values(report.allEmployees)) {
    employees.push(...deptEmployees);
  }
  return employees;
}

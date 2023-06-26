export default function createIteratorObject(report) {
  const { allEmployees } = report;
  return [...allEmployees.engineering, ...allEmployees.marketing];
}

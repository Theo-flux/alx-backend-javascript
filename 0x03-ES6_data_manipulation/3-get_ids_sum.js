export default function getStudentIdsSum(arr) {
  return arr.reduce((aggr, el) => {
    return (aggr += el.id);
  }, 0);
}

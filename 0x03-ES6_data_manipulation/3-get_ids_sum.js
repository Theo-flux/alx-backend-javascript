/* eslint-disable */
export default function getStudentIdsSum(arr) {
  return arr.reduce((aggr, el) => {
    aggr += el.id;
    return aggr;
  }, 0);
}

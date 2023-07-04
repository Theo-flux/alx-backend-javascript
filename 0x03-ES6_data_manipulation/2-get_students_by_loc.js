export default function getStudentsByLocation(arr, arg) {
  return arr.filter((el) => el.location === arg);
}

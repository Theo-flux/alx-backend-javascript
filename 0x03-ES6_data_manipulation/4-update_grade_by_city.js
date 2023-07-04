export default function updateStudentGradeByCity(arr, arg, update) {
  const newArr = arr.filter(el => el.location == arg);

  newArr.map(el => {
    update.map(u => {
      if (u.studentId == el.id) el.grade = u.grade;
    });
  });

  newArr.map(el => {
    if (!el.grade) el.grade = 'N/A';
  });

  return newArr;
}

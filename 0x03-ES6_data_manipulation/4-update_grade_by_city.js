/* eslint-disable no-unused-vars */
import getListStudents from './0-get_list_students';

export default function updateStudentGradeByCity(arr, city, newGrades) {
  const filterIt = arr.filter((studs) => studs.location === city);
  const mapIt = filterIt.map((studsInSan) => {
    const grades = newGrades.find((GRADE) => GRADE.studentId === studsInSan.id);
    return {
      ...studsInSan, grade: grades ? grades.grade : 'N/A',
    };
  });
  return mapIt;
}

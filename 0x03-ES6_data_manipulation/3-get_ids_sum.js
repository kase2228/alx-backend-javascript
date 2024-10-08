/* eslint-disable no-unused-vars */
import getListStudents from './0-get_list_students';

export default function getStudentIdsSum(arr) {
  const idSum = arr.reduce((accumlator, studs) => accumlator + studs.id, 0);
  return idSum;
}

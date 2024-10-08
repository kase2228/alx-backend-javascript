/* eslint-disable no-unused-vars */
import getListStudents from './0-get_list_students';

export default function getStudentsByLocation(arr, city) {
  const byLocation = arr.filter((Studs) => Studs.location === city);
  return byLocation;
}

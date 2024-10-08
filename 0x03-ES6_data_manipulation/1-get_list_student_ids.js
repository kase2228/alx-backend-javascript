/* eslint-disable no-unused-vars */
import getListStudents from './0-get_list_students';

export default function getListStudentIds(arr) {
  if (Array.isArray(arr) !== true) {
    return [];
  }
  const Ids = arr.map((studList) => studList.id);

  return Ids;
}

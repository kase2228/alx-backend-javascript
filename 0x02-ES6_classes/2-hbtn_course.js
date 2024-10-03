export default class HolbertonCourse {
    constructor(name, length, students) {
      
      if (typeof name !== 'string') {
        throw new TypeError("Name must be a string");
      }

      if (typeof length !== 'number') {
        throw new Error("Expected 'length' to be a number");
      }

      if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
        throw new Error("Expected 'students' to be an array of strings");
      }

      this._name = name;
      this._length = length;
      this._students = students;
    }

    get name() {
        return this._name;
    }

    get length() {
        return this._length;
    }

    get students() {
        return this._students;
    }

    set name(Name) {
        this._name = Name;
    }

    set length(Length) {
        this._length = Length;
    }

    set students(Students) {
        this._students = Students;
    }
  }
  

 
  
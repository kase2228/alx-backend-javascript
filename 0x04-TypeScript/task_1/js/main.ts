//task 2
interface Teacher {
    readonly firstName: string; 
    readonly lastName: string;  
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; 
    location: string;
    [propName: string]: any;   
  }

  interface Directors extends Teacher {
    numberOfReports: number; 
  }
//task 3
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  
  const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };

// task 4
  interface StudentClassConstructor {
    firstName: string;
    lastName: string;
  }
  
  // Interface for the class
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Implement the class
  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
  
    constructor({ firstName, lastName }: StudentClassConstructor) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    // Method that returns a string
    workOnHomework(): string {
      return 'Currently working';
    }
  
    // Method that returns the firstName
    displayName(): string {
      return this.firstName;
    }
  }
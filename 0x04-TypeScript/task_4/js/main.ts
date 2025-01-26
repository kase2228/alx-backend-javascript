// main.ts
import { Cpp } from './subjects/Cpp'; // Adjust the import paths as necessary
import { Java } from './subjects/Java'; // Adjust the import paths as necessary
import { React } from './subjects/React'; // Adjust the import paths as necessary
import { Teacher } from './subjects/Teacher'; // Adjust the import paths as necessary

// Create and export constants for the subjects
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Create and export the Teacher object
export const cTeacher: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10, // Assuming experienceTeachingC is part of the interface
};

// For Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

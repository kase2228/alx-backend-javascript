namespace Subjects {
    // Using declaration merging to add the experienceTeachingC property
    export interface Teacher {
        experienceTeachingC?: number; // Optional property
    }

    export class Cpp extends Subject {
        public getRequirements(): string {
            return "Here is the list of requirements for Cpp";
        }

        public getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingC === undefined || this.teacher.experienceTeachingC === 0) {
                return "No available teacher";
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
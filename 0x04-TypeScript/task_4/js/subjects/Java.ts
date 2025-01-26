namespace Subjects {
    // Using declaration merging to add the experienceTeachingJava property
    export interface Teacher {
        experienceTeachingJava?: number; // Optional property
    }

    export class Java extends Subject {
        public getRequirements(): string {
            return "Here is the list of requirements for Java";
        }

        public getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingJava === undefined || this.teacher.experienceTeachingJava === 0) {
                return "No available teacher";
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
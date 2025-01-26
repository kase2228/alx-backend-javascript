namespace Subjects {
    // Using declaration merging to add the experienceTeachingReact property
    export interface Teacher {
        experienceTeachingReact?: number; // Optional property
    }

    export class React extends Subject {
        public getRequirements(): string {
            return "Here is the list of requirements for React";
        }

        public getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingReact === undefined || this.teacher.experienceTeachingReact === 0) {
                return "No available teacher";
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
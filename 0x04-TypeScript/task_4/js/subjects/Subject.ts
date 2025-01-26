namespace Subjects {
    export class Subject {
        protected teacher!: Teacher; // Using ! to indicate it will be assigned later

        public setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}
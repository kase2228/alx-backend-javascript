//task_5
// DirectorInterface with the expected methods
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// TeacherInterface with the expected methods
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
    
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// createEmployee function that returns either Director or Teacher based on salary
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

//task_6
// Type predicate function to check if the employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

// Function to execute work based on the type of employee
function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

//task_7
// String literal type for Subjects
type Subjects = "Math" | "History";

// Function to teach a class based on the todayClass argument
function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else if (todayClass === "History") {
        return "Teaching History";
    }
    // This return statement will never be reached due to the type constraint
    return ""; // Just to satisfy TypeScript's requirement
}

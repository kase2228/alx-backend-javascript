interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const stud1: Student = {
    firstName: "kase",
    lastName: "man",
    age: 12,
    location: "Addis Ababa",
}

const stud2: Student = {
    firstName: "kebede",
    lastName: "ayele",
    age: 22,
    location: "Addis Ababa",
}

const studentsList: Student[] = [stud1, stud2];

function renderTable(students: Student[]): void {
    const table: HTMLTableElement = document.createElement('table');
    const thead: HTMLTableSectionElement = document.createElement('thead');
    const tbody: HTMLTableSectionElement = document.createElement('tbody');

    const headerRow: HTMLTableRowElement = document.createElement('tr');
    const header1: HTMLTableCellElement = document.createElement('th');
    const header2: HTMLTableCellElement = document.createElement('th');
    header1.textContent = 'First Name';
    header2.textContent = 'Location';
    headerRow.appendChild(header1);
    headerRow.appendChild(header2);
    thead.appendChild(headerRow);

    students.forEach((student: Student) => {
        const row: HTMLTableRowElement = document.createElement('tr');
        
        const firstNameCell: HTMLTableCellElement = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);
        
        const locationCell: HTMLTableCellElement = document.createElement('td');
        locationCell.textContent = student.location;
        row.appendChild(locationCell);

        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    document.body.appendChild(table);
}

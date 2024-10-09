export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Iyenimofe",
    lastName: "Balsam",
    age: 5,
    location: "Amikanle"
};

const student2: Student = {
    firstName: "Momore-Jah",
    lastName: "Gilead",
    age: 2,
    location: "Command"
};

const studentList: Student[] = [student1, student2];
const styleSheet = 
html {
    margin: 0;
    height: 100%;
}
body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
}
table {
    border-collapse: collapse;
}
thead {
    font-weight: bold;
}
td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
}
td:hover {
    background: gainsboro;
}
td:nth-child(1) {
    text-align: center;
}
;

export const displayStudents = (students: Student[]): void => {
    const studentsTable = document.createElement('table');
    const tableHead = document.createElement('thead');
    const headRow = document.createElement('tr');
    const tableBody = document.createElement('tbody');
    headRow.insertAdjacentHTML('beforeend', '<td>First Name</td>');
    headRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
    tableHead.insertAdjacentHTML('beforeend', headRow);

    for (const student of students) {
        const bodyRow = document.createElement('tr');
        bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
        bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
        tableBody.insertAdjacentElement('beforeend', bodyRow);
    }

    studentsTable.insertAdjacentElement('beforeend', tableHead);
    studentsTable.insertAdjacentElement('beforeend', tableBody);
    document.body.insertAdjacentElement('beforeend', studentsTable);
};

displayStudents(studentList);
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Task 0';

//<!DOCTYPE html>
//<html lang="en">
//<head>
    //<meta charset="UTF-8">
    //<meta name="viewport" content="width=device-width, initial-scale=1.0">
    //<title>Student List</title>
//</head>
//<body>
    //<table id="studentsTable" border="1">
        //<thead>
            //<tr>
                //<th>First Name</th>
                //<th>Location</th>
            //</tr>
        //</thead>
        //<tbody>
        //</tbody>
    //</table>

    //<script>

        //const studentList = [
            //{ firstName: "Iyenimofe", lastName: "Balsam", age: 5, location: "Amikanle" },
            //{ firstName: "Momore-Jah", lastName: "Gilead", age: 2, location: "Command" }
        //];

        //const tableBody = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];

        //studentsList.forEach((student) => {
            //const row = document.createElement('tr');
        
            //const firstNameCell = document.createElement('td');
            //firstNameCell.textContent = student.firstName;
    
           // const locationCell = document.createElement('td');
            //locationCell.textContent = student.location;
    
            //row.appendChild(firstNameCell);
            //row.appendChild(locationCell);
            //tableBody.appendChild(row);
        //});
    //</script>
//</body>
//</html>

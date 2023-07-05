interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: 'Theo',
  lastName: 'Phil',
  age: 24,
  location: 'Nigeria',
};

const studentTwo: Student = {
  firstName: 'Billie',
  lastName: 'Eli',
  age: 20,
  location: 'Canada',
};

const studentList: Array<Student> = [studentOne, studentTwo];

const border: string = '1px solid gray';
const padding: string = '0.5rem';

const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
const h1: HTMLHeadingElement = document.createElement('h1');
const table: HTMLTableElement = document.createElement('table');
const thOne: HTMLTableCellElement = document.createElement('th');
const thTwo: HTMLTableCellElement = document.createElement('th');
const tr: HTMLTableRowElement = document.createElement('tr');

table.style.border = border;
tr.style.padding = padding;

thOne.innerHTML = 'FirstName';
thTwo.innerHTML = 'Location';

tr.append(thOne);
tr.append(thTwo);

table.append(tr);

studentList.forEach(student => {
  const tDataRow: HTMLTableRowElement = document.createElement('tr');
  const tdFN: HTMLTableCellElement = document.createElement('td');
  const tdLO: HTMLTableCellElement = document.createElement('td');

  tDataRow.style.padding = padding;

  tdFN.innerHTML = `${student.firstName}`;
  tdLO.innerHTML = `${student.location}`;

  tDataRow.append(tdFN);
  tDataRow.append(tdLO);

  table.append(tDataRow);
});

body.appendChild(table);

interface DirectorInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workDirectorTasks: () => string;
}

interface TeacherInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workTeacherTasks: () => string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return 'working from home';
  }

  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }

  getCoffeeBreak() {
    return 'Cannot have a break';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else if (typeof salary === 'string') {
    salary = parseInt(salary.slice(1));
    console.log(salary);

    if (salary < 500) {
      return new Teacher();
    }
  }

  return new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

function isDirector(employee: Director | Teacher): boolean {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): string {
  if (employee instanceof Teacher) {
    return employee.workTeacherTasks();
  }
  return employee.workDirectorTasks();
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

function teachClass(subject: 'Math' | 'History'): string {
  if (subject === 'Math') return `Teaching ${subject}`;
  return `Teaching ${subject}`;
}

console.log(teachClass('Math'));
console.log(teachClass('History'));

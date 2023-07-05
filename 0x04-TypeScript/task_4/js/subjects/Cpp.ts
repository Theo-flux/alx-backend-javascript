/// <reference path='Teacher.ts'/>
/// <reference path='Subject.ts'/>

namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements() {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher() {
      if (this.teacher?.experienceTeachingC) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }

      return `No available teacher`;
    }
  }
}

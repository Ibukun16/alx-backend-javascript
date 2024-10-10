export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

export interface MyStudentClassConstructor {
  new (firstName: string, lastName: string): MyStudentClass;
}

export interface MyStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements MyStudentClass {
  private _firstName!: string;
  private _lastName!: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this._firstName;
  }
}

export function createStudent(
  construtor: MyStudentClassConstructor,
  firstName: string,
  lastName: string,
): MyStudentClass {
  return new construtor(firstName, lastName);
}

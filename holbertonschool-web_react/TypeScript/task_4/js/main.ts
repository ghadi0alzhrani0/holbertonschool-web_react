/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

const cpp: Subjects.Cpp = new Subjects.Cpp();
const react: Subjects.React = new Subjects.React();
const java: Subjects.Java = new Subjects.Java();
const teacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 2,
};

cpp.setTeacher = teacher;
react.setTeacher = teacher;
java.setTeacher = teacher;
console.log(cpp.getRequirements(), cpp.getAvailableTeacher());
console.log(react.getRequirements(), react.getAvailableTeacher());
console.log(java.getRequirements(), java.getAvailableTeacher());

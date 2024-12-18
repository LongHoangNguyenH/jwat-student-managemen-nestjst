import { ClassEntity } from 'src/classes/entities/class.entity';
import { listClasses, listStudents } from 'src/data/data';
import { StudentEntity } from 'src/students/entities/student.entity';

const findClassById = (classId: number): ClassEntity => {
  const foundclass = listClasses.find(cls => cls.getClassId == classId);
  return foundclass;
};

const ContainsSpecificSpecialChars = (str: string): boolean => {
  const allowedChars = /^[a-zA-Z0-9_\.]+$/;
  return !allowedChars.test(str);
};

const FindClassbyName = (className: string): ClassEntity => {
  return listClasses.find(cls => cls.getClassName == className);
};

const FindStudentById = (studentId: number): StudentEntity => {
  return listStudents.find(student => student.getStudentId() == studentId);
};

const FindStudentByName = (studentName: string): StudentEntity => {
  return listStudents.find(student => student.getStudentName() == studentName);
};

const FindIndexStudentById = (studentId: number): number => {
  return listStudents.findIndex(student => student.getStudentId() == studentId);
};

export {
  FindIndexStudentById,
  ContainsSpecificSpecialChars,
  FindClassbyName,
  findClassById,
  FindStudentById,
  FindStudentByName,
};

import { ClassEntity } from 'src/classes/entities/class.entity';
import { listClasses, listStudents } from 'src/data/data';
import { StudentEntity } from 'src/students/entities/student.entity';

const findClassById = (classId: number): ClassEntity => {
  return listClasses.find(cls => cls.getClassId == classId);
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

const DeleteStudentById = (studentId: number): StudentEntity[] => {
  const index = FindIndexStudentById(studentId);
  return listStudents.splice(index, 1);
};

const FindStudentsByClassname = (className: string): StudentEntity[] => {
  return listStudents.filter(student => student.getClassName() == className);
};

const Find_LIKE_StudentsByName = (studentName: string): StudentEntity[] => {
  return listStudents.filter(student => student.getStudentName().toLowerCase().includes(studentName.toLowerCase()));
};

const updateClassbyId = (classId: number, className: string): ClassEntity => {
  const index = listClasses.findIndex(cls => cls.getClassId == classId);
  const currentName = listClasses[index].getClassName;
  if (listStudents.length > 0) {
    listStudents.forEach(student => {
      if (student.className == currentName) {
        student.setClassName(className);
      }
    });
  }
  listClasses[index].setClassName(className);
  return listClasses[index];
};

const DeleteClassById = (classId: number): ClassEntity[] => {
  const index = listClasses.findIndex(cls => cls.getClassId == classId);
  return listClasses.splice(index, 1);
};

export {
  FindIndexStudentById,
  ContainsSpecificSpecialChars,
  FindClassbyName,
  findClassById,
  FindStudentById,
  FindStudentByName,
  DeleteStudentById,
  FindStudentsByClassname,
  Find_LIKE_StudentsByName,
  updateClassbyId,
  DeleteClassById,
};

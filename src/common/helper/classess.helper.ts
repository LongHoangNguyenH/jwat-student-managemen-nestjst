import { ClassEntity } from 'src/classes/entities/class.entity';
import { listClasses } from 'src/data/data';

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

export { ContainsSpecificSpecialChars, FindClassbyName, findClassById };

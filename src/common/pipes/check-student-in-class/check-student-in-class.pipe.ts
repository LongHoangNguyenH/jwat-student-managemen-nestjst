import { HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CLASS_EXISTS_STUDENT, CLASS_NOT_FOUND } from 'src/common/errors/constants.errors';
import { listClasses, listStudents } from 'src/data/data';

@Injectable()
export class CheckStudentInClassPipe implements PipeTransform {
  transform(value: any) {
    // query student exist in class
    const index = listClasses.findIndex(cls => cls.getClassId == value);
    if (index == -1) {
      throw new HttpException(CLASS_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    const className = listClasses[index].getClassName;
    const IsStudentInClass = listStudents.some(student => student.getClassName() == className);
    if (IsStudentInClass) throw new HttpException(CLASS_EXISTS_STUDENT, HttpStatus.BAD_REQUEST);
    return value;
  }
}

import { HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CLASS_NOT_FOUND, STUDENT_NOT_FOUND } from 'src/common/errors/constants.errors';
import { FindClassbyName, FindIndexStudentById } from 'src/common/helper/helper.helper';
import { listStudents } from 'src/data/data';

@Injectable()
export class UpdateStudentPipe implements PipeTransform {
  transform(value: { studentId: number; className: string; studentName: string }) {
    if (FindIndexStudentById(value.studentId) == -1) {
      throw new HttpException(STUDENT_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    const index = FindIndexStudentById(value.studentId);
    const currentStudent = listStudents[index];

    if (value.studentName == '') value.studentName = currentStudent.getStudentName();
    if (value.className == '') value.className = currentStudent.getClassName();

    if (!FindClassbyName(value.className)) {
      throw new HttpException(CLASS_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    return value;
  }
}

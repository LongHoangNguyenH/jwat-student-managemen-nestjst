import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CLASS_NOT_FOUND, STUDENT_NOT_FOUND } from 'src/common/errors/constants.errors';
import { FindClassbyName, FindIndexStudentById } from 'src/common/helper/classess.helper';

@Injectable()
export class UpdateStudentPipe implements PipeTransform {
  transform(value: { studentId: number; className: string; studentName: string }, metadata: ArgumentMetadata) {
    console.log(metadata);
    if (!FindClassbyName(value.className)) {
      throw new HttpException(CLASS_NOT_FOUND, HttpStatus.NOT_FOUND);
    } else if (FindIndexStudentById(value.studentId) == -1) {
      throw new HttpException(STUDENT_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    return value;
  }
}

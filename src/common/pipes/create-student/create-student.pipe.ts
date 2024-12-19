import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CLASS_NOT_FOUND, STUDENT_EXISTS } from 'src/common/errors/constants.errors';
import { FindClassbyName, FindStudentByName } from 'src/common/helper/helper.helper';

@Injectable()
export class CreateStudentPipe implements PipeTransform {
  transform(value: { studentName: string; className: string }, metadata: ArgumentMetadata) {
    console.log(metadata);
    console.log(value, value.className);
    if (FindStudentByName(value.studentName)) {
      throw new HttpException(STUDENT_EXISTS, HttpStatus.BAD_REQUEST);
    } else if (!FindClassbyName(value.className)) {
      throw new HttpException(CLASS_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    return value;
  }
}

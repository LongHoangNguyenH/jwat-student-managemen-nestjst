import { HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { STUDENT_NOT_FOUND } from 'src/common/errors/constants.errors';
import { FindStudentById } from 'src/common/helper/classess.helper';

@Injectable()
export class QueryStudentPipe implements PipeTransform {
  transform(value: any) {
    if (!FindStudentById(value)) {
      throw new HttpException(STUDENT_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    return value;
  }
}

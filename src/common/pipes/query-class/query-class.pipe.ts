import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CLASS_NOT_FOUND } from 'src/common/errors/constants.errors';
import { findClassById } from 'src/common/helper/classess.helper';

@Injectable()
export class QueryClassPipe implements PipeTransform<{ classId: number }, { classId: number }> {
  transform(value: { classId: number }, metadata: ArgumentMetadata) {
    console.log(metadata);
    console.log(typeof value.classId, value.classId, typeof value);
    if (!findClassById(value.classId)) {
      throw new HttpException(CLASS_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    return value;
  }
}

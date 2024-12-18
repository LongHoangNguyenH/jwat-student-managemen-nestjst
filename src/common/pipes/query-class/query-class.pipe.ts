import { HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CLASS_NOT_FOUND } from 'src/common/errors/constants.errors';
import { FindClassbyName } from 'src/common/helper/classess.helper';

@Injectable()
export class QueryClassPipe implements PipeTransform {
  transform(value: any) {
    if (!FindClassbyName(value)) {
      throw new HttpException(CLASS_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    return value;
  }
}

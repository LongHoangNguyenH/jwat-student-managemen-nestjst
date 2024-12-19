import { HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CLASS_NOT_FOUND } from 'src/common/errors/constants.errors';
import { findClassById, FindClassbyName } from 'src/common/helper/helper.helper';

@Injectable()
export class QueryClassPipe implements PipeTransform {
  transform(value: any) {
    console.log(value);
    console.log(findClassById(value), value, typeof value);
    if (FindClassbyName(value) == undefined && typeof value == 'string') {
      throw new HttpException(CLASS_NOT_FOUND, HttpStatus.NOT_FOUND);
    } else if (findClassById(value) == undefined && typeof value == 'number') {
      throw new HttpException(CLASS_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    return value;
  }
}

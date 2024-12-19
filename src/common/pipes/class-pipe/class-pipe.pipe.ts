import { HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CLASS_EXISTS } from 'src/common/errors/constants.errors';
import { listClasses } from 'src/data/data';

@Injectable()
export class ClassPipe implements PipeTransform {
  transform(value: { className: string }) {
    if (listClasses.find(c => c.className === value.className.toLocaleLowerCase())) {
      throw new HttpException(CLASS_EXISTS, HttpStatus.BAD_REQUEST);
    }
    return value;
  }
}

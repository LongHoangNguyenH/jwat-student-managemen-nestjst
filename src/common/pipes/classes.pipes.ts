import { PipeTransform, Injectable, ArgumentMetadata, HttpException, HttpStatus } from '@nestjs/common';
import { CLASS_EXISTS, CLASS_NAME_REQUIRED, CLASS_NAME_UNVALID } from '../errors/constants.errors';
import { ClassEntity } from 'src/classes/entities/class.entity';
import { listClasses } from 'src/data/data';

const ContainsSpecificSpecialChars = (str: string): boolean => {
  const allowedChars = /^[a-zA-Z0-9_\.]+$/;
  return !allowedChars.test(str);
};

const FindClass = (className: string): ClassEntity => {
  return listClasses.find(cls => cls.getClassName == className);
};
@Injectable()
export class ClassesPipe implements PipeTransform<{ className: string }> {
  transform(value: { className: string }, metadata: ArgumentMetadata) {
    console.log(metadata);
    if (!value.className) {
      throw new HttpException(CLASS_NAME_REQUIRED, HttpStatus.BAD_REQUEST);
    } else {
      if (ContainsSpecificSpecialChars(value.className))
        throw new HttpException(CLASS_NAME_UNVALID, HttpStatus.BAD_REQUEST);
      if (FindClass(value.className)) throw new HttpException(CLASS_EXISTS, HttpStatus.BAD_REQUEST);
    }
    // return value.className.toLowerCase().trim();
    return value;
  }
}

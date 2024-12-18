import { PipeTransform, Injectable, ArgumentMetadata, HttpException, HttpStatus } from '@nestjs/common';
import { CLASS_EXISTS, CLASS_NAME_REQUIRED, CLASS_NAME_UNVALID } from 'src/common/errors/constants.errors';
import { ContainsSpecificSpecialChars, FindClassbyName } from 'src/common/helper/classess.helper';

@Injectable()
export class ClassNamePipe implements PipeTransform<{ className: string }> {
  transform(value: { className: string }, metadata: ArgumentMetadata) {
    console.log(metadata);
    console.log(value);
    if (!value.className) {
      throw new HttpException(CLASS_NAME_REQUIRED, HttpStatus.BAD_REQUEST);
    } else {
      if (ContainsSpecificSpecialChars(value.className))
        throw new HttpException(CLASS_NAME_UNVALID, HttpStatus.BAD_REQUEST);
      if (FindClassbyName(value.className)) throw new HttpException(CLASS_EXISTS, HttpStatus.BAD_REQUEST);
    }
    // return value.className.toLowerCase().trim();
    return value;
  }
}

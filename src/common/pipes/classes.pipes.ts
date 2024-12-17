import { PipeTransform, Injectable, ArgumentMetadata, HttpException, HttpStatus } from '@nestjs/common';
import { CLASS_NAME_REQUIRED } from '../errors/constants.errors';

@Injectable()
export class ClassesPipe implements PipeTransform<{ className: string }> {
  transform(value: { className: string }, metadata: ArgumentMetadata) {
    console.log(metadata);
    if (!value.className) throw new HttpException(CLASS_NAME_REQUIRED, HttpStatus.BAD_REQUEST);
    return value;
  }
}

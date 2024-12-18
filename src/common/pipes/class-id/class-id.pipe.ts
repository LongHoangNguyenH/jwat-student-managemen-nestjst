import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CLASS_ID_REQUIRED } from 'src/common/errors/constants.errors';

@Injectable()
export class ClassIdPipe implements PipeTransform<{ classId: number }> {
  transform(value: { classId: number }, metadata: ArgumentMetadata) {
    console.log(metadata);
    console.log(value);
    if (!value) {
      console.log('here');
      throw new HttpException(CLASS_ID_REQUIRED, HttpStatus.BAD_REQUEST);
    }
    return value;
  }
}

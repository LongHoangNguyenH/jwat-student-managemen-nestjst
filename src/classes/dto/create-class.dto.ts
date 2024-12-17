import { IsNotEmpty, IsString } from 'class-validator';
import { CLASS_NAME_REQUIRED } from 'src/errors/constants.errors';
export class CreateClassDto {
  @IsNotEmpty({ message: CLASS_NAME_REQUIRED })
  @IsString()
  className: string;
}

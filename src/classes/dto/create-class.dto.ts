import { IsNotEmpty, IsString } from 'class-validator';
import { CLASS_NAME_REQUIRED, CLASS_NAME_UNVALID } from 'src/common/errors/constants.errors';
export class CreateClassDto {
  @IsNotEmpty({ message: CLASS_NAME_REQUIRED })
  @IsString({ message: CLASS_NAME_UNVALID })
  className: string;
}

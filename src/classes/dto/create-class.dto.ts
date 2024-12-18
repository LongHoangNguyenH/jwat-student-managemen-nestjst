import { IsNotEmpty, IsString } from 'class-validator';
import { CLASS_NAME_REQUIRED, CLASS_NAME_UNVALID } from 'src/common/errors/constants.errors';
export class CreateClassDto {
  @IsNotEmpty({ message: CLASS_NAME_REQUIRED })
  @IsString({ message: CLASS_NAME_UNVALID })
  public className: string;

  constructor(className: string) {
    this.className = className;
  }

  public getName(): string {
    return this.className;
  }

  public setName(className: string) {
    this.className = className;
  }
}

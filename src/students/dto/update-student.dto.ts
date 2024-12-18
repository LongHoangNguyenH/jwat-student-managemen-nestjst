import { IsString, MaxLength } from 'class-validator';
import { CLASS_NAME_UNVALID, STUDENT_NAME_INVALID } from 'src/common/errors/constants.errors';

export class UpdateStudentDto {
  @MaxLength(30)
  @IsString({ message: STUDENT_NAME_INVALID })
  public studentName: string;

  @IsString({ message: CLASS_NAME_UNVALID })
  @MaxLength(9)
  public className: string;

  constructor(studentName: string, className: string) {
    this.studentName = studentName;
    this.className = className;
  }
}

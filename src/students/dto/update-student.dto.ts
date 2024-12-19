import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { CLASS_NAME_UNVALID, STUDENT_NAME_INVALID } from 'src/common/errors/constants.errors';

export class UpdateStudentDto {
  @IsNotEmpty()
  @IsNumber()
  public studentId: number;

  @MaxLength(30)
  @IsString({ message: STUDENT_NAME_INVALID })
  @IsOptional()
  public studentName?: string;

  @IsString({ message: CLASS_NAME_UNVALID })
  @MaxLength(9)
  public className?: string;

  constructor(studentId: number, studentName: string, className: string) {
    this.studentName = studentName;
    this.className = className;
    this.studentId = studentId;
  }
}

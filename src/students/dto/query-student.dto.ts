import { IsNotEmpty } from 'class-validator';

export class QueryStudentDto {
  @IsNotEmpty()
  public studentId: number;

  constructor(studentId: number) {
    this.studentId = studentId;
  }

  public getId(): number {
    return this.studentId;
  }
}

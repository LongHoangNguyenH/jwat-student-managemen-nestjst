export class StudentEntity {
  private studentId: number;
  public studentName: string;
  public className: string;

  constructor(studentId: number, studentName: string, className: string) {
    this.studentId = studentId;
    this.studentName = studentName;
    this.className = className;
  }

  getStudentId(): number {
    return this.studentId;
  }

  setStudentId(studentId: number): void {
    this.studentId = studentId;
  }

  getStudentName(): string {
    return this.studentName;
  }

  setStudentName(studentName: string): void {
    this.studentName = studentName;
  }

  getClassName(): string {
    return this.className;
  }

  setClassName(className: string): void {
    this.className = className;
  }
}

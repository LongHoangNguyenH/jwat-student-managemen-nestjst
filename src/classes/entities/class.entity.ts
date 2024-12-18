export class ClassEntity {
  private classId: number;
  public className: string;

  constructor(classId: number, className: string) {
    this.classId = classId;
    this.className = className;
  }

  public set setClassId(classId: number) {
    this.classId = classId;
  }

  public get getClassId(): number {
    return this.classId;
  }

  public get getClassName(): string {
    return this.className;
  }

  public set setName(className: string) {
    this.className = className;
  }
}

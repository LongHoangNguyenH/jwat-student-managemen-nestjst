export class ClassEntity {
  private classId: string;
  public className: string;

  constructor(classId: string, className: string) {
    this.classId = classId;
    this.className = className;
  }

  public set setClassId(classId: string) {
    this.classId = classId;
  }

  public get getClassId(): string {
    return this.classId;
  }

  public get getClassName(): string {
    return this.className;
  }

  public set setName(className: string) {
    this.className = className;
  }
}

export class QueryClassDto {
  public classId: number;

  constructor(classId: number) {
    this.classId = classId;
  }

  public getId(): number {
    return this.classId;
  }
}

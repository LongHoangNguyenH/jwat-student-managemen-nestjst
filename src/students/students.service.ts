import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentEntity } from './entities/student.entity';
import { listStudents } from 'src/data/data';

@Injectable()
export class StudentsService {
  private studentId: number = 0;
  create(createStudentDto: CreateStudentDto) {
    const newStudent = new StudentEntity(this.studentId, createStudentDto.studentName, createStudentDto.className);
    listStudents.push(newStudent);
    this.studentId++;
    console.log(listStudents);
    return newStudent;
  }
}

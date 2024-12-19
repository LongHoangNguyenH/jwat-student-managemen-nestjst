import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentEntity } from './entities/student.entity';
import { listStudents } from 'src/data/data';
import { UpdateStudentDto } from './dto/update-student.dto';
import {
  DeleteStudentById,
  Find_LIKE_StudentsByName,
  FindIndexStudentById,
  FindStudentById,
  FindStudentsByClassname,
} from 'src/common/helper/helper.helper';

@Injectable()
export class StudentsService {
  private studentId: number = 0;
  create(createStudentDto: CreateStudentDto) {
    const newStudent = new StudentEntity(
      this.studentId,
      createStudentDto.studentName.toLowerCase(),
      createStudentDto.className.toLowerCase(),
    );
    listStudents.push(newStudent);
    this.studentId++;
    console.log(listStudents);
    return newStudent;
  }

  update(updateStudentDto: UpdateStudentDto): StudentEntity {
    const index = FindIndexStudentById(updateStudentDto.studentId);
    const currentStudent = listStudents[index];
    if (updateStudentDto.studentName === '') updateStudentDto.studentName = currentStudent.getStudentName();
    if (updateStudentDto.className === '') updateStudentDto.className = currentStudent.getClassName();
    listStudents[index].setClassName(updateStudentDto.className);
    listStudents[index].setStudentName(updateStudentDto.studentName);
    return listStudents[index];
  }

  delete(studentId: number): StudentEntity[] {
    return DeleteStudentById(studentId);
  }

  getStudentById(studentId: number): StudentEntity {
    console.log(listStudents);
    return FindStudentById(studentId);
  }

  getStudentByClassname(classname: string): StudentEntity[] {
    return FindStudentsByClassname(classname);
  }

  getStudentByName(studentName: string): StudentEntity[] {
    return Find_LIKE_StudentsByName(studentName);
  }
}

import { Body, Controller, Get, ParseIntPipe, Post, Put, UseFilters } from '@nestjs/common';
import { StudentsService } from './students.service';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { CreateStudentDto } from './dto/create-student.dto';
import { CreateStudentPipe } from 'src/common/pipes/create-student/create-student.pipe';
import { UpdateStudentDto } from './dto/update-student.dto';
import { UpdateStudentPipe } from 'src/common/pipes/update-student/update-student.pipe';
import { StudentEntity } from './entities/student.entity';

@Controller('students')
@UseFilters(HttpExceptionFilter)
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body(CreateStudentPipe) createStudentDto: CreateStudentDto): StudentEntity {
    return this.studentsService.create(createStudentDto);
  }

  @Put()
  update(@Body(UpdateStudentPipe) updateStudentDto: UpdateStudentDto): StudentEntity {
    return this.studentsService.update(updateStudentDto);
  }

  @Get()
  getStudentById(@Body('studentId', ParseIntPipe) studentId: number): StudentEntity {
    return this.studentsService.getStudentById(studentId);
  }
}

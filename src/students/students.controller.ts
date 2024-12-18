import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { StudentsService } from './students.service';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { CreateStudentDto } from './dto/create-student.dto';
import { CreateStudentPipe } from 'src/common/pipes/create-student/create-student.pipe';

@Controller('students')
@UseFilters(HttpExceptionFilter)
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body(CreateStudentPipe) createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }
}

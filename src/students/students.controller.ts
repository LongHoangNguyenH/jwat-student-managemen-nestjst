import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseFilters, UseGuards } from '@nestjs/common';
import { StudentsService } from './students.service';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { CreateStudentDto } from './dto/create-student.dto';
import { CreateStudentPipe } from 'src/common/pipes/create-student/create-student.pipe';
import { UpdateStudentDto } from './dto/update-student.dto';
import { UpdateStudentPipe } from 'src/common/pipes/update-student/update-student.pipe';
import { StudentEntity } from './entities/student.entity';
import { QueryStudentPipe } from 'src/common/pipes/query-student/query-student.pipe';
import { QueryClassPipe } from 'src/common/pipes/query-class/query-class.pipe';
import { AuthRoleGuard } from 'src/common/guards/auth-role/auth-role.guard';
import { Roles } from 'src/common/decorators/roles/roles.decorator';
import { ADMIN, PRINCIPAL, TEACHER } from 'src/common/guards/role';

@Controller('students')
@UseFilters(HttpExceptionFilter)
@UseGuards(AuthRoleGuard)
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  @Roles(ADMIN, TEACHER)
  create(@Body(CreateStudentPipe) createStudentDto: CreateStudentDto): StudentEntity {
    return this.studentsService.create(createStudentDto);
  }

  @Put()
  @Roles(ADMIN, TEACHER)
  update(@Body(UpdateStudentPipe) updateStudentDto: UpdateStudentDto): StudentEntity {
    return this.studentsService.update(updateStudentDto);
  }

  @Delete('/:studentId')
  @Roles(ADMIN, TEACHER)
  delete(@Param('studentId', ParseIntPipe, QueryStudentPipe) studentId: number): StudentEntity[] {
    return this.studentsService.delete(studentId);
  }

  @Get('/:studentId')
  @Roles(ADMIN, TEACHER, PRINCIPAL)
  getStudentById(@Param('studentId', ParseIntPipe, QueryStudentPipe) studentId: number): StudentEntity {
    return this.studentsService.getStudentById(studentId);
  }

  @Get('/byClassname/:className')
  @Roles(ADMIN, TEACHER, PRINCIPAL)
  getStudentByClassname(@Param('className', QueryClassPipe) className: string): StudentEntity[] {
    return this.studentsService.getStudentByClassname(className);
  }

  @Get('/byName/:studentName')
  @Roles(ADMIN, TEACHER, PRINCIPAL)
  getStudentByName(@Param('studentName') studentName: string): StudentEntity[] {
    return this.studentsService.getStudentByName(studentName);
  }
}

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseFilters, UseGuards } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { ClassPipe } from 'src/common/pipes/class-pipe/class-pipe.pipe';
import { QueryClassPipe } from 'src/common/pipes/query-class/query-class.pipe';
import { CheckStudentInClassPipe } from 'src/common/pipes/check-student-in-class/check-student-in-class.pipe';
import { UpdateClassDto } from './dto/update-class.dto';
import { AuthRoleGuard } from 'src/common/guards/auth-role/auth-role.guard';
import { Roles } from 'src/common/decorators/roles/roles.decorator';
import { ADMIN, PRINCIPAL, TEACHER } from 'src/common/guards/role';

@Controller('classes')
@UseGuards(AuthRoleGuard)
@UseFilters(HttpExceptionFilter)
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post()
  @Roles(ADMIN, PRINCIPAL)
  create(@Body(ClassPipe) createClassDto: CreateClassDto) {
    return this.classesService.create(createClassDto);
  }

  @Get('/:classId')
  @Roles(ADMIN, PRINCIPAL, TEACHER)
  findOne(@Param('classId', ParseIntPipe, QueryClassPipe) classId: number) {
    return this.classesService.findOne(classId);
  }

  @Put('/:classId')
  @Roles(ADMIN, PRINCIPAL)
  update(@Param('classId', ParseIntPipe, QueryClassPipe) classId: number, @Body() updateClassDto: UpdateClassDto) {
    return this.classesService.update(classId, updateClassDto);
  }

  @Delete('/:classId')
  @Roles(ADMIN, PRINCIPAL)
  delete(@Param('classId', ParseIntPipe, CheckStudentInClassPipe) classId: number) {
    return this.classesService.delete(classId);
  }
}

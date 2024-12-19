import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseFilters } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { ClassPipe } from 'src/common/pipes/class-pipe/class-pipe.pipe';
import { QueryClassPipe } from 'src/common/pipes/query-class/query-class.pipe';
import { CheckStudentInClassPipe } from 'src/common/pipes/check-student-in-class/check-student-in-class.pipe';
import { UpdateClassDto } from './dto/update-class.dto';

@Controller('classes')
@UseFilters(HttpExceptionFilter)
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post()
  create(@Body(ClassPipe) createClassDto: CreateClassDto) {
    return this.classesService.create(createClassDto);
  }

  @Get('/:classId')
  findOne(@Param('classId', ParseIntPipe, QueryClassPipe) classId: number) {
    return this.classesService.findOne(classId);
  }

  @Put('/:classId')
  update(@Param('classId', ParseIntPipe, QueryClassPipe) classId: number, @Body() updateClassDto: UpdateClassDto) {
    return this.classesService.update(classId, updateClassDto);
  }

  @Delete('/:classId')
  delete(@Param('classId', ParseIntPipe, CheckStudentInClassPipe) classId: number) {
    return this.classesService.delete(classId);
  }
}

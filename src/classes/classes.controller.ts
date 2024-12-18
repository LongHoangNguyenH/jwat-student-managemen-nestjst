import { Body, Controller, Get, Param, ParseIntPipe, Post, UseFilters } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { ClassPipe } from 'src/common/pipes/class-pipe/class-pipe.pipe';
import { QueryClassPipe } from 'src/common/pipes/query-class/query-class.pipe';

@Controller('classes')
@UseFilters(HttpExceptionFilter)
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post()
  create(@Body(ClassPipe) createClassDto: CreateClassDto) {
    return this.classesService.create(createClassDto);
  }

  @Get(':classId')
  findOne(@Param('classId', ParseIntPipe, QueryClassPipe) classId: number) {
    return this.classesService.findOne(classId);
  }
}

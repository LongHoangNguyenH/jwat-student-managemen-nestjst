import { Body, Controller, Get, ParseIntPipe, Post, UseFilters } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { ClassNamePipe } from 'src/common/pipes/class-name/class-name.pipe';

@Controller('classes')
@UseFilters(HttpExceptionFilter)
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post()
  create(@Body(ClassNamePipe) createClassDto: CreateClassDto) {
    return this.classesService.create(createClassDto);
  }

  @Get()
  findOne(@Body(ClassNamePipe, ParseIntPipe) classId: number) {
    return this.classesService.findOne(classId);
  }
}

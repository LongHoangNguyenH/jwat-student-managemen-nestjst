import { Body, Controller, Get, ParseIntPipe, Post, UseFilters } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { ClassPipe } from 'src/common/pipes/class-pipe/class-pipe.pipe';

@Controller('classes')
@UseFilters(HttpExceptionFilter)
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post()
  create(@Body(ClassPipe) createClassDto: CreateClassDto) {
    return this.classesService.create(createClassDto);
  }

  @Get()
  findOne(@Body(new ParseIntPipe({})) classId: number) {
    return this.classesService.findOne(classId);
  }
}

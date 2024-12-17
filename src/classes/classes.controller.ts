import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { ClassesPipe } from 'src/common/pipes/classes.pipes';

@Controller('classes')
@UseFilters(HttpExceptionFilter)
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post()
  create(@Body(new ClassesPipe()) createClassDto: CreateClassDto) {
    return this.classesService.create(createClassDto);
  }
}

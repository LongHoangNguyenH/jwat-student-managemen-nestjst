import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';

@Controller('classes')
@UseFilters(HttpExceptionFilter)
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post()
  create(@Body() createClassDto: CreateClassDto) {
    return this.classesService.create(createClassDto);
  }
}

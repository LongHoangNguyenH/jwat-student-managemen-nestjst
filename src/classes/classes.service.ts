import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { ClassEntity } from './entities/class.entity';
import { listClasses } from '../data/data';
import { v4 as uuid } from 'uuid';
import { BadRequestException } from 'src/errors/bad-request.errors';
import { CLASS_EXISTS } from 'src/errors/constants.errors';
@Injectable()
export class ClassesService {
  create(createClassDto: CreateClassDto): ClassEntity {
    const existingClass = listClasses.find(cls => createClassDto.className == cls.getClassName);
    if (!existingClass) {
      throw new BadRequestException(CLASS_EXISTS);
    }
    const newClass = new ClassEntity(uuid(), createClassDto.className);
    return newClass;
  }
}

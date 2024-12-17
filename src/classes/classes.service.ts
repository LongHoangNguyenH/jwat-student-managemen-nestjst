import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { ClassEntity } from './entities/class.entity';
import { listClasses } from '../data/data';
import { v4 as uuid } from 'uuid';
import { BadRequestException } from '@nestjs/common';
import { CLASS_EXISTS } from 'src/common/errors/constants.errors';
@Injectable()
export class ClassesService {
  create(createClassDto: CreateClassDto): ClassEntity {
    const existingClass = listClasses.find(cls => createClassDto.className == cls.getClassName);
    if (existingClass) {
      throw new BadRequestException(CLASS_EXISTS);
    }
    const newClass = new ClassEntity(uuid(), createClassDto.className);
    listClasses.push(newClass);
    return newClass;
  }
}

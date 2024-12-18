import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { ClassEntity } from './entities/class.entity';
import { listClasses } from '../data/data';
import { QueryClassDto } from './dto/query-class.dto';
import { findClassById } from 'src/common/helper/helper.helper';
// import { findClassById } from 'src/common/helper/classess.helper';
@Injectable()
export class ClassesService {
  private classId: number = 0;

  create(newClass: CreateClassDto): ClassEntity {
    const newClassEntity = new ClassEntity(this.classId, newClass.className);
    this.classId++;
    listClasses.push(newClassEntity);
    return newClassEntity;
  }

  findOne(queryClassDto: QueryClassDto): ClassEntity {
    return findClassById(queryClassDto.getId());
  }
}

import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { ClassEntity } from './entities/class.entity';
import { listClasses } from '../data/data';
import { DeleteClassById, findClassById, updateClassbyId } from 'src/common/helper/helper.helper';
import { UpdateClassDto } from './dto/update-class.dto';
@Injectable()
export class ClassesService {
  private classId: number = 0;

  create(newClass: CreateClassDto): ClassEntity {
    const newClassEntity = new ClassEntity(this.classId, newClass.className.toLowerCase());
    this.classId++;
    listClasses.push(newClassEntity);
    return newClassEntity;
  }

  findOne(classId: number): ClassEntity {
    return findClassById(classId);
  }

  update(classId: number, updateClassDto: UpdateClassDto) {
    return updateClassbyId(classId, updateClassDto.className.toLowerCase());
  }

  delete(classId: number) {
    return DeleteClassById(classId);
  }
}

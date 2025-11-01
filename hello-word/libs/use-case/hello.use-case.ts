import { Injectable } from '@nestjs/common';
import { HelloEntity } from '../domain/hello.entity';

@Injectable()
export class HelloUseCase {
  execute(): HelloEntity {
    return new HelloEntity('Olá terraquios!');
  }
}



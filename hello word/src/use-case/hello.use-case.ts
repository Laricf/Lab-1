import { HelloEntity } from '../domain/hello.entity';

export class HelloUseCase {
  execute(): HelloEntity {
    return new HelloEntity('Hello from Use Case!');
  }
}


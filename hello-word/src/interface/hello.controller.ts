import { Controller, Get } from '@nestjs/common';
import { HelloUseCase } from '../use-case/hello.use-case';
import { HelloEntity } from '../domain/hello.entity';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloUseCase: HelloUseCase) {}

  @Get()
  getHello(): HelloEntity {
    return this.helloUseCase.execute();
  }
}

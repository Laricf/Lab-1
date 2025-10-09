import { Module } from '@nestjs/common';
import { HelloController } from './interface/hello.controller';
import { HelloUseCase } from './use-case/hello.use-case';

@Module({
  imports: [],
  controllers: [HelloController],
  providers: [HelloUseCase],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { UsersController } from '../libs/interface/users/users.controller';

@Module({
  controllers: [UsersController],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { UsersController } from '../libs/interface/users/users.controller';
import { ClientsController } from '../libs/interface/clients/clients.controller';

@Module({
  controllers: [UsersController, ClientsController],
})
export class AppModule {}

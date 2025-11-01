import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersRepository } from '../../infra/users/users.repository';
import { CreateUserUseCase } from '../../use-case/users/create-user.usecase';
import { GetUsersUseCase } from '../../use-case/users/get-users.usecase';
import { GetUserByIdUseCase } from '../../use-case/users/get-user-by-id.usecase';
import { UpdateUserUseCase } from '../../use-case/users/update-user.usecase';
import { DeleteUserUseCase } from '../../use-case/users/delete-user.usecase';
import { CreateUserDto, UpdateUserDto } from './users.dto';

@Controller('users')
export class UsersController {
  private repo = new UsersRepository();

  @Post()
  create(@Body() dto: CreateUserDto) {
    return new CreateUserUseCase(this.repo).execute(dto.name, dto.email, dto.role);
  }

  @Get()
  findAll() {
    return new GetUsersUseCase(this.repo).execute();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return new GetUserByIdUseCase(this.repo).execute(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return new UpdateUserUseCase(this.repo).execute(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return new DeleteUserUseCase(this.repo).execute(Number(id));
  }
}

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClientsRepository } from '../../infra/clients/clients.repository';
import { CreateClientUseCase } from '../../use-case/clients/create-client.usecase';
import { GetClientsUseCase } from '../../use-case/clients/get-clients.usecase';
import { GetClientByIdUseCase } from '../../use-case/clients/get-client-by-id.usecase';
import { UpdateClientUseCase } from '../../use-case/clients/update-client.usecase';
import { DeleteClientUseCase } from '../../use-case/clients/delete-client.usecase';
import { CreateClientDto, UpdateClientDto } from './clients.dto';

@Controller('clients')
export class ClientsController {
  private repo = new ClientsRepository();

  @Post()
  create(@Body() dto: CreateClientDto) {
    return new CreateClientUseCase(this.repo).execute(dto.name, dto.cpf, dto.email, dto.phone);
  }

  @Get()
  findAll() {
    return new GetClientsUseCase(this.repo).execute();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return new GetClientByIdUseCase(this.repo).execute(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateClientDto) {
    return new UpdateClientUseCase(this.repo).execute(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return new DeleteClientUseCase(this.repo).execute(Number(id));
  }
}

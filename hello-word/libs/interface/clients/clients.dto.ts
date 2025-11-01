export class CreateClientDto {
  name!: string;
  cpf!: string;
  email!: string;
  phone!: string;
}

export class UpdateClientDto {
  name?: string;
  cpf?: string;
  email?: string;
  phone?: string;
}

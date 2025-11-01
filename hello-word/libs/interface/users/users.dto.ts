export class CreateUserDto {
  name!: string;
  email!: string;
  role!: 'ADMIN' | 'EMPLOYEE';
}

export class UpdateUserDto {
  name?: string;
  email?: string;
  role?: 'ADMIN' | 'EMPLOYEE';
}

import { UsersRepository } from '../../infra/users/users.repository';
import { User } from '../../domain/users/user.entity';

export class CreateUserUseCase {
  constructor(private repo: UsersRepository) {}

  execute(name: string, email: string, role: 'ADMIN' | 'EMPLOYEE'): User {
    return this.repo.create({ name, email, role });
  }
}

import { UsersRepository } from '../../infra/users/users.repository';
import { User } from '../../domain/users/user.entity';

export class GetUsersUseCase {
  constructor(private repo: UsersRepository) {}

  execute(): User[] {
    return this.repo.findAll();
  }
}

import { UsersRepository } from '../../infra/users/users.repository';
import { User } from '../../domain/users/user.entity';

export class UpdateUserUseCase {
  constructor(private repo: UsersRepository) {}

  execute(id: number, data: Partial<User>): User | null {
    return this.repo.update(id, data);
  }
}

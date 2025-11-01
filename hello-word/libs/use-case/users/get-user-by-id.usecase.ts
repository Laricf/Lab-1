import { UsersRepository } from '../../infra/users/users.repository';
import { User } from '../../domain/users/user.entity';

export class GetUserByIdUseCase {
  constructor(private repo: UsersRepository) {}

  execute(id: number): User | undefined {
    return this.repo.findById(id);
  }
}

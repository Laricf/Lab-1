import { User } from '../../domain/users/user.entity';

export class UsersRepository {
  private users: User[] = [];
  private currentId = 1;

  create(userData: Omit<User, 'id'>): User {
    const user = new User(this.currentId++, userData.name, userData.email, userData.role);
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findById(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }

  update(id: number, userData: Partial<User>): User | null {
    const user = this.findById(id);
    if (!user) return null;
    Object.assign(user, userData);
    return user;
  }

  delete(id: number): boolean {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) return false;
    this.users.splice(index, 1);
    return true;
  }
}

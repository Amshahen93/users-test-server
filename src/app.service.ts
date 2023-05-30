import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
@Injectable()
export class AppService {

  private users: User [] = [];

  private findUserIndex(id: string): number {
    let index = -1;
    this.users.find((user: User, i: number) => {
      if (user.id === id) {
        console.log(i);
        index = i;
        return;
      }
    });
    return index;
  }

  private findUser(id: string): User {
    return this.users.find((user: User) => {
      return user.id === id
    });

  }
  public getUsers(): User[] {
    return this.users;
  }

  public createUser(user: User) {
    this.users.push(user);
    return user;
  }

  public editUser(user: User): User {
    const index = this.findUserIndex(user.id);
    if (index > -1) {
      this.users[index] = user;
      return user;
    } 
   
  }

  public deleteUser(id: string) {
    const index = this.findUserIndex(id);
   
    if (index > -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }

  public getUser(id) {
    return this.findUser(id);
  }
}

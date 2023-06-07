import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './interfaces/user.interface';
import { v4 } from 'uuid';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(): User[] {
    return this.appService.getUsers();
  }

  @Post()
  createUser(@Body() user: User): User {
    user.id = v4();
    return this.appService.createUser(user);
  }

  @Put()
  editUser(@Body() user: User): User {
    const updateUser = this.appService.editUser(user);
    console.log(updateUser)
    if (updateUser) {
      return updateUser
    } else {
      throw new HttpException(`User not found id=${user.id}`, HttpStatus.NOT_FOUND)
    }
    
  }

  @Get('/:id')
  getUser(@Param() param: {id: string}) {
    const updateUser = this.appService.getUser(param.id);
    if (updateUser) {
      return updateUser
    } else {
      throw new HttpException(`User not found id=${param.id}`, HttpStatus.NOT_FOUND)
    }
  }

  @Delete('/:id')
  deleteUser(@Param() param: {id: string}): boolean {
    const deleted = this.appService.deleteUser(param.id);
    if (deleted) {
      return deleted
    } else {
      throw new HttpException(`${param.id}`, HttpStatus.NOT_FOUND)
    }
    
  }
  
}

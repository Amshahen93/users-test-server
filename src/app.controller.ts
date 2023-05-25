import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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
    console.log(user);
    user.id = v4();
    return this.appService.createUser(user);
  }

  @Put()
  editUser(@Body() user: User): User {
    return this.appService.editUser(user);
  }

  @Get('/:id')
  getUser(@Param() param: {id: string}) {
    return this.appService.deleteUser(param.id);
  }

  @Delete('/:id')
  deleteUser(@Param() param: {id: string}) {
    return this.appService.deleteUser(param.id);
  }
  
}

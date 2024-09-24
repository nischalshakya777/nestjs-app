import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UsersService, User } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(Number(id));
  }

  @Post()
  create(@Body() user: User) {
    this.usersService.create(user);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: User) {
    this.usersService.update(Number(id), user);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.usersService.delete(Number(id));
  }
}

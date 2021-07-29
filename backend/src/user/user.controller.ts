import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateUserDTO } from './create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/create')
  async addCustomer(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    const user = await this.userService.createUser(createUserDTO);
    return res.status(HttpStatus.OK).json({
      message: 'User has been created successfully',
      user,
    });
  }
}

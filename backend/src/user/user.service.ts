import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';
import { CreateUserDTO } from './create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>,
  ) {}

  async findOne(login: string): Promise<User | undefined> {
    return await this.userModel.findOne({ login: login }).exec();
  }

  async createUser(createUserDTO: CreateUserDTO) {
    return await new this.userModel(createUserDTO).save();
  }
}

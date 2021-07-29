import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from './customer.interface';
import { CreateCustomerDTO } from './create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel('Customer')
    private readonly customerModel: Model<Customer>,
  ) {}

  async getAllCustomer(): Promise<Customer[]> {
    return await this.customerModel.find().exec();
  }

  async getCustomer(customerID): Promise<Customer> {
    return await this.customerModel.findById(customerID).exec();
  }

  async addCustomer(createCustomerDTO: CreateCustomerDTO): Promise<Customer> {
    return await new this.customerModel(createCustomerDTO).save();
  }

  async updateCustomer(customerID, createCustomerDTO): Promise<Customer> {
    return await this.customerModel
      .findByIdAndUpdate(customerID, createCustomerDTO, { new: true })
      .exec();
  }

  async deleteCustomer(customerID): Promise<any> {
    return await this.customerModel.findByIdAndRemove(customerID).exec();
  }
}

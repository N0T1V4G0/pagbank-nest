import { Injectable } from '@nestjs/common';
import { CreateCheckoutDto } from './dto/create-checkout.dto';

@Injectable()
export class CheckoutService {
  create(createCheckoutDto: CreateCheckoutDto) {
    return 'This action adds a new checkout';
  }

  findOne(id: number) {
    return `This action returns a #${id} checkout`;
  }
}

import { Module } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { CheckoutController } from './checkout.controller';
import { PagbankAuth } from './pagbank.auth';

@Module({
  controllers: [CheckoutController],
  providers: [CheckoutService, PagbankAuth],
})
export class CheckoutModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CheckoutModule } from './modules/checkout/checkout.module';

@Module({
  imports: [CheckoutModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

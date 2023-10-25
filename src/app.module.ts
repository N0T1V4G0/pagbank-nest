import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CheckoutModule } from './modules/checkout/checkout.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), CheckoutModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

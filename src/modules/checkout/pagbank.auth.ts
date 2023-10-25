import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class PagbankAuth {
  constructor(private readonly configService: ConfigService) {}
  public readonly url = 'https://sandbox.api.pagseguro.com/checkouts';
  public readonly accessToken = this.configService.get<string>('ACCESS_TOKEN');
  public readonly email = this.configService.get<string>('EMAIL');

  async onModuleInit() {
    try {
      const res = await axios.get(`${this.url}/123`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      });
      console.log(res.data);
    } catch (e) {
      console.log(e.message);
    }
  }
}

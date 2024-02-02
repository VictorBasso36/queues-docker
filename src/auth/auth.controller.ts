import { Controller, Get } from '@nestjs/common';
import { QueueService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly appService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

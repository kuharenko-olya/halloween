import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('participants')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): any {
    return this.appService.getAll();
  }
}

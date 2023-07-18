import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SystemController } from './system.controller';
import { SystemService } from './services/system.service';

@Module({
  controllers: [SystemController],
  imports: [HttpModule],
  providers: [SystemService],
})
export class SystemModule {}

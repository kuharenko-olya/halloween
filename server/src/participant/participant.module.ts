import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Participant } from '../entities/participant.entity';
import { AppService } from '../app.service';

@Module({
  imports: [TypeOrmModule.forFeature([Participant])],
  providers: [AppService],
  exports: [TypeOrmModule],
})
export class ParticipantModule {}

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Participant } from './entities/participant.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Participant)
    private readonly participantRepository: Repository<Participant>,
  ) {}

  getAll() {
    return this.participantRepository.find();
  }
}
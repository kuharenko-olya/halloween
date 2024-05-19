import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from '../entities/event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  getAll() {
    return this.eventRepository.find();
  }

  // async getEvents(page: number, limit: number): Promise<Event[]> {
  //   const offset = (page - 1) * limit;
  //   return this.eventRepository.find({
  //     skip: offset,
  //     take: limit,
  //   });
  // }

  async getEvents(page: number, limit: number): Promise<{ events: Event[], total: number }> {
    const offset = (page - 1) * limit;
    console.log('limit',limit)
    console.log('offset',offset)
    const events = await this.eventRepository.find({
      skip: offset,
      take: limit,
    });
    const total = await this.eventRepository.count();
    return { events, total };
  }
}

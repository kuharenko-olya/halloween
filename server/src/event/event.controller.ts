import { Controller, Get, Query } from "@nestjs/common";
import { EventService } from "./event.service";

@Controller("events")
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  async getEvents(@Query() request) {
    const pageNumber = +request.page || 1;
    const limitNumber = +request.limit || 10;

    return this.eventService.getEvents(pageNumber, limitNumber);
  }
}

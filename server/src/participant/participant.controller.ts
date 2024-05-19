import { Controller, Get } from "@nestjs/common";
import { ParticipantService } from "./participant.service";

@Controller("participants")
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Get()
  getAll(): any {
    return this.participantService.getAll();
  }
}

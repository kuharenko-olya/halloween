import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("events")
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ length: 255 })
  description: string;

  @Column({ name: "event_name", type: "date", nullable: false })
  event_date: string;

  @Column({ length: 255 })
  organizer: string;
}

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("participants")
export class Participant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "name", length: 255 })
  fullName: string;

  @Column({ length: 255 })
  email: string;
}

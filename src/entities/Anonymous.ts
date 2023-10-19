import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'anonymouses' })
export class Anonymous {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  messageAnonymous: string;
}

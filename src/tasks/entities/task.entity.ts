import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Task {

    @PrimaryColumn( { type: 'uuid' } )
    id: number;

    @Column()
    name: string;

    @Column({default: false})
    completed: boolean;


}
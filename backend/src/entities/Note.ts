import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('notes')
export class Note {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    title:string;

    @Column()
    body:string;

    @Column({ name: "bg_color"})
    backgroundColor:string
}
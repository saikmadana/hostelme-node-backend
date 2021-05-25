import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
enum RoomType {
    ATTACHED = "attached",
    COMMON = "common"
}

@Entity('master_room')
export class Room {

    @PrimaryGeneratedColumn({ name: "id" })
    id!: number;

    @Column('smallint', { name: "rent" })
    rent!: number;

    @Column({
        type: "enum",
        enum: RoomType,
        default: RoomType.ATTACHED
    })
    type!: RoomType;

    @Column('tinyint', { name: "sharing" })
    sharing!: number;

    @Column('varchar', { name: "desc", length: 255 })
    desc!: string;

    @Column('varchar', { name: "pic", length: 255 })
    pic!: string;

}

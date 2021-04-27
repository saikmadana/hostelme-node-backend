import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn({name: "id"})
    id!: number;

    @Column('varchar', { name: "first_name", length: 45 })
    firstName!: string;

    @Column('varchar', { name: "last_name", length: 45 })
    lastName!: string;

    @Column('varchar', { name: "qualification", length: 45 })
    qualification!: number;

    @Column('varchar', { name: "job_description", length: 45 })
    jobDescirption!: number;

    @Column('varchar', { name: "office_address", length: 255 })
    officeAddress!: number;

    @Column('varchar', { name: "home_address", length: 255 })
    homeAddress!: number;

    @Column('varchar', { name: "home_city", length: 45 })
    homeCity!: number;

    @Column('varchar', { name: "home_state", length: 45 })
    homeState!: number;

    @Column('varchar', { name: "home_country", length: 45 })
    homeCountry!: number;

    @Column('varchar', { name: "user_type", length: 45 })
    userType!: number;

    @Column('varchar', { length: 45 })
    aadhaar!: number;

    @Column('varchar', { name: "pan", length: 45 })
    pan!: number;

    @Column('varchar', { name: "status", length: 45 })
    status!: number;

    @Column('bigint', { name: "mobile"})
    mobile!: number;

    @Column('varchar', { name: "email", length: 45 })
    email!: number;

}

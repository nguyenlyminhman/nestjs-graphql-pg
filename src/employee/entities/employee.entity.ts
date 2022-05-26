import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Employee {

    @Field()
    @PrimaryGeneratedColumn('uuid')
    @PrimaryColumn()
    id: string;

    @Field()
    @Column()
    firstname: string;
    
    @Field()
    @Column()
    lastname: string;
    
    @Field()
    @Column()
    designation: string;
    
    @Field({ nullable: true })
    @Column({nullable:true})
    city: string;
}
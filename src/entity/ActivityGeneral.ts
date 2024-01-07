import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToMany, ManyToMany, OneToOne, Unique, ManyToOne } from "typeorm";
import { General } from "./General";
import { Activity } from "./Activity";

@Entity()
export class ActivityGeneral {

    @PrimaryGeneratedColumn({
        comment: '主键：id'
    })
    id: number;

    @Column({
        comment: '数量',
        type: 'int'
    })
    num: number

    @ManyToOne(() => General, general => general.activityGeneral, {
        cascade: true
    })
    general: General


    @ManyToOne(() => Activity, activity => activity.activityGeneral, {
        cascade: true
    })
    activity: Activity;
    
}
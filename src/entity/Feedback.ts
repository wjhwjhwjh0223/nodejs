import { Entity, PrimaryGeneratedColumn, Column,  JoinColumn, CreateDateColumn ,UpdateDateColumn, OneToOne} from "typeorm";
import { Activity } from "./Activity";
import { AppointmentService } from "./Appointment";
@Entity()
export class Feedback {
    @PrimaryGeneratedColumn({
        comment: '反馈ID'
    })
    id: number;

    @Column({
        comment: '评分'
    })
    rating: number;

    @Column({
        type: "text",
        comment: '评价内容'
    })
    comment: string;

    @CreateDateColumn({
        comment: '评价时间'
    })
    createdAt: Date;

    @CreateDateColumn()
    ctime: Date;
  
    @UpdateDateColumn()
    utime: Date;

    //一个评价对应一个预约服务
    @JoinColumn()
    @OneToOne(()=>AppointmentService,{
        cascade:true
    })
    appointment:AppointmentService;

    //一个评价对应一个活动
    @JoinColumn()
    @OneToOne(()=>Activity,{
        cascade:true
    })
    activity:Activity;
}
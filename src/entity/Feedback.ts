import { Entity, PrimaryGeneratedColumn, Column,  JoinColumn, CreateDateColumn ,UpdateDateColumn, OneToOne} from "typeorm";
import { Service } from "./Service";
import { Activity } from "./Activity";
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

    //一个评价对应一个服务
    @JoinColumn()
    @OneToOne(()=>Service,{
        cascade:true
    })
    service:Service;

    //一个评价对应一个活动
    @OneToOne(()=>Activity,{
        cascade:true
    })
    activity:Activity;
}
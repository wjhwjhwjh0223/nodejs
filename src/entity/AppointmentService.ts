import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from "typeorm";


import { General } from "./General";
import { Staff } from "./Staff";

@Entity()
export class AppointmentService {

    @PrimaryGeneratedColumn({
        comment: '主键,预约ID'
    })
    id: number;


    //多个预约服务可以为一个人预约
    @JoinColumn()
    @ManyToOne(()=>General)
    general:General;

    //多个预约对应一个员工
    @ManyToOne(()=>Staff)
    @JoinColumn()
    staff:Staff;
    
    @Column({
        type: 'datetime',
        comment: '预约时间'
    })
    appointmentTime: Date;

    @Column({
        comment: '预约状态（如：待确认、已确认、已取消）'
    })
    status: string;

    @CreateDateColumn()
    ctime: Date; // 创建时间
  
    @UpdateDateColumn()
    utime: Date; // 更新时间

    @Column({
        comment: '服务类型（如：医疗、家政等）'
    })
    serviceType: string;

    @Column({
        comment: '服务描述'
    })
    serviceDescription: string;

    @Column({
        comment: '用户反馈或评价',
        nullable: true
    })
    userFeedback: string;

    @Column({
        comment: '取消原因',
        nullable: true
    })
    cancellationReason: string;

    @Column({
        comment: '特殊要求',
        nullable: true
    })
    specialRequirements: string;
    constructor(obj: any) {
        if (obj) {
            Object.assign(this, obj);
        }
    }
}

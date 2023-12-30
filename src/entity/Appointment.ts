import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from "typeorm";

import { Service } from "./Service"; // 引入服务实体
import { General } from "./General";
import { Staff } from "./Staff";

@Entity()
export class Appointment {

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
    
    //一个预约对应一个服务
    @OneToOne(()=>Service, {
        cascade:true
    })
    @JoinColumn()
    service:Service;

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

    constructor(obj: any) {
        if (obj) {
            Object.assign(this, obj);
        }
    }
}

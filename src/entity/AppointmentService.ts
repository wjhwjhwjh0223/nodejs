import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from "typeorm";


import { General } from "./General";
import { Staff } from "./Staff";
import { Feedback } from "./Feedback";

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
        type: 'datetime', // 指定列类型为 datetime
        nullable: false, // 设定此字段为非空
        comment: '预约时间'
    })
    appointmentTime: Date;

    @Column({
        comment: '预约状态（如：待确认、已确认、已取消 已完成）',
        default: '待确认' // 默认状态为待确认
      })
      status: string;
      

    @CreateDateColumn()
    ctime: Date; // 创建时间
  
    @UpdateDateColumn()
    utime: Date; // 更新时间

    @Column({
        comment: '服务类型'
    })
    serviceType: string;

    @Column({
        comment: '服务描述'
    })
    serviceDescription: string;

    @JoinColumn()
    @OneToOne(()=>Feedback,{cascade:true})
    feedback:Feedback;


    @Column({
        comment: '取消原因',
        nullable: true
    })
    cancellationReason: string;

    @Column({
        comment: '特殊要求',
        default:'无',
    })
    specialRequirements: string;
    constructor(obj: Partial<AppointmentService>) {
        if (obj) {
            Object.assign(this, obj);
        }
    }
}

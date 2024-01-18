import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, ManyToOne } from "typeorm";
import { Staff } from "./Staff"; // 引入工作人员实体
import { General } from "./General";//引入普通用户实体
import { join } from "path";
import { StaffEmergency } from "./StaffEmergency";


@Entity()
export class EmergencyResponse {

    @PrimaryGeneratedColumn({
        comment: '主键,紧急响应ID'
    })
    id: number;


    @Column({
        comment: '紧急事件详情',
    })
    details: string;

    @Column({
        comment: '紧急事件类型，例如：医疗紧急情况、安全事件等',
        
    })
    type: string;


    @Column({
        comment: '响应状态（如：待响应、处理中、已解决）',
        default:'待响应'
    })
    status: string;

    @Column({
        comment:'地点',
    })
    location: string;

    @Column({
        comment: '流程',
        default:''
    })
    flow:string

    @CreateDateColumn({
        comment: '紧急事件报告时间'
    })
    ctime: Date;

    @UpdateDateColumn({
        comment: '最后更新时间'
    })
    utime: Date;

    //多个紧急事件对应一个用户
    @ManyToOne(()=>General)
    general:General;


    @OneToMany(()=>StaffEmergency,staffEmergency=>staffEmergency.emergencyResponse)
    staffEmergency:StaffEmergency[];
    emergencyResponse: any;

    constructor(obj?: any) {
        if (obj) {
            Object.assign(this, obj);
        }
    }
}

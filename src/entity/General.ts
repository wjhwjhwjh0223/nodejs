import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn,  OneToMany, ManyToMany, OneToOne ,Unique } from "typeorm";
import { Activity } from "./Activity";
import { Appointment } from "./Appointment";
import { Notification } from "./Notification";
import { HealthRecord } from "./HealthRecord";

@Unique(["account"])
@Entity()
export class General {
    // 主键
    @PrimaryGeneratedColumn({
        comment: '主键：id'
    })
    id: number;

    @Column({
        comment:'用户姓名'
    })
    name: string;

    @Column({
        comment:'用户账号',
        unique: true 
    })
    account:string

    @Column({
        comment:"用户密码",
        default:123456
    })
    password: string;
    
    @Column({
        comment:'用户年龄'
    })
    age: number;

    @Column({
        comment:'用户性别'
    })
    sex:number

    @Column({
        comment:'电话'
    })
    phone:string

    @Column({
        comment:'地址'
    })
    address:string

    @JoinColumn()
    @OneToOne(()=>HealthRecord,{
        cascade:true
    })
    healthRecord:HealthRecord

    @Column({
        comment:'紧急联系人电话'
    })
    contacts:number

    @CreateDateColumn()
    ctime: Date;

    @UpdateDateColumn()
    utime: Date;

    @ManyToMany(()=>Notification)
    notifications: Notification[];


    //多个普通人员对应多个活动
    @ManyToMany(()=>Activity,activity=>activity.general,{
        cascade:true
    })
    activity:Activity[]
   

    //一个普通人员对应多个预约
    @OneToMany(()=>Appointment,appointment=>appointment.general,{
        cascade:true
    })
    appointments:Appointment[]

    
    constructor(obj:any) {
        if(obj) {
          Object.assign(this, obj)
        }
      }

}
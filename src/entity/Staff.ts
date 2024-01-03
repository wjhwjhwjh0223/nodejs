import { ManyToMany,Entity, Unique,PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, OneToOne,OneToMany } from "typeorm";
import {Notification} from "./Notification"
import { Appointment } from "./Appointment";
import { EmergencyResponse } from "./EmergencyResponse";

@Unique(["account"])
@Entity()
export class Staff{

    @PrimaryGeneratedColumn({
        comment:'主键,员工id',
    })
    id:number

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
        comment:"图片地址",
    })
    avatar:string

    @Column({
        comment:'员工姓名',
    })
    name:string

    @Column({
        comment:'员工年龄',
    })
    age:number
    
    @Column({
        comment:'员工性别',
    })
    sex:number

    @Column({
        comment:'员工手机号',
        type: 'varchar'
    })
    phone:string

    @Column({
        comment:'员工地址',
    })
    address:string

    @CreateDateColumn()
    ctime: Date;
  
    @UpdateDateColumn()
    utime: Date;

    @ManyToMany(() => Notification)
    notifications: Notification[];
    
    //一个员工对应多个预约
    @OneToMany(()=>Appointment,appointment=>appointment.staff,{
        cascade:true
    })
    appointments:Appointment[]

    //多个员工对应一个紧急事件
    @ManyToOne(()=>EmergencyResponse)
    @JoinColumn()
    emergencyResponse:EmergencyResponse

    constructor(obj:any) {
        if(obj) {
          Object.assign(this, obj)
        }
      }
}
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Staff } from "./Staff"; // 引入员工实体
import { Appointment } from "./Appointment";

@Entity()
export class Service{
    @PrimaryGeneratedColumn({
        comment: '主键，服务ID'
    })
    id: number;

    @Column({
        comment: '服务名称'
    })
    name: string;

    @Column({
        type: "text",
        comment: '服务描述'
    })
    description: string;

    @Column({
        comment: '服务类别'
    })
    category: string;

    @CreateDateColumn()
    ctime: Date;

    @UpdateDateColumn()
    utime: Date;

 


    constructor(obj:any) {
        if(obj) {
          Object.assign(this, obj)
        }
      }

}
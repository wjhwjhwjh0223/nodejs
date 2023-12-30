
import {  PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Entity, JoinColumn,OneToOne} from "typeorm";

import { General } from "./General";
@Entity()
export class HealthRecord{
    @PrimaryGeneratedColumn({
        comment: '主键,健康档案ID'
    })
    id: number;

    @Column({
        comment:'健康信息',
    })
    health:string;

    @Column({
        comment:'病史详情'
    })
    medical:string

    @CreateDateColumn()
    ctime: Date;

    @UpdateDateColumn()
    utime: Date;

    @JoinColumn()
    @OneToOne(()=>General,{
        cascade:true
      })
      general:General
    
    constructor(obj:any) {
        if(obj) {
          Object.assign(this, obj)
        }
      }
  
}

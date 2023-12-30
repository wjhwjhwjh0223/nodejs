import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,  OneToOne, ManyToMany, JoinTable } from "typeorm";
import { General } from "./General";
import { Staff } from "./Staff";

@Entity()
export class Activity {
    @PrimaryGeneratedColumn({
        comment: '主键,活动id'
    })
    id: number;


    @Column({
        comment: '活动名称'
    })
    name: string;


    @Column({
        comment: '活动描述'
    })
    description: string;

    @Column({
        comment: '活动时间'
    })
    time: Date;

    @Column({
        comment: '活动地点'
    })
    location: string

    @Column({
        comment: '活动状态'
    })
    status: number;


    @CreateDateColumn()
    ctime: Date;

    @UpdateDateColumn()
    utime: Date;

    //一个活动可以多个普通用户参加
    @ManyToMany(()=>General,general=>general.activity)
    @JoinTable()
    general:General[];

    //一个活动只有一个负责人
    @OneToOne(()=>Staff,{
        cascade:true //级联保存
    })
    staff:Staff;
     
    constructor(obj:any) {
        if(obj) {
          Object.assign(this, obj)
        }
      }
}
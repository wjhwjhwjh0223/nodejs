import { Entity, PrimaryGeneratedColumn, Column,JoinColumn, CreateDateColumn, UpdateDateColumn, OneToOne, ManyToMany, JoinTable, ManyToOne, OneToMany } from "typeorm";
import { General } from "./General";
import { Staff } from "./Staff";
import { ActivityGeneral } from "./ActivityGeneral";
import { activityRoutes } from "../router/activity";



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
        type: 'datetime',
        comment: '活动时间'
    })
    time: Date;

    @Column({
        comment: '活动地点'
    })
    location: string;

    @ManyToOne(() => Staff, staff => staff.activities)
    @JoinColumn({ name: "staffId" }) // 在Activity表中创建一个staffId的外键列
    staff: Staff;

    @OneToMany(() => ActivityGeneral, activityGeneral => activityGeneral.activity)
    activityGeneral: ActivityGeneral[];

    @Column({
        comment: '活动类型'
    })
    activityType: String;

    @Column({
        default: '计划中',
        comment: '活动状态'
    })
    status: string;

    @Column({
        type: 'int',
        default: 0,
        comment: '参与人数'
    })
    participantCount: number;


    @CreateDateColumn()
    ctime: Date;

    @UpdateDateColumn()
    utime: Date;

 
    

    constructor(obj: any) {
        if (obj) {
          Object.assign(this, obj);
        }
    }
}

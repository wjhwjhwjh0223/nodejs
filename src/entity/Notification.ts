import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn ,UpdateDateColumn,ManyToMany,JoinTable} from "typeorm";
import {General} from "./General"; // 引入通用实体

import {Staff} from "./Staff"
@Entity()
export class Notification {

    @PrimaryGeneratedColumn({
        comment: '主键，通知ID'
    })
    id: number;

    @Column({
        type: "text",
        comment: '通知内容'
    })
    content: string;

    @Column({
        comment: '通知状态（如：未读、已读）'
    })
    status: string;

    @CreateDateColumn()
    ctime: Date; // 创建时间

    @UpdateDateColumn()
    utime: Date; // 更新时间

    @ManyToMany(() => Staff)
    @JoinTable()
    staff: Staff[];

    @ManyToMany(() => General)
    @JoinTable()
    generalr: General[];

    constructor(obj: any) {
        if (obj) {
            Object.assign(this, obj);
        }
    }
}

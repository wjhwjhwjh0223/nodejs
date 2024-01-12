import { Entity, PrimaryGeneratedColumn, Column,  JoinColumn, CreateDateColumn ,UpdateDateColumn, OneToOne, ManyToOne} from "typeorm";

import { Staff } from "./Staff";
import { AppointmentService } from "./AppointmentService";
@Entity()
export class Feedback {
    @PrimaryGeneratedColumn({
        comment: '反馈ID'
    })
    id: number;

    @Column({
        comment: '评分'
    })
    rating: number;

    @Column({
        type: "text",
        comment: '评价内容'
    })
    comment: string;

    @ManyToOne(()=>Staff)
    staff:Staff

    @CreateDateColumn()
    ctime: Date;
  
    @UpdateDateColumn()
    utime: Date;

    // @JoinColumn()
    // @OneToOne(() => AppointmentService, {cascade: true})
    // appointmentService: AppointmentService

    constructor(obj: Partial<Feedback>) {
        if (obj) {
            Object.assign(this, obj);
        }
    }


}

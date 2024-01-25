import { ManyToMany,Entity, Unique,PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, OneToOne,OneToMany } from "typeorm";

//管理员账号
@Entity()
export class User {
    
    @PrimaryGeneratedColumn({
        comment:'主键',
    })
    id:number

    @Column({
        comment:'管理员账号',
    })
    account:string


    @Column({
        comment:"管理员密码",
    })
    password: string;

    @Column({
        comment:'管理员',
    })
    name: string;
    
    @CreateDateColumn()
    ctime: Date;
  
    @UpdateDateColumn()
    utime: Date;
}
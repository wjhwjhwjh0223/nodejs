import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";


// @Entity()  表示User是数据库中的user表
@Entity()
export class File {
  
  // 主键
  @PrimaryGeneratedColumn({
    // 解释
    comment: '主键：id'
  })
  id: number;

  @Column()
  filePath: string

  @Column({
    comment: '原始文件名字'
  }) 
  originalFilename: string

  constructor(obj?:Partial<File>) {
    if(obj) {
      Object.assign(this, obj)
    }
  }
}

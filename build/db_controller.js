"use strict";
// 对学生表进行，增删改查操作
// 增删改 【简单】
Object.defineProperty(exports, "__esModule", { value: true });
// 初始化数据库链接
// 异步的过程,链接完成之后，进入then方法
// AppDataSource.initialize().then( async () => {
//   console.log('数据库链接成功！！')
//   // 新增，新增商品
//   // 1. 构造商品对象
//   const goods1 = new Goods()
//   goods1.goodsName = '商品1~~'
//   goods1.price = 32
//   // 1.2 创建方式
//   const goods2 = new Goods({
//     goodsName: '商品2',
//     price: 10
//   })
//   // 2. 得到了goods这张表，我就可以往这张表中增删改查
//   const goodsRepository = AppDataSource.getRepository(Goods)
//   // 3.想goods表（第二步）插入数据（第一步）
//   // await就是等着操作数据库这个过程完成 
//   // 单个插入 ----
//   // const res = await goodsRepository.insert(goods1)
//   // 插入多个  *****
//   const res = await goodsRepository.save([goods1, goods2])
//   console.log('插入成功了！')
//   console.log(res)
// })
// goods的编辑
// AppDataSource.initialize().then( async () => {
//   // 1.准备数据，数据一定要有id
//   const goods = new Goods({
//     id: 1,
//     price: 300
//   })
//   // 2. 得到goods的数据表（仓库）
//   const goodsRepository = AppDataSource.getRepository(Goods)
//   // 3. 去更新（save方法）
//   // 3.1 没有id就新增
//   // 3.2 有id就去更新
//   // 试验： id不存在（自己试）
//   // 批量更新【自己试试】
//   const res = await goodsRepository.save(goods)
//   console.log('更新成功')
//   console.log(res)
// })
// goods的删除
// AppDataSource.initialize().then( async () => {
//   console.log('数据库链接成功')
//   // 1.准备数据，数据一定要有id
//   const id = 3
//   const ids = [4,5,8]
//   // 2. 得到goods的数据表（仓库）
//   const goodsRepository = AppDataSource.getRepository(Goods)
//   // 3. 去更新（save方法）
//   const res = await goodsRepository.delete(ids)
//   console.log('删除成功')
//   console.log(res)
// })
// // 查询
// AppDataSource.initialize().then( async () => {
//   console.log('数据库链接成功')
//   // 1. 得到goods的数据表（仓库）
//   const goodsRepository = AppDataSource.getRepository(Goods)
// 查询 - 所有
// const res = await goodsRepository.findAndCount()
// console.log(res)
//  查询 - 分页查询
// pageNum: 1 pageSize: 10  ---> skip: 0   take: 10
// pageNum: 2 pageSize: 10  ---> skip: 10   take: 10
// pageNum: 3 pageSize: 10  ---> skip: 20   take: 10
// ...
// skip =  (pageNum - 1) * pageSize     take = pageSize
// const pageNum = 3
// const pageSize = 10
// const res = await goodsRepository.findAndCount({
//   // 我跳过几个，拿多少个
//   // 跳过
//   skip: (pageNum - 1) * pageSize,
//   // 拿
//   take: pageSize
// })
// console.log(res)
// 模糊查询
// const res = await goodsRepository.findAndCount({
//   where: {
//     // goodsName: '商品1'
//     goodsName: Like('%商%')
//   }
// })
// console.log(res)
// 日期范围
// const startDate = new Date('2023-12-12')
// const endDate = new Date('2023-12-25 23:00:00')
// const res = await goodsRepository.findAndCount({
//   where: {
//     ctime: Between(startDate, endDate),
//     goodsName: '商品1'
//   }
// })
// console.log(res)
// 根据id升降序排列
//   const res = await goodsRepository.findAndCount({
//     order: {
//       utime: 'ASC'
//     }
//   })
//   console.log(res)
// })
// 单个新增
// AppDataSource.initialize().then(async () => {
//   // 实例化entity
//   const student = new Student({
//     name: '张三1',
//     desc: 'sdfsfdsfs',
//     age: 20,
//     hobby: JSON.stringify(['唱', '跳', 'rap', '篮球'])
//   })
//   const studentRepository = AppDataSource.getRepository(Student)
//   await studentRepository.insert(student)
//   const res = await studentRepository.find()
//   console.log(res)
// })
// 批量新增--------
// AppDataSource.initialize().then(async () => {
//   // 实例化entity
//   const students = [
//     new Student({
//       name: '张三',
//       desc: 'sdfsfdsfs',
//       age: 20,
//       hobby: JSON.stringify(['唱', '跳', 'rap', '篮球'])
//     }),
//     new Student({
//       name: '张三1',
//       desc: 'sdfsfdsfs',
//       age: 20,
//       hobby: JSON.stringify(['唱', '跳', 'rap', '篮球'])
//     }),
//     new Student({
//       name: '张三2',
//       desc: 'sdfsfdsfs',
//       age: 20,
//       hobby: JSON.stringify(['唱', '跳', 'rap', '篮球'])
//     }),
//     new Student({
//       name: '张三3',
//       desc: 'sdfsfdsfs',
//       age: 20,
//       hobby: JSON.stringify(['唱', '跳', 'rap', '篮球'])
//     })
//   ]
//   const studentRepository = AppDataSource.getRepository(Student)
//   await studentRepository.insert(students)
//   const res = await studentRepository.find()
//   console.log(res)
// })
// 修改
// AppDataSource.initialize().then(async () => {
//   const studentRepository = AppDataSource.getRepository(Student)
//   // 传入id更新
//   const student = new Student()
//   student.id = 2
//   student.name = '修改了哟'
//   await studentRepository.save(student)
// })
// 删除
// AppDataSource.initialize().then(async () => {
//   const studentRepository = AppDataSource.getRepository(Student)
//   // 单个删除
//   // studentRepository.delete(2)
//   // 批量删除
//   // studentRepository.delete([7,8])
// })
// 查询-id查询
// AppDataSource.initialize().then(async () => {
//   const studentRepository = AppDataSource.getRepository(Student)  
// })
// 查询-条件查询
// AppDataSource.initialize().then(async () => {
// const studentRepository = AppDataSource.getRepository(Student)  
// 查询全部 -----
// studentRepository.find()
// 根据id查询 --- 
// const res = await studentRepository.findBy({
//   id: 3
// })
// 分页查询
// const res = await studentRepository.findAndCount({
//   // (pagenum - 1) * pagesize
//   skip: 0,
//   // pagesize
//   take: 2,
//   order: {
//     utime: 'ASC',
//   }
// })
// console.log(res)
// 模糊查询
// const res = await studentRepository.find({
//   where: {
//     name: Like('%张%')
//   }
// })
// console.log(res)
// 日期范围查询
//   const startDate = new Date('2023-12-01');
//   const endDate = new Date('2023-12-31');
//   const res = await studentRepository.find({
//     where: {
//       ctime: Between(startDate, endDate)
//     }
//   })
//   console.log(res)
// })
// 操作数据库
// 周一：使用node（js） 去操作数据库。 （单个表的增删改查）  typeorm（思想）
// 周二：uniapp   数据库（一对多）  
// 周三：讲后台接口编写    
// 周四  （接口就出来）
// 周五  前后端联调
//# sourceMappingURL=db_controller.js.map
/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80034
 Source Host           : localhost:3306
 Source Schema         : old

 Target Server Type    : MySQL
 Target Server Version : 80034
 File Encoding         : 65001

 Date: 14/03/2024 23:21:36
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for activity
-- ----------------------------
DROP TABLE IF EXISTS `activity`;
CREATE TABLE `activity`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键,活动id',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '活动名称',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '活动描述',
  `time` datetime NOT NULL COMMENT '活动时间',
  `location` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '活动地点',
  `ctime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `utime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `participantCount` int NOT NULL DEFAULT 0 COMMENT '参与人数',
  `activityType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '活动类型',
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '计划中' COMMENT '活动状态',
  `staffId` int NULL DEFAULT NULL COMMENT '主键,员工id',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '图片地址',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK_36726f43f50ebc79f774c4e16e1`(`staffId` ASC) USING BTREE,
  CONSTRAINT `FK_36726f43f50ebc79f774c4e16e1` FOREIGN KEY (`staffId`) REFERENCES `staff` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of activity
-- ----------------------------
INSERT INTO `activity` VALUES (7, '打麻将', '大爷大妈们打麻将', '2024-01-06 17:41:09', '重庆', '2024-01-06 18:24:43.648012', '2024-03-09 23:00:11.000000', 10, '社交活动', '已同意', 123457, 'http://localhost:3000/1705720802665.jpg');
INSERT INTO `activity` VALUES (8, '休闲乒乓球', '大爷大妈们愉快的打乒乓球', '2024-01-09 19:00:16', '体育馆', '2024-01-09 19:00:39.168838', '2024-02-01 09:30:42.441508', 10, '体育活动', '已同意', 123463, 'http://localhost:3000/1706149653669.jpg');
INSERT INTO `activity` VALUES (9, '跳广场舞', 'xxx', '2024-01-13 00:00:00', '广场', '2024-01-10 11:52:08.590330', '2024-02-01 09:30:41.179062', 20, '音乐和舞蹈', '已拒绝', 123456, 'http://localhost:3000/1706149653669.jpg');
INSERT INTO `activity` VALUES (10, '社交舞蹈', '邀请老人们在广场下跳双人舞蹈', '2024-01-13 00:00:00', '社区', '2024-01-11 15:02:54.321322', '2024-03-09 23:00:49.000000', 10, '音乐和舞蹈', '已完成', 123467, 'http://localhost:3000/1705720802665.jpg');
INSERT INTO `activity` VALUES (11, '社区春季聚会', '一年一度的社区春季聚会，居民们可以一起分享美食，进行社交互动。', '2024-01-18 17:27:28', '社区公园', '2024-01-18 17:27:39.530806', '2024-02-01 09:30:37.649229', 50, '社交活动', '已同意', 123467, 'http://localhost:3000/1705720802665.jpg');
INSERT INTO `activity` VALUES (12, '社区周末茶话会', '本周六下午在社区中心举行茶话会，邀请大家交流心得，增进邻里感情', '2024-01-20 11:19:48', '社区活动中心', '2024-01-20 11:20:08.256177', '2024-01-20 15:57:40.000000', 50, '社交活动', '已同意', 123457, 'http://localhost:3000/1705720802665.jpg');
INSERT INTO `activity` VALUES (13, '111', '222', '2024-01-25 00:00:00', '社区', '2024-01-25 10:27:38.223512', '2024-01-25 10:28:00.000000', 20, '社交活动', '已同意', 123456, 'http://localhost:3000/1706149653669.jpg');
INSERT INTO `activity` VALUES (14, '养生瑜伽课程', '适合所有年龄段的居民，让我们一起练习瑜伽，享受健康生活', '2024-08-20 09:00:00', '社区健身中心', '2024-02-01 20:57:06.836965', '2024-02-01 20:59:26.000000', 25, '健康与养生', '已同意', 123457, 'http://localhost:3000/1706792126541.jpg');
INSERT INTO `activity` VALUES (15, '篮球友谊赛', '欢迎各位篮球爱好者参加友谊赛，一起享受篮球乐趣！', '2024-03-13 00:00:00', ' XX体育馆', '2024-03-09 22:43:59.423519', '2024-03-09 22:44:24.000000', 20, '体育活动', '已同意', 123468, 'http://localhost:3000/1709995435743.jpg');
INSERT INTO `activity` VALUES (16, '打篮球', '在社区开展篮球活动', '2024-03-11 00:00:00', '社区广场', '2024-03-10 10:08:23.453455', '2024-03-10 10:08:50.000000', 20, '体育活动', '已同意', 123468, 'http://localhost:3000/1710036500554.jpg');

-- ----------------------------
-- Table structure for activity_general
-- ----------------------------
DROP TABLE IF EXISTS `activity_general`;
CREATE TABLE `activity_general`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键：id',
  `num` int NOT NULL COMMENT '数量',
  `generalId` int NULL DEFAULT NULL COMMENT '主键：id',
  `activityId` int NULL DEFAULT NULL COMMENT '主键,活动id',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK_18fba501a47f325875205e30bb2`(`generalId` ASC) USING BTREE,
  INDEX `FK_999bf0e471886590e2085d47da4`(`activityId` ASC) USING BTREE,
  CONSTRAINT `FK_18fba501a47f325875205e30bb2` FOREIGN KEY (`generalId`) REFERENCES `general` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_999bf0e471886590e2085d47da4` FOREIGN KEY (`activityId`) REFERENCES `activity` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 31 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of activity_general
-- ----------------------------
INSERT INTO `activity_general` VALUES (14, 1, 1007, 12);
INSERT INTO `activity_general` VALUES (15, 1, 1007, 10);
INSERT INTO `activity_general` VALUES (18, 1, 123474, 12);
INSERT INTO `activity_general` VALUES (19, 1, 123474, 11);
INSERT INTO `activity_general` VALUES (20, 1, 123471, 8);
INSERT INTO `activity_general` VALUES (21, 1, 123467, 8);
INSERT INTO `activity_general` VALUES (23, 1, 1003, 11);
INSERT INTO `activity_general` VALUES (24, 1, 1003, 13);
INSERT INTO `activity_general` VALUES (25, 1, 1007, 11);
INSERT INTO `activity_general` VALUES (26, 1, 1003, 10);
INSERT INTO `activity_general` VALUES (28, 1, 123476, 15);
INSERT INTO `activity_general` VALUES (29, 1, 123476, 11);
INSERT INTO `activity_general` VALUES (30, 1, 123477, 16);
INSERT INTO `activity_general` VALUES (31, 1, 1003, 7);

-- ----------------------------
-- Table structure for appointment_service
-- ----------------------------
DROP TABLE IF EXISTS `appointment_service`;
CREATE TABLE `appointment_service`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键,预约ID',
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '待确认' COMMENT '预约状态（如：待确认、已确认、已取消 已完成）',
  `ctime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `utime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `generalId` int NULL DEFAULT NULL COMMENT '主键：id',
  `staffId` int NULL DEFAULT NULL COMMENT '主键,员工id',
  `serviceType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '服务类型',
  `serviceDescription` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '服务描述',
  `cancellationReason` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '取消原因',
  `specialRequirements` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '无' COMMENT '特殊要求',
  `appointmentTime` datetime NOT NULL COMMENT '预约时间',
  `feedbackId` int NULL DEFAULT NULL COMMENT '反馈ID',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `REL_86535494ab2203a6ca918da229`(`feedbackId` ASC) USING BTREE,
  INDEX `FK_b72954f96e49e31eeaa2abf182c`(`generalId` ASC) USING BTREE,
  INDEX `FK_054035892daa7cd56acc828ff1c`(`staffId` ASC) USING BTREE,
  CONSTRAINT `FK_054035892daa7cd56acc828ff1c` FOREIGN KEY (`staffId`) REFERENCES `staff` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_86535494ab2203a6ca918da2297` FOREIGN KEY (`feedbackId`) REFERENCES `feedback` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_b72954f96e49e31eeaa2abf182c` FOREIGN KEY (`generalId`) REFERENCES `general` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 43 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of appointment_service
-- ----------------------------
INSERT INTO `appointment_service` VALUES (13, '已完成', '2024-01-12 10:59:09.558000', '2024-01-13 10:52:19.000000', 123467, 123465, '医疗护理', '1212', NULL, '32323', '2024-01-11 15:10:04', NULL);
INSERT INTO `appointment_service` VALUES (14, '已接取', '2024-01-11 15:11:14.840512', '2024-01-13 11:46:17.000000', 123467, 123463, '家政服务', '打扫清洁', NULL, '', '2024-01-27 00:00:00', NULL);
INSERT INTO `appointment_service` VALUES (15, '已通过', '2024-01-11 15:15:03.907968', '2024-01-11 15:31:57.000000', 1007, NULL, '医疗护理', '121221', NULL, '', '2024-01-26 00:00:00', NULL);
INSERT INTO `appointment_service` VALUES (16, '已通过', '2024-01-11 15:15:40.760875', '2024-01-11 15:31:57.000000', 1007, NULL, '餐饮服务', '122121', NULL, '', '2024-01-19 00:00:00', NULL);
INSERT INTO `appointment_service` VALUES (17, '已接取', '2024-01-11 15:15:52.486043', '2024-01-15 16:27:35.000000', 1007, 123456, '医疗护理', '1212', NULL, '', '2024-01-31 00:00:00', NULL);
INSERT INTO `appointment_service` VALUES (18, '已拒绝', '2024-01-11 15:17:00.271396', '2024-01-12 14:46:55.000000', 1007, NULL, '健康监护', 'xx', NULL, '', '2024-01-18 00:00:00', NULL);
INSERT INTO `appointment_service` VALUES (32, '已评价', '2024-01-13 10:57:10.817880', '2024-01-13 10:58:42.000000', 123473, 123457, '医疗护理', '生病了需要陪同', NULL, '无要求', '2024-01-13 10:57:06', 17);
INSERT INTO `appointment_service` VALUES (33, '已评价', '2024-01-13 11:21:55.516686', '2024-01-13 11:25:16.000000', 123471, 123463, '健康监护', '陪我去山上扳苞谷', NULL, '力气大，身高180cm优先', '2024-01-13 11:21:37', 18);
INSERT INTO `appointment_service` VALUES (35, '待确认', '2024-01-22 17:40:04.054484', '2024-01-22 17:40:04.054484', 123474, NULL, '家政服务', '需要打扫客厅和卧室', NULL, '希望使用环保清洁产品', '2024-01-29 15:39:32', NULL);
INSERT INTO `appointment_service` VALUES (36, '已评价', '2024-01-24 09:21:12.452024', '2024-01-24 11:29:50.000000', 1003, 123457, '医疗护理', '老年人日常照护，包括用药提醒和基本的身体检查。', NULL, '护理人员需要有老年护理经验。', '2024-02-25 09:20:54', 19);
INSERT INTO `appointment_service` VALUES (37, '已取消', '2024-01-24 09:44:54.073366', '2024-03-10 10:10:55.000000', 1003, 123457, '健康监护', ' 定期监测心脏病患者的健康状况', '没空', '需要具备心脏病护理经验的医护人员', '2024-01-29 09:44:29', NULL);
INSERT INTO `appointment_service` VALUES (38, '已取消', '2024-01-24 09:46:26.399743', '2024-01-24 11:49:52.000000', 1003, NULL, '餐饮服务', '为家庭聚会提供餐饮服务，大约20人', '临时有事情', '提供素食选项，注重食物新鲜度', '2024-01-25 15:46:08', NULL);
INSERT INTO `appointment_service` VALUES (39, '待确认', '2024-01-30 15:29:11.425972', '2024-01-30 15:29:11.425972', 1003, NULL, '餐饮服务', '每日三餐配送，注重营养均衡', NULL, '无特定食物过敏，偏好低盐食物', '2024-01-31 19:28:50', NULL);
INSERT INTO `appointment_service` VALUES (40, '已评价', '2024-02-01 21:09:20.996633', '2024-02-01 21:19:14.000000', 1003, 123457, '医疗护理', '寻求专业护士进行日常糖尿病护理和注射', NULL, '护士需要有处理糖尿病病患经验', '2024-05-10 10:00:00', 20);
INSERT INTO `appointment_service` VALUES (41, '已评价', '2024-03-09 22:14:18.950554', '2024-03-09 22:15:54.000000', 123476, 123468, '家政服务', '需要清洁卫生打扫家中环境', NULL, '对食材新鲜度和菜品口味有一定要求', '2024-03-10 09:00:00', 21);
INSERT INTO `appointment_service` VALUES (42, '已评价', '2024-03-10 10:04:18.461131', '2024-03-10 10:05:58.000000', 123477, 123469, '家政服务', '需要上门打扫清洁', NULL, '无', '2024-03-10 18:00:00', 22);
INSERT INTO `appointment_service` VALUES (43, '待确认', '2024-03-10 10:10:16.574784', '2024-03-10 10:10:16.574784', 1003, NULL, '餐饮服务', '上门做饭', NULL, '无', '2024-03-10 14:09:59', NULL);

-- ----------------------------
-- Table structure for emergency_response
-- ----------------------------
DROP TABLE IF EXISTS `emergency_response`;
CREATE TABLE `emergency_response`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键,紧急响应ID',
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '紧急事件类型，例如：医疗紧急情况、安全事件等',
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '待响应' COMMENT '响应状态（如：待响应、处理中、已解决）',
  `ctime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '紧急事件报告时间',
  `utime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '最后更新时间',
  `location` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '地点',
  `generalId` int NULL DEFAULT NULL COMMENT '主键：id',
  `details` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '紧急事件详情',
  `flow` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '流程',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK_b37840ee16600c52a027583e834`(`generalId` ASC) USING BTREE,
  CONSTRAINT `FK_b37840ee16600c52a027583e834` FOREIGN KEY (`generalId`) REFERENCES `general` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 35 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of emergency_response
-- ----------------------------
INSERT INTO `emergency_response` VALUES (13, '医疗紧急情况', '已完成', '2024-01-19 10:51:37.062657', '2024-01-19 14:53:57.000000', '光明社区居委会附近', 123471, '突发心脏病发作，需要立即医疗援助', '内马尔, 萨达正在前往紧急地点光明社区居委会附近/ 时间: 2024-01-19 14:33:54.内马尔, 萨达正在前往紧急地点光明社区居委会附近/ 时间: 2024-01-19 14:34:05.邹家俊1, 萨达正在前往紧急地点光明社区居委会附近/ 时间: 2024-01-19 14:36:12.邹家俊1, 萨达正在前往紧急地点光明社区居委会附近/ 时间: 2024-01-19 14:37:19.邹家俊1, 萨达正在前往紧急地点光明社区居委会附近/ 时间: 2024-01-19 14:39:55.邹家俊1, 萨达正在前往紧急地点光明社区居委会附近/ 时间: 2024-01-19 14:41:25.邹家俊1, 萨达正在前往紧急地点光明社区居委会附近/ 时间: 2024-01-19 14:42:06.邹家俊1, 萨达正在前往紧急地点光明社区居委会附近/ 时间: 2024-01-19 14:43:09.事件ID:13 事件类型:医疗紧急情况已解决/ 时间: 2024-01-19 14:53:57.');
INSERT INTO `emergency_response` VALUES (15, '安全事件', '已完成', '2024-01-19 14:35:45.986839', '2024-01-19 14:55:02.000000', '中央公园东入口', 123474, '发现可疑人员徘徊，社区安全感受到威胁', 'dd创建了紧急服务,选择了工作人员:邹家俊1, 萨达/ 时间: 2024-01-19 14:35:45.邹家俊1, 萨达正在前往紧急地点中央公园东入口/ 时间: 2024-01-19 14:46:53.事件ID:15 事件类型:安全事件已解决/ 时间: 2024-01-19 14:55:02.');
INSERT INTO `emergency_response` VALUES (17, '火灾', '已完成', '2024-01-25 10:28:59.293699', '2024-01-25 10:31:43.000000', '社区', 1007, '111', '周童创建了紧急服务,选择了工作人员:吴骏浩, 吴骏浩/ 时间: 2024-01-25 10:28:59.吴骏浩, 吴骏浩正在前往紧急地点社区/ 时间: 2024-01-25 10:29:57.事件ID:17 事件类型:火灾已解决/ 时间: 2024-01-25 10:31:43.');
INSERT INTO `emergency_response` VALUES (29, '火灾', '待响应', '2024-01-25 17:27:05.895209', '2024-01-25 17:27:05.895209', '重庆市沙坪坝区覃家岗街道凤天大道重庆市沙坪坝区人民政府', 1003, '火灾', '曾三三创建了紧急服务,选择了工作人员:内马尔, 吴骏浩, 邹家俊1/ 时间: 2024-01-25 17:27:05.');
INSERT INTO `emergency_response` VALUES (31, '自然灾害', '已完成', '2024-02-01 21:25:33.598209', '2024-02-01 21:28:52.000000', '静谧苑小区', 1003, '由于连续降雨，小区内部道路积水严重，老年人出行困难', '测试创建了紧急服务,选择了工作人员:内马尔, 小妹, 吴骏浩/ 时间: 2024-02-01 21:25:33.内马尔, 小妹, 吴骏浩正在前往紧急地点静谧苑小区/ 时间: 2024-02-01 21:27:51.事件ID:31 事件类型:自然灾害已解决/ 时间: 2024-02-01 21:28:52.');
INSERT INTO `emergency_response` VALUES (32, '火灾', '待响应', '2024-03-09 22:39:48.426402', '2024-03-09 22:39:48.426402', '重庆市', 123476, '突发火灾，需要紧急救援。', '张三三创建了紧急服务,选择了工作人员:内马尔, 小妹/ 时间: 2024-03-09 22:39:48.');
INSERT INTO `emergency_response` VALUES (33, '火灾', '已完成', '2024-03-09 22:40:35.012185', '2024-03-09 22:41:00.000000', '重庆市', 123476, '突发火灾，需要紧急救援。', '张三三创建了紧急服务,选择了工作人员:Jane Smith/ 时间: 2024-03-09 22:40:35.Jane Smith正在前往紧急地点重庆市/ 时间: 2024-03-09 22:40:53.事件ID:33 事件类型:火灾已解决/ 时间: 2024-03-09 22:41:00.');
INSERT INTO `emergency_response` VALUES (34, '火灾', '已完成', '2024-03-10 10:06:38.862627', '2024-03-10 10:07:29.000000', '重庆市', 123477, '失火', 'wjh创建了紧急服务,选择了工作人员:内马尔, Jane Smith/ 时间: 2024-03-10 10:06:38.内马尔, Jane Smith正在前往紧急地点重庆市/ 时间: 2024-03-10 10:07:20.事件ID:34 事件类型:火灾已解决/ 时间: 2024-03-10 10:07:29.');
INSERT INTO `emergency_response` VALUES (35, '', '待响应', '2024-03-10 10:09:57.219681', '2024-03-10 10:09:57.219681', '重庆市渝中区上清寺街道曾家岩南山泉水豆花重庆市财政税务局住宅', 1003, '12321', '测试创建了紧急服务,选择了工作人员:内马尔, 小妹/ 时间: 2024-03-10 10:09:57.');

-- ----------------------------
-- Table structure for feedback
-- ----------------------------
DROP TABLE IF EXISTS `feedback`;
CREATE TABLE `feedback`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '反馈ID',
  `comment` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '评价内容',
  `ctime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `utime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `staffId` int NULL DEFAULT NULL COMMENT '主键,员工id',
  `rating` int NOT NULL COMMENT '评分',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK_c1a4f53e023c8bb7c384009839b`(`staffId` ASC) USING BTREE,
  CONSTRAINT `FK_c1a4f53e023c8bb7c384009839b` FOREIGN KEY (`staffId`) REFERENCES `staff` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of feedback
-- ----------------------------
INSERT INTO `feedback` VALUES (14, '1212', '2024-01-12 11:00:23.235751', '2024-01-12 17:26:03.525913', 123465, 5);
INSERT INTO `feedback` VALUES (15, '非常好', '2024-01-12 11:14:42.985555', '2024-01-12 17:26:04.867358', 123465, 4);
INSERT INTO `feedback` VALUES (16, '非常棒', '2024-01-12 11:25:38.889243', '2024-01-12 17:26:07.988320', 123463, 3);
INSERT INTO `feedback` VALUES (17, '非常棒', '2024-01-13 10:58:42.411586', '2024-01-13 10:58:42.411586', 123457, 5);
INSERT INTO `feedback` VALUES (18, 'nice', '2024-01-13 11:25:16.525209', '2024-01-13 11:25:16.525209', 123463, 5);
INSERT INTO `feedback` VALUES (19, '服务态度非常好，很满意', '2024-01-24 11:29:50.530806', '2024-01-24 11:29:50.530806', 123457, 5);
INSERT INTO `feedback` VALUES (20, '非常棒', '2024-02-01 21:19:14.201951', '2024-02-01 21:19:14.201951', 123457, 5);
INSERT INTO `feedback` VALUES (21, '服务满意', '2024-03-09 22:15:54.819881', '2024-03-09 22:15:54.819881', 123468, 5);
INSERT INTO `feedback` VALUES (22, '非常好', '2024-03-10 10:05:58.301214', '2024-03-10 10:05:58.301214', 123469, 5);

-- ----------------------------
-- Table structure for general
-- ----------------------------
DROP TABLE IF EXISTS `general`;
CREATE TABLE `general`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键：id',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户姓名',
  `age` int NOT NULL COMMENT '用户年龄',
  `sex` int NOT NULL COMMENT '用户性别',
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '电话',
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '地址',
  `ctime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `utime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `account` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户账号',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '123456' COMMENT '用户密码',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '图片地址',
  `vxname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '微信名',
  `contacts` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '紧急联系人电话',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `IDX_e569c87c5d0c2d1703e7c1e758`(`account` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 123477 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of general
-- ----------------------------
INSERT INTO `general` VALUES (1003, '测试', 111, 0, '1234', '上海市', '2023-12-30 13:34:33.862918', '2024-02-01 10:26:08.000000', '123469', '142536', 'http://localhost:3000/1705295860527.jpg', '你听得到', '');
INSERT INTO `general` VALUES (1007, '周童', 11, 2, '1234', '巴南', '2023-12-30 14:16:28.038794', '2024-01-15 16:46:33.000000', '123458', '123456', 'http://localhost:3000/1705308391537.jpg', '', '');
INSERT INTO `general` VALUES (123467, '邓礼2号', 22, 1, '123551', '荣昌', '2024-01-02 19:05:44.456458', '2024-01-15 16:49:17.000000', '1234601', '123456', 'http://localhost:3000/1705308556531.jpg', '', '');
INSERT INTO `general` VALUES (123471, '德萨', 12, 1, '15523307924', '巴内森大街20号', '2024-01-03 22:45:22.411173', '2024-01-15 17:13:48.000000', 'dasdasd', '123456', 'http://localhost:3000/1705310026965.jpg', '', '');
INSERT INTO `general` VALUES (123473, '邓礼4号', 12, 0, '21212', '重庆', '2024-01-04 17:03:21.416658', '2024-01-15 17:14:18.000000', 'zbncca', '000000', 'http://localhost:3000/1705310057471.jpg', '', '');
INSERT INTO `general` VALUES (123474, 'dd', 12, 1, '15523307924', '巴内森大街20号', '2024-01-04 17:05:37.065572', '2024-01-04 17:05:37.065572', '121215', '123456', 'http://localhost:3000/1704359135699.jpg', '', '');
INSERT INTO `general` VALUES (123476, '张三三', 88, 0, '138123456782', '北京市朝阳区111', '2024-03-09 22:01:44.857388', '2024-03-09 22:07:09.000000', 'example123', '142536', 'http://localhost:3000/1709992474634.jpg', NULL, '139876543212');
INSERT INTO `general` VALUES (123477, 'wjh', 88, 1, '15523307924', '巴内森大街20号', '2024-03-10 10:02:01.225236', '2024-03-10 10:02:01.225236', 'user123', '147258369', 'http://localhost:3000/1710036120310.jpg', NULL, '3323311111');

-- ----------------------------
-- Table structure for health_record
-- ----------------------------
DROP TABLE IF EXISTS `health_record`;
CREATE TABLE `health_record`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键,健康档案ID',
  `health` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '健康信息',
  `medical` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '病史详情',
  `ctime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `utime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `dob` date NOT NULL COMMENT '出生日期',
  `generalId` int NULL DEFAULT NULL COMMENT '主键：id',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `REL_de4440a02dbd7631c71366a198`(`generalId` ASC) USING BTREE,
  CONSTRAINT `FK_de4440a02dbd7631c71366a1989` FOREIGN KEY (`generalId`) REFERENCES `general` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of health_record
-- ----------------------------
INSERT INTO `health_record` VALUES (6, '良好，无慢性疾病', '有点小感冒，但不严重', '2024-01-15 15:23:32.359780', '2024-01-15 15:30:01.000000', '1945-06-15', 1003);
INSERT INTO `health_record` VALUES (9, '身高163cm，体重55kg，轻度近视，定期锻炼', '有过一次阑尾炎手术，无家族遗传病史', '2024-01-15 17:10:06.553277', '2024-01-15 17:10:06.553277', '1945-07-05', 1007);
INSERT INTO `health_record` VALUES (10, '身高158cm，体重48kg，健康状况良好，定期体检', '曾因骨折进行过手术治疗，已完全康复，无过敏情况', '2024-01-15 17:12:33.297494', '2024-01-15 17:12:33.297494', '1955-07-07', 123467);
INSERT INTO `health_record` VALUES (11, '身高180cm，体重80kg，血糖偏高，正在进行饮食控制和运动疗法', '患有高血压，正在规律服药，无其他重大疾病', '2024-01-15 17:13:33.899942', '2024-01-15 17:13:33.899942', '1971-02-16', 123471);
INSERT INTO `health_record` VALUES (12, '身高170cm，体重72kg，存在一定程度的腰椎间盘突出，需要避免重体力劳动', '有哮喘病史，需随身携带应急药物，无其他严重疾病', '2024-01-15 17:14:48.767802', '2024-01-15 17:14:48.767802', '1969-10-16', 123473);
INSERT INTO `health_record` VALUES (13, '身高175cm，体重68kg，血压正常，无慢性疾病', '无手术史，无过敏史，偶尔有轻微感冒', '2024-01-15 17:15:54.299076', '2024-01-15 17:15:54.299076', '1985-02-05', 123474);

-- ----------------------------
-- Table structure for notification
-- ----------------------------
DROP TABLE IF EXISTS `notification`;
CREATE TABLE `notification`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键，通知ID',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '通知内容',
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '通知状态（如：未读、已读）',
  `ctime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `utime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of notification
-- ----------------------------

-- ----------------------------
-- Table structure for notification_generalr_general
-- ----------------------------
DROP TABLE IF EXISTS `notification_generalr_general`;
CREATE TABLE `notification_generalr_general`  (
  `notificationId` int NOT NULL,
  `generalId` int NOT NULL,
  PRIMARY KEY (`notificationId`, `generalId`) USING BTREE,
  INDEX `IDX_ef611d533f01e4de76317ce401`(`notificationId` ASC) USING BTREE,
  INDEX `IDX_c3a8a8d2f73bbdf424bf3c32b1`(`generalId` ASC) USING BTREE,
  CONSTRAINT `FK_c3a8a8d2f73bbdf424bf3c32b17` FOREIGN KEY (`generalId`) REFERENCES `general` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_ef611d533f01e4de76317ce4019` FOREIGN KEY (`notificationId`) REFERENCES `notification` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of notification_generalr_general
-- ----------------------------

-- ----------------------------
-- Table structure for notification_staff_staff
-- ----------------------------
DROP TABLE IF EXISTS `notification_staff_staff`;
CREATE TABLE `notification_staff_staff`  (
  `notificationId` int NOT NULL,
  `staffId` int NOT NULL,
  PRIMARY KEY (`notificationId`, `staffId`) USING BTREE,
  INDEX `IDX_8a4839c408cb2391c21c00f448`(`notificationId` ASC) USING BTREE,
  INDEX `IDX_104312f02c07d3b962b79997e7`(`staffId` ASC) USING BTREE,
  CONSTRAINT `FK_104312f02c07d3b962b79997e71` FOREIGN KEY (`staffId`) REFERENCES `staff` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_8a4839c408cb2391c21c00f4481` FOREIGN KEY (`notificationId`) REFERENCES `notification` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of notification_staff_staff
-- ----------------------------

-- ----------------------------
-- Table structure for staff
-- ----------------------------
DROP TABLE IF EXISTS `staff`;
CREATE TABLE `staff`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键,员工id',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '员工姓名',
  `age` int NOT NULL COMMENT '员工年龄',
  `sex` int NOT NULL COMMENT '员工性别',
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '员工地址',
  `ctime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `utime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `account` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户账号',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '123456' COMMENT '用户密码',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '图片地址',
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '员工手机号',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `IDX_f68b40fe599d66fd5b1d7ec9bf`(`account` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 123469 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of staff
-- ----------------------------
INSERT INTO `staff` VALUES (123456, '内马尔', 31, 1, '巴西', '2023-12-30 22:02:00.994503', '2024-01-15 16:24:53.000000', 'vwx', '142536', 'http://localhost:3000/1705306982113.jpg', '235634645');
INSERT INTO `staff` VALUES (123457, '小妹', 40, 0, '巴内森大街20号', '2024-01-03 22:42:13.713493', '2024-01-28 15:42:23.520979', '12131231', '123456', 'http://localhost:3000/1705308605864.jpg', '15523307924');
INSERT INTO `staff` VALUES (123463, '吴骏浩', 21, 1, '巴内森大街20号', '2024-01-03 22:48:42.051434', '2024-01-17 15:53:30.662644', 'qwertt', '123456', 'http://localhost:3000/1705308871728.jpg', '15523307924');
INSERT INTO `staff` VALUES (123465, '邹家俊1', 21, 1, '巴内森大街20号', '2024-01-03 23:12:00.213633', '2024-01-17 15:53:33.027684', 'sdasd1', '123456', 'http://localhost:3000/1705308900278.jpg', '15523307924');
INSERT INTO `staff` VALUES (123467, '萨达', 52, 0, '巴内森大街20号1', '2024-01-04 17:04:43.780186', '2024-03-09 22:07:24.000000', '12112', '123456', 'http://localhost:3000/1705308919376.jpg', '155233079242');
INSERT INTO `staff` VALUES (123468, 'Jane Smith', 25, 0, '456 Elm Street, Town', '2024-03-09 22:06:38.980734', '2024-03-09 22:06:38.980734', 'jane_smith', 'password123', 'http://localhost:3000/1709993197989.jpg', ' 9876543210');
INSERT INTO `staff` VALUES (123469, '李四', 52, 0, 'cqust', '2024-03-10 10:03:13.753536', '2024-03-10 10:03:13.753536', '12345678', '123456', 'http://localhost:3000/1710036193312.jpg', '147258369');

-- ----------------------------
-- Table structure for staff_emergency
-- ----------------------------
DROP TABLE IF EXISTS `staff_emergency`;
CREATE TABLE `staff_emergency`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键：id',
  `staffId` int NULL DEFAULT NULL COMMENT '主键,员工id',
  `emergencyResponseId` int NULL DEFAULT NULL COMMENT '主键,紧急响应ID',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK_c8b4c676f1d945129b27b25216f`(`staffId` ASC) USING BTREE,
  INDEX `FK_f4f962d0bb7391c5001e7319a53`(`emergencyResponseId` ASC) USING BTREE,
  CONSTRAINT `FK_c8b4c676f1d945129b27b25216f` FOREIGN KEY (`staffId`) REFERENCES `staff` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_f4f962d0bb7391c5001e7319a53` FOREIGN KEY (`emergencyResponseId`) REFERENCES `emergency_response` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 54 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of staff_emergency
-- ----------------------------
INSERT INTO `staff_emergency` VALUES (32, 123456, 13);
INSERT INTO `staff_emergency` VALUES (33, 123457, 13);
INSERT INTO `staff_emergency` VALUES (36, 123465, 15);
INSERT INTO `staff_emergency` VALUES (37, 123467, 15);
INSERT INTO `staff_emergency` VALUES (38, 123457, 17);
INSERT INTO `staff_emergency` VALUES (39, 123463, 17);
INSERT INTO `staff_emergency` VALUES (42, 123456, 29);
INSERT INTO `staff_emergency` VALUES (43, 123457, 29);
INSERT INTO `staff_emergency` VALUES (44, 123465, 29);
INSERT INTO `staff_emergency` VALUES (45, 123456, 31);
INSERT INTO `staff_emergency` VALUES (46, 123457, 31);
INSERT INTO `staff_emergency` VALUES (47, 123463, 31);
INSERT INTO `staff_emergency` VALUES (48, 123456, 32);
INSERT INTO `staff_emergency` VALUES (49, 123457, 32);
INSERT INTO `staff_emergency` VALUES (50, 123468, 33);
INSERT INTO `staff_emergency` VALUES (51, 123456, 34);
INSERT INTO `staff_emergency` VALUES (52, 123468, 34);
INSERT INTO `staff_emergency` VALUES (53, 123456, 35);
INSERT INTO `staff_emergency` VALUES (54, 123457, 35);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键',
  `account` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '管理员账号',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '管理员密码',
  `ctime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `utime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '管理员',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '图片地址',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'admin', '123', '2024-01-02 16:36:59.818421', '2024-01-29 22:08:10.208479', '管理员', 'http://localhost:3000/1704359135699.jpg');

SET FOREIGN_KEY_CHECKS = 1;

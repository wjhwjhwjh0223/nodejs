"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmergencyResponse = void 0;
var typeorm_1 = require("typeorm");
var Staff_1 = require("./Staff"); // 引入工作人员实体
var General_1 = require("./General"); //引入普通用户实体
var EmergencyResponse = /** @class */ (function () {
    function EmergencyResponse(obj) {
        if (obj) {
            Object.assign(this, obj);
        }
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({
            comment: '主键，紧急响应ID'
        }),
        __metadata("design:type", Number)
    ], EmergencyResponse.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "text",
            comment: '紧急事件详情'
        }),
        __metadata("design:type", String)
    ], EmergencyResponse.prototype, "details", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '紧急事件类型，例如：医疗紧急情况、安全事件等'
        }),
        __metadata("design:type", String)
    ], EmergencyResponse.prototype, "type", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '响应状态（如：待响应、处理中、已解决）'
        }),
        __metadata("design:type", String)
    ], EmergencyResponse.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            comment: '紧急事件报告时间'
        }),
        __metadata("design:type", Date)
    ], EmergencyResponse.prototype, "reportedAt", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            comment: '最后更新时间'
        }),
        __metadata("design:type", Date)
    ], EmergencyResponse.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Staff_1.Staff; }, function (staff) { return staff.emergencyResponse; }, {
            cascade: true
        }),
        __metadata("design:type", Array)
    ], EmergencyResponse.prototype, "staff", void 0);
    __decorate([
        (0, typeorm_1.JoinColumn)(),
        (0, typeorm_1.OneToOne)(function () { return General_1.General; }, {
            cascade: true
        }),
        __metadata("design:type", General_1.General)
    ], EmergencyResponse.prototype, "general", void 0);
    EmergencyResponse = __decorate([
        (0, typeorm_1.Entity)(),
        __metadata("design:paramtypes", [Object])
    ], EmergencyResponse);
    return EmergencyResponse;
}());
exports.EmergencyResponse = EmergencyResponse;
//# sourceMappingURL=EmergencyResponse.js.map
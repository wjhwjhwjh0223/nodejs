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
exports.Staff = void 0;
var typeorm_1 = require("typeorm");
var Notification_1 = require("./Notification");
var Appointment_1 = require("./Appointment");
var EmergencyResponse_1 = require("./EmergencyResponse");
var Staff = /** @class */ (function () {
    function Staff(obj) {
        if (obj) {
            Object.assign(this, obj);
        }
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({
            comment: '主键,员工id',
        }),
        __metadata("design:type", Number)
    ], Staff.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: "用户密码",
            default: 123456
        }),
        __metadata("design:type", Number)
    ], Staff.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '员工姓名',
        }),
        __metadata("design:type", String)
    ], Staff.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '员工年龄',
        }),
        __metadata("design:type", Number)
    ], Staff.prototype, "age", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '员工性别',
        }),
        __metadata("design:type", Number)
    ], Staff.prototype, "sex", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '员工手机号',
        }),
        __metadata("design:type", Number)
    ], Staff.prototype, "phone", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '员工地址',
        }),
        __metadata("design:type", String)
    ], Staff.prototype, "address", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Staff.prototype, "ctime", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Staff.prototype, "utime", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return Notification_1.Notification; }),
        __metadata("design:type", Array)
    ], Staff.prototype, "notifications", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Appointment_1.Appointment; }, function (appointment) { return appointment.staff; }, {
            cascade: true
        }),
        __metadata("design:type", Array)
    ], Staff.prototype, "appointments", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return EmergencyResponse_1.EmergencyResponse; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", EmergencyResponse_1.EmergencyResponse)
    ], Staff.prototype, "emergencyResponse", void 0);
    Staff = __decorate([
        (0, typeorm_1.Entity)(),
        __metadata("design:paramtypes", [Object])
    ], Staff);
    return Staff;
}());
exports.Staff = Staff;
//# sourceMappingURL=Staff.js.map
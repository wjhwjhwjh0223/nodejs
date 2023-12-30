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
exports.General = void 0;
var typeorm_1 = require("typeorm");
var Activity_1 = require("./Activity");
var Appointment_1 = require("./Appointment");
var Notification_1 = require("./Notification");
var HealthRecord_1 = require("./HealthRecord");
var General = /** @class */ (function () {
    function General(obj) {
        if (obj) {
            Object.assign(this, obj);
        }
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({
            comment: '主键：id'
        }),
        __metadata("design:type", Number)
    ], General.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '用户姓名'
        }),
        __metadata("design:type", String)
    ], General.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: "用户密码",
            default: 123456
        }),
        __metadata("design:type", Number)
    ], General.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '用户年龄'
        }),
        __metadata("design:type", Number)
    ], General.prototype, "age", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '用户性别'
        }),
        __metadata("design:type", Number)
    ], General.prototype, "sex", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '电话'
        }),
        __metadata("design:type", String)
    ], General.prototype, "phone", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '地址'
        }),
        __metadata("design:type", String)
    ], General.prototype, "address", void 0);
    __decorate([
        (0, typeorm_1.JoinColumn)(),
        (0, typeorm_1.OneToOne)(function () { return HealthRecord_1.HealthRecord; }, {
            cascade: true
        }),
        __metadata("design:type", HealthRecord_1.HealthRecord)
    ], General.prototype, "healthRecord", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '紧急联系人电话'
        }),
        __metadata("design:type", Number)
    ], General.prototype, "contacts", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], General.prototype, "ctime", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], General.prototype, "utime", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return Notification_1.Notification; }),
        __metadata("design:type", Array)
    ], General.prototype, "notifications", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return Activity_1.Activity; }, function (activity) { return activity.general; }, {
            cascade: true
        }),
        __metadata("design:type", Array)
    ], General.prototype, "activity", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Appointment_1.Appointment; }, function (appointment) { return appointment.general; }, {
            cascade: true
        }),
        __metadata("design:type", Array)
    ], General.prototype, "appointments", void 0);
    General = __decorate([
        (0, typeorm_1.Entity)(),
        __metadata("design:paramtypes", [Object])
    ], General);
    return General;
}());
exports.General = General;
//# sourceMappingURL=General.js.map
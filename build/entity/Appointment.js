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
exports.Appointment = void 0;
var typeorm_1 = require("typeorm");
var Service_1 = require("./Service"); // 引入服务实体
var General_1 = require("./General");
var Staff_1 = require("./Staff");
var Appointment = /** @class */ (function () {
    function Appointment(obj) {
        if (obj) {
            Object.assign(this, obj);
        }
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({
            comment: '主键,预约ID'
        }),
        __metadata("design:type", Number)
    ], Appointment.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.JoinColumn)(),
        (0, typeorm_1.ManyToOne)(function () { return General_1.General; }),
        __metadata("design:type", General_1.General)
    ], Appointment.prototype, "general", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Staff_1.Staff; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", Staff_1.Staff)
    ], Appointment.prototype, "staff", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Service_1.Service; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", Service_1.Service)
    ], Appointment.prototype, "service", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'datetime',
            comment: '预约时间'
        }),
        __metadata("design:type", Date)
    ], Appointment.prototype, "appointmentTime", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '预约状态（如：待确认、已确认、已取消）'
        }),
        __metadata("design:type", String)
    ], Appointment.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Appointment.prototype, "ctime", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Appointment.prototype, "utime", void 0);
    Appointment = __decorate([
        (0, typeorm_1.Entity)(),
        __metadata("design:paramtypes", [Object])
    ], Appointment);
    return Appointment;
}());
exports.Appointment = Appointment;
//# sourceMappingURL=Appointment.js.map
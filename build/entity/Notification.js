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
exports.Notification = void 0;
var typeorm_1 = require("typeorm");
var General_1 = require("./General"); // 引入通用实体
var Staff_1 = require("./Staff");
var Notification = /** @class */ (function () {
    function Notification(obj) {
        if (obj) {
            Object.assign(this, obj);
        }
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({
            comment: '主键，通知ID'
        }),
        __metadata("design:type", Number)
    ], Notification.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "text",
            comment: '通知内容'
        }),
        __metadata("design:type", String)
    ], Notification.prototype, "content", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '通知状态（如：未读、已读）'
        }),
        __metadata("design:type", String)
    ], Notification.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Notification.prototype, "ctime", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Notification.prototype, "utime", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return Staff_1.Staff; }),
        (0, typeorm_1.JoinTable)(),
        __metadata("design:type", Array)
    ], Notification.prototype, "staff", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return General_1.General; }),
        (0, typeorm_1.JoinTable)(),
        __metadata("design:type", Array)
    ], Notification.prototype, "generalr", void 0);
    Notification = __decorate([
        (0, typeorm_1.Entity)(),
        __metadata("design:paramtypes", [Object])
    ], Notification);
    return Notification;
}());
exports.Notification = Notification;
//# sourceMappingURL=Notification.js.map
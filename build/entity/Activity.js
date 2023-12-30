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
exports.Activity = void 0;
var typeorm_1 = require("typeorm");
var General_1 = require("./General");
var Staff_1 = require("./Staff");
var Activity = /** @class */ (function () {
    function Activity(obj) {
        if (obj) {
            Object.assign(this, obj);
        }
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({
            comment: '主键,活动id'
        }),
        __metadata("design:type", Number)
    ], Activity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '活动名称'
        }),
        __metadata("design:type", String)
    ], Activity.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '活动描述'
        }),
        __metadata("design:type", String)
    ], Activity.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '活动时间'
        }),
        __metadata("design:type", Date)
    ], Activity.prototype, "time", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '活动地点'
        }),
        __metadata("design:type", String)
    ], Activity.prototype, "location", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '活动状态'
        }),
        __metadata("design:type", Number)
    ], Activity.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Activity.prototype, "ctime", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Activity.prototype, "utime", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return General_1.General; }, function (general) { return general.activity; }),
        (0, typeorm_1.JoinTable)(),
        __metadata("design:type", Array)
    ], Activity.prototype, "general", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Staff_1.Staff; }, {
            cascade: true //级联保存
        }),
        __metadata("design:type", Staff_1.Staff)
    ], Activity.prototype, "staff", void 0);
    Activity = __decorate([
        (0, typeorm_1.Entity)(),
        __metadata("design:paramtypes", [Object])
    ], Activity);
    return Activity;
}());
exports.Activity = Activity;
//# sourceMappingURL=Activity.js.map
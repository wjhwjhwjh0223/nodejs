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
exports.Feedback = void 0;
var typeorm_1 = require("typeorm");
var Service_1 = require("./Service");
var Activity_1 = require("./Activity");
var Feedback = /** @class */ (function () {
    function Feedback() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({
            comment: '反馈ID'
        }),
        __metadata("design:type", Number)
    ], Feedback.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '评分'
        }),
        __metadata("design:type", Number)
    ], Feedback.prototype, "rating", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "text",
            comment: '评价内容'
        }),
        __metadata("design:type", String)
    ], Feedback.prototype, "comment", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            comment: '评价时间'
        }),
        __metadata("design:type", Date)
    ], Feedback.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Feedback.prototype, "ctime", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Feedback.prototype, "utime", void 0);
    __decorate([
        (0, typeorm_1.JoinColumn)(),
        (0, typeorm_1.OneToOne)(function () { return Service_1.Service; }, {
            cascade: true
        }),
        __metadata("design:type", Service_1.Service)
    ], Feedback.prototype, "service", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Activity_1.Activity; }, {
            cascade: true
        }),
        __metadata("design:type", Activity_1.Activity)
    ], Feedback.prototype, "activity", void 0);
    Feedback = __decorate([
        (0, typeorm_1.Entity)()
    ], Feedback);
    return Feedback;
}());
exports.Feedback = Feedback;
//# sourceMappingURL=Feedback.js.map
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
exports.HealthRecord = void 0;
var typeorm_1 = require("typeorm");
var General_1 = require("./General");
var HealthRecord = /** @class */ (function () {
    function HealthRecord(obj) {
        if (obj) {
            Object.assign(this, obj);
        }
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({
            comment: '主键,健康档案ID'
        }),
        __metadata("design:type", Number)
    ], HealthRecord.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '健康信息',
        }),
        __metadata("design:type", String)
    ], HealthRecord.prototype, "health", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '病史详情'
        }),
        __metadata("design:type", String)
    ], HealthRecord.prototype, "medical", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], HealthRecord.prototype, "ctime", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], HealthRecord.prototype, "utime", void 0);
    __decorate([
        (0, typeorm_1.JoinColumn)(),
        (0, typeorm_1.OneToOne)(function () { return General_1.General; }, {
            cascade: true
        }),
        __metadata("design:type", General_1.General)
    ], HealthRecord.prototype, "general", void 0);
    HealthRecord = __decorate([
        (0, typeorm_1.Entity)(),
        __metadata("design:paramtypes", [Object])
    ], HealthRecord);
    return HealthRecord;
}());
exports.HealthRecord = HealthRecord;
//# sourceMappingURL=HealthRecord.js.map
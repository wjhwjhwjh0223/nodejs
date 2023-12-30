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
exports.Service = void 0;
var typeorm_1 = require("typeorm");
var Service = /** @class */ (function () {
    function Service(obj) {
        if (obj) {
            Object.assign(this, obj);
        }
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({
            comment: '主键，服务ID'
        }),
        __metadata("design:type", Number)
    ], Service.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '服务名称'
        }),
        __metadata("design:type", String)
    ], Service.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "text",
            comment: '服务描述'
        }),
        __metadata("design:type", String)
    ], Service.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            comment: '服务类别'
        }),
        __metadata("design:type", String)
    ], Service.prototype, "category", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Service.prototype, "ctime", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Service.prototype, "utime", void 0);
    Service = __decorate([
        (0, typeorm_1.Entity)(),
        __metadata("design:paramtypes", [Object])
    ], Service);
    return Service;
}());
exports.Service = Service;
//# sourceMappingURL=Service.js.map
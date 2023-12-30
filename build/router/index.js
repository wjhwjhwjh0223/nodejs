"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var koa_router_1 = __importDefault(require("koa-router"));
var file_1 = require("./file");
var general_1 = require("./general");
var staff_1 = require("./staff");
var router = new koa_router_1.default();
exports.router = router;
router.use(staff_1.staffRoutes);
router.use(general_1.generalRoutes);
router.use(file_1.fileRoutes);
//# sourceMappingURL=index.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffRoutes = void 0;
var Staff_1 = require("../entity/Staff");
var typeorm_1 = require("typeorm");
var koa_router_1 = __importDefault(require("koa-router"));
var data_source_1 = require("../config/data-source");
var router = new koa_router_1.default();
//员工列表的增删改查
var staffRepository = data_source_1.AppDataSource.getRepository(Staff_1.Staff);
//查询
router.get('/staff', function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var query, pagenumber, pagesize, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                query = ctx.query;
                console.log(query);
                pagenumber = query.pagenumber || 1;
                pagesize = query.pagesize || 10;
                return [4 /*yield*/, staffRepository.findAndCount({
                        where: {
                            name: (0, typeorm_1.Like)("".concat(query.name, "%"))
                        },
                        skip: (pagenumber - 1) * pagesize,
                        take: pagesize
                    })];
            case 1:
                res = _a.sent();
                console.log(res);
                ctx.body = {
                    code: 1,
                    data: {
                        list: res[0],
                        total: res[1]
                    },
                };
                return [2 /*return*/];
        }
    });
}); });
//删除
router.post('/staffDelete', function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var body, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = ctx.request.body;
                console.log(body);
                return [4 /*yield*/, staffRepository.delete(body.id)];
            case 1:
                res = _a.sent();
                ctx.body = {
                    code: 1,
                    msg: '删除成功',
                    data: res
                };
                return [2 /*return*/];
        }
    });
}); });
//修改
router.post('/staffUpdate', function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var body, staff, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = ctx.request.body;
                staff = new Staff_1.Staff(body);
                return [4 /*yield*/, staffRepository.save(staff)];
            case 1:
                res = _a.sent();
                ctx.body = {
                    code: 1,
                    msg: '更新成功',
                    data: res
                };
                return [2 /*return*/];
        }
    });
}); });
//增加
router.post('/staffAdd', function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var body, staff, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = ctx.request.body;
                staff = new Staff_1.Staff(body);
                return [4 /*yield*/, staffRepository.save(staff)];
            case 1:
                res = _a.sent();
                ctx.body = {
                    //0 失败 1成功
                    code: 1,
                    msg: '添加成功',
                    data: res
                };
                return [2 /*return*/];
        }
    });
}); });
exports.staffRoutes = router.routes();
//# sourceMappingURL=staff.js.map
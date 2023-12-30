"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multipartFile = void 0;
var koa_body_1 = require("koa-body");
exports.multipartFile = (0, koa_body_1.koaBody)({
    multipart: true,
    formidable: {
        maxFileSize: 200 * 1024 * 1024 // 设置上传文件大小最大限制，默认2M
    }
});
//# sourceMappingURL=multipartMiddleware.js.map
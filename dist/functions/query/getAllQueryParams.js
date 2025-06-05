"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$getAllQueryParams",
    version: "1.1.0",
    description: "Returns all query parameters as a JSON object.",
    unwrap: false,
    output: forgescript_1.ArgType.Json,
    async execute(ctx) {
        const req = ctx.request;
        return this.success(req.query);
    },
});
//# sourceMappingURL=getAllQueryParams.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$listHeaderKeys",
    version: "1.1.0",
    description: "Lists all header keys in the request.",
    unwrap: false,
    output: forgescript_1.ArgType.Json,
    async execute(ctx) {
        const req = ctx.request;
        const keys = Object.keys(req.headers);
        return this.success(keys);
    },
});
//# sourceMappingURL=listHeaderKeys.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$setTextHeader",
    version: "1.1.0",
    description: "Sets Content-Type: text/plain on the response.",
    unwrap: false,
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx) {
        const res = ctx.response;
        res.set("Content-Type", "text/plain");
        return this.success(true);
    },
});
//# sourceMappingURL=setTextHeader.js.map
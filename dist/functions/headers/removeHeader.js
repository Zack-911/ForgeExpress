"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$removeHeader",
    version: "1.1.0",
    description: "Removes a header from the response.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "Key",
            description: "The name of the header to remove.",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false,
        },
    ],
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx, [key]) {
        const res = ctx.response;
        try {
            res.removeHeader(key);
            return this.success(true);
        }
        catch {
            return this.success(false);
        }
    },
});
//# sourceMappingURL=removeHeader.js.map
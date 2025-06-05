"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$hasHeaderValue",
    version: "1.1.0",
    description: "Checks if a header has a specific value.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "Key",
            description: "The name of the header.",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false,
        },
        {
            name: "Value",
            description: "The value to check for.",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false,
        },
    ],
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx, [key, value]) {
        const req = ctx.request;
        const headerValue = req.get(key);
        return this.success(headerValue === value);
    },
});
//# sourceMappingURL=hasHeaderValue.js.map
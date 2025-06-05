"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$setHeader",
    version: "1.1.0",
    description: "Sets a custom response header.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "Key",
            description: "Header key.",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "Value",
            description: "Header value.",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        }
    ],
    output: forgescript_1.ArgType.Boolean,
    async execute(_, [key, value]) {
        const res = _.getEnvironmentKey("res");
        if (!res)
            return this.customError("Response object not found.");
        res.setHeader(key, value);
        return this.success(true);
    }
});
//# sourceMappingURL=setHeader.js.map
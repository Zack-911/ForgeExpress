"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$setCookie",
    version: "1.1.0",
    description: "Sets a cookie in the response.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "Key",
            description: "The cookie name.",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "Value",
            description: "The cookie value.",
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
        res.cookie(key, value);
        return this.success(true);
    }
});
//# sourceMappingURL=setCookie.js.map
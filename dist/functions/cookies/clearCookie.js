"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$clearCookie",
    version: "1.1.0",
    description: "Clears a cookie from the response.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "Key",
            description: "The name of the cookie to clear.",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        }
    ],
    output: forgescript_1.ArgType.Boolean,
    async execute(_, [key]) {
        const res = _.getEnvironmentKey("res");
        if (!res)
            return this.customError("Response object not found.");
        res.clearCookie(key);
        return this.success(true);
    }
});
//# sourceMappingURL=clearCookie.js.map
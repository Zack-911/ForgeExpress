"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$getCookie",
    version: "1.1.0",
    description: "Gets a cookie from the request.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "Key",
            description: "The cookie name.",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        }
    ],
    output: forgescript_1.ArgType.String,
    async execute(_, [key]) {
        const req = _.getEnvironmentKey("req");
        return this.success(req?.cookies?.[key] ?? "");
    }
});
//# sourceMappingURL=getCookie.js.map
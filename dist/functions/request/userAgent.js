"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$userAgent",
    version: "1.1.0",
    description: "Returns the user-agent string of the request.",
    unwrap: false,
    output: forgescript_1.ArgType.String,
    async execute(_) {
        const req = _.getEnvironmentKey("req");
        return this.success(req?.get("user-agent") || "");
    }
});
//# sourceMappingURL=userAgent.js.map
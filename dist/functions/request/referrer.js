"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$referrer",
    version: "1.1.0",
    description: "Returns the Referer header value from the request.",
    unwrap: false,
    output: forgescript_1.ArgType.String,
    async execute(_) {
        const req = _.getEnvironmentKey("req");
        return this.success(req?.get("referer") || "");
    }
});
//# sourceMappingURL=referrer.js.map
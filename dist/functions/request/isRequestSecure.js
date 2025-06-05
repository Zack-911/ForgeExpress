"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$isRequestSecure",
    version: "1.1.0",
    description: "Checks if the incoming request was made over HTTPS.",
    unwrap: false,
    output: forgescript_1.ArgType.Boolean,
    async execute(_) {
        const req = _.getEnvironmentKey("req");
        if (!req)
            return this.success(false);
        return this.success(req.secure);
    }
});
//# sourceMappingURL=isRequestSecure.js.map
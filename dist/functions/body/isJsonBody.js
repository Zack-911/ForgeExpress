"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$isJsonBody",
    version: "1.1.0",
    description: "Returns true if the request body is valid JSON.",
    unwrap: false,
    output: forgescript_1.ArgType.Boolean,
    async execute(_) {
        const req = _.getEnvironmentKey("req");
        if (!req)
            return this.success("");
        try {
            JSON.stringify(req.body);
            return this.success(true);
        }
        catch {
            return this.success(false);
        }
    },
});
//# sourceMappingURL=isJsonBody.js.map
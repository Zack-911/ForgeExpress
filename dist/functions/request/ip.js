"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$ip",
    version: "1.1.0",
    description: "Retrieves the IP address of the incoming request. Returns an empty string if unavailable.",
    unwrap: false,
    output: forgescript_1.ArgType.String,
    async execute(_) {
        const req = _.getEnvironmentKey("req");
        if (!req)
            return this.success("");
        const ip = req.ip || "";
        const cleaned = ip.startsWith("::ffff:") ? ip.slice(7) : ip;
        return this.success(cleaned);
    }
});
//# sourceMappingURL=ip.js.map
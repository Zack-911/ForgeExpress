"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$bodyLength",
    version: "1.1.0",
    description: "Returns the number of top-level keys in the request body.",
    unwrap: false,
    output: forgescript_1.ArgType.Number,
    async execute(_) {
        const req = _.getEnvironmentKey("req");
        if (!req)
            return this.success("");
        const body = req.body;
        if (body && typeof body === "object") {
            return this.success(Object.keys(body).length);
        }
        return this.success(0);
    },
});
//# sourceMappingURL=bodyLength.js.map
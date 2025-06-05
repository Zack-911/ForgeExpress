"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$getAllHeaders",
    version: "1.1.0",
    description: "Returns all request headers as a JSON object.",
    unwrap: false,
    output: forgescript_1.ArgType.Json,
    async execute(_) {
        const req = _.getEnvironmentKey("req");
        return this.success(req?.headers ?? {});
    }
});
//# sourceMappingURL=getAllHeaders.js.map
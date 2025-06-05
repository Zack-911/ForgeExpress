"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$getRawBody",
    version: "1.1.0",
    description: "Gets the raw request body as a string.",
    unwrap: false,
    output: forgescript_1.ArgType.String,
    async execute(_) {
        const raw = _.getEnvironmentKey("rawBody");
        return this.success(raw ?? "");
    }
});
//# sourceMappingURL=getRawBody.js.map
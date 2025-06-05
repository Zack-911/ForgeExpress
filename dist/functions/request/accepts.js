"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$accepts",
    version: "1.1.0",
    description: "Returns accepted content types as a comma-separated string.",
    unwrap: false,
    output: forgescript_1.ArgType.String,
    async execute(_) {
        const req = _.getEnvironmentKey("req");
        return this.success((req?.accepts() || []).join(", "));
    }
});
//# sourceMappingURL=accepts.js.map
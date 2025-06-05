"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$queryLength",
    version: "1.1.0",
    description: "Returns the number of query parameters in the request.",
    unwrap: false,
    output: forgescript_1.ArgType.Number,
    async execute(_) {
        const req = _.getEnvironmentKey("req");
        if (!req)
            return this.success("");
        return this.success(Object.keys(req.query).length);
    },
});
//# sourceMappingURL=queryLength.js.map
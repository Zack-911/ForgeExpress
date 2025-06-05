"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$end",
    version: "1.1.0",
    description: "Ends the response without sending any content.",
    unwrap: false,
    output: forgescript_1.ArgType.Boolean,
    async execute(_) {
        const res = _.getEnvironmentKey("res");
        if (!res)
            return this.customError("Response object not found.");
        res.end();
        return this.success(true);
    }
});
//# sourceMappingURL=end.js.map
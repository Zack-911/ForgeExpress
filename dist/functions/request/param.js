"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$param",
    version: "1.0.0",
    description: "Gets a route parameter by name from the URL.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The name of the route parameter (e.g., id, type)",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false,
        },
    ],
    output: forgescript_1.ArgType.String,
    execute(_, [paramName]) {
        const req = _.getEnvironmentKey("req");
        if (!req)
            return this.customError("Request object not found.");
        const value = req.params?.[paramName.trim()];
        return this.success(value ?? "");
    },
});
//# sourceMappingURL=param.js.map
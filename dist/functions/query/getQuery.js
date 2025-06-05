"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$getQuery",
    version: "1.1.0",
    description: "Retrieves a query parameter from the request. Returns an empty string if not found.",
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.String,
    args: [
        {
            name: "Name",
            description: "The query parameter name.",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        }
    ],
    async execute(_, [name]) {
        const req = _.getEnvironmentKey("req");
        if (!req || !name)
            return this.success("");
        const value = req.query[name.trim()];
        return this.success(typeof value === "string" ? value : "");
    }
});
//# sourceMappingURL=getQuery.js.map
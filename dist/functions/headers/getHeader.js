"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$getHeader",
    version: "1.1.0",
    description: "Retrieves a header from the request. Returns an empty string if not found.",
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.String,
    args: [
        {
            name: "Name",
            description: "The header name.",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        }
    ],
    async execute(_, [name]) {
        const req = _.getEnvironmentKey("req");
        if (!req || !name)
            return this.success("");
        const header = req.headers[name.trim().toLowerCase()];
        return this.success(typeof header === "string" ? header : "");
    }
});
//# sourceMappingURL=getHeader.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$bodyHas",
    version: "1.1.0",
    description: "Checks if the request body contains a key.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "Key",
            description: "The key to check in the body.",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        }
    ],
    output: forgescript_1.ArgType.Boolean,
    async execute(_, [key]) {
        const req = _.getEnvironmentKey("req");
        return this.success(typeof req?.body === "object" && key in req.body);
    }
});
//# sourceMappingURL=bodyHas.js.map
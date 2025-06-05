"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$hasHeader",
    version: "1.1.0",
    description: "Checks if a specific header exists in the request.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "Name",
            description: "The name of the header.",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        }
    ],
    output: forgescript_1.ArgType.Boolean,
    async execute(_, [name]) {
        const req = _.getEnvironmentKey("req");
        return this.success(!!req?.headers?.[name.toLowerCase()]);
    }
});
//# sourceMappingURL=hasHeader.js.map
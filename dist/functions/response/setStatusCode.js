"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$setStatusCode",
    version: "1.1.0",
    description: "Sets the HTTP status code for the response.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "Code",
            description: "The status code to set.",
            type: forgescript_1.ArgType.Number,
            required: true,
            rest: false
        }
    ],
    output: forgescript_1.ArgType.Boolean,
    async execute(_, [code]) {
        const res = _.getEnvironmentKey("res");
        if (!res)
            return this.customError("Response object not found.");
        res.status(code);
        return this.success(true);
    }
});
//# sourceMappingURL=setStatusCode.js.map
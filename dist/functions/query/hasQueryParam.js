"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$hasQueryParam",
    version: "1.1.0",
    description: "Checks if a query parameter exists in the request.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "Key",
            description: "The name of the query parameter.",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false,
        },
    ],
    output: forgescript_1.ArgType.Boolean,
    async execute(_, [key]) {
        const req = _.getEnvironmentKey("req");
        if (!req || !key)
            return this.success("");
        return this.success(Object.prototype.hasOwnProperty.call(req.query, key));
    },
});
//# sourceMappingURL=hasQueryParam.js.map
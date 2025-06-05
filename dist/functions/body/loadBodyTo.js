"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$loadBodyTo",
    version: "1.1.0",
    description: "Loads the parsed request body into an environment variable.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "Name",
            description: "The environment variable name to assign the request body to.",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        }
    ],
    async execute(_, [name]) {
        const req = _.getEnvironmentKey("req");
        if (!req || !req.body)
            return this.customError("No body found in the request.");
        _.setEnvironmentKey(name, req.body);
        return this.success();
    }
});
//# sourceMappingURL=loadBodyTo.js.map
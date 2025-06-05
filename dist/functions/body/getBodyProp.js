"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$getBodyProp",
    version: "1.1.0",
    description: "Gets a property from the request body.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "Key",
            description: "The body property to retrieve.",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        }
    ],
    output: forgescript_1.ArgType.String,
    async execute(_, [key]) {
        const req = _.getEnvironmentKey("req");
        const value = req?.body?.[key];
        return this.success(value !== undefined ? value : null);
    }
});
//# sourceMappingURL=getBodyProp.js.map
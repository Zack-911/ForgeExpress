"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$sendJson",
    version: "1.1.0",
    description: "Sends a JSON response with the given data.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "Data",
            description: "The JSON content to send.",
            type: forgescript_1.ArgType.Json,
            required: true,
            rest: false
        },
        {
            name: "Status Code",
            description: "Optional status code.",
            type: forgescript_1.ArgType.Number,
            required: false,
            rest: false
        }
    ],
    async execute(_, [data, status]) {
        const res = _.getEnvironmentKey("res");
        if (!res)
            return this.customError("Response object not found.");
        if (status)
            res.status(status);
        res.json(data);
        return this.success();
    }
});
//# sourceMappingURL=sendJson.js.map
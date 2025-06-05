"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$sendText",
    version: "1.1.0",
    description: "Sends plain text in a response, with an optional status code.",
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Boolean,
    args: [
        {
            name: "Content",
            description: "The text content to send.",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false,
        },
        {
            name: "Status Code",
            description: "The status code to send with the response.",
            type: forgescript_1.ArgType.Number,
            required: false,
            rest: false,
        },
    ],
    async execute(_, [content, statusCode]) {
        const res = _.getEnvironmentKey("res");
        if (!res)
            return this.customError("Response object not found in environment.");
        const code = typeof statusCode === "number" ? statusCode : 200;
        res.status(code).setHeader("Content-Type", "text/plain");
        res.send(content);
        return this.success(true);
    },
});
//# sourceMappingURL=sendText.js.map
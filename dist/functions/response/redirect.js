"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$redirect",
    version: "1.1.0",
    description: "Redirects the response to the given URL.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "URL",
            description: "The URL to redirect to.",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "Status Code",
            description: "Optional status code (default 302).",
            type: forgescript_1.ArgType.Number,
            required: false,
            rest: false
        }
    ],
    async execute(_, [url, code]) {
        const res = _.getEnvironmentKey("res");
        if (!res)
            return this.customError("Response object not found.");
        res.redirect(code || 302, url);
        return this.success();
    }
});
//# sourceMappingURL=redirect.js.map
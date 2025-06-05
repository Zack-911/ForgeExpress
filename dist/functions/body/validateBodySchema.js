"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const jsonschema_1 = require("jsonschema");
exports.default = new forgescript_1.NativeFunction({
    name: "$validateBodySchema",
    version: "1.1.0",
    description: "Validates the request body against a JSON schema.",
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Boolean,
    args: [
        {
            name: "Schema",
            description: "The JSON schema to validate against.",
            type: forgescript_1.ArgType.Json,
            required: true,
            rest: false,
        },
    ],
    async execute(ctx, [schema]) {
        const req = ctx.request;
        const result = (0, jsonschema_1.validate)(req.body, schema);
        return this.success(result.valid);
    },
});
//# sourceMappingURL=validateBodySchema.js.map
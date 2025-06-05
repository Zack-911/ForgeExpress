import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"
import { validate } from "jsonschema"

export default new NativeFunction({
  name: "$validateBodySchema",
  version: "1.1.0",
  description: "Validates the request body against a JSON schema.",
  brackets: true,
  unwrap: true,
  output: ArgType.Boolean,
  args: [
    {
      name: "Schema",
      description: "The JSON schema to validate against.",
      type: ArgType.Json,
      required: true,
      rest: false,
    },
  ],
  async execute(ctx, [schema]) {
    const req = ctx.request as Request
    const result = validate(req.body, schema)
    return this.success(result.valid)
  },
})

import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"

export default new NativeFunction({
  name: "$hasQueryParam",
  version: "1.1.0",
  description: "Checks if a query parameter exists in the request.",
  brackets: true,
  unwrap: true,
  args: [
    {
      name: "Key",
      description: "The name of the query parameter.",
      type: ArgType.String,
      required: true,
      rest: false,
    },
  ],
  output: ArgType.Boolean,
  async execute(ctx, [key]) {
    const req = ctx.request as Request
    return this.success(Object.prototype.hasOwnProperty.call(req.query, key))
  },
})

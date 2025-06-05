import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"

export default new NativeFunction({
  name: "$bodyLength",
  version: "1.1.0",
  description: "Returns the number of top-level keys in the request body.",
  unwrap: false,
  output: ArgType.Number,
  async execute(ctx) {
    const req = ctx.request as Request
    const body = req.body
    if (body && typeof body === "object") {
      return this.success(Object.keys(body).length)
    }
    return this.success(0)
  },
})

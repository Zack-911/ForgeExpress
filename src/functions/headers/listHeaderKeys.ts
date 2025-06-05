import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"

export default new NativeFunction({
  name: "$listHeaderKeys",
  version: "1.1.0",
  description: "Lists all header keys in the request.",
  unwrap: false,
  output: ArgType.Json,
  async execute(ctx) {
    const req = ctx.request as Request
    const keys = Object.keys(req.headers)
    return this.success(keys)
  },
})

import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"

export default new NativeFunction({
  name: "$listHeaderKeys",
  version: "1.1.0",
  description: "Lists all header keys in the request.",
  unwrap: false,
  output: ArgType.Json,
  async execute(_) {
    const req = _.getEnvironmentKey("req") as Request | undefined
    if (!req) return this.success("")
    const keys = Object.keys(req.headers)
    return this.success(keys)
  },
})

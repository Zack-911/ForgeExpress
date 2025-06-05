import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"

export default new NativeFunction({
  name: "$getAllQueryParams",
  version: "1.1.0",
  description: "Returns all query parameters as a JSON object.",
  unwrap: false,
  output: ArgType.Json,
  async execute(_) {
    const req = _.getEnvironmentKey("req") as Request | undefined
    if (!req) return this.success("")
    return this.success(req.query)
  },
})

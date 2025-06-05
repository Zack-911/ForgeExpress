import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"

export default new NativeFunction({
  name: "$queryLength",
  version: "1.1.0",
  description: "Returns the number of query parameters in the request.",
  unwrap: false,
  output: ArgType.Number,
  async execute(_) {
    const req = _.getEnvironmentKey("req") as Request | undefined
    if (!req) return this.success("")
    return this.success(Object.keys(req.query).length)
  },
})

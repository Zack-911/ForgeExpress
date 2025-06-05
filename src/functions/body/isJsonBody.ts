import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"

export default new NativeFunction({
  name: "$isJsonBody",
  version: "1.1.0",
  description: "Returns true if the request body is valid JSON.",
  unwrap: false,
  output: ArgType.Boolean,
  async execute(_) {
    const req = _.getEnvironmentKey("req") as Request | undefined
    if (!req) return this.success("")
    try {
      JSON.stringify(req.body)
      return this.success(true)
    } catch {
      return this.success(false)
    }
  },
})

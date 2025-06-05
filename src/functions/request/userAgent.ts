import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"

export default new NativeFunction({
  name: "$userAgent",
    version: "1.1.0",
  description: "Returns the user-agent string of the request.",
  unwrap: false,
  output: ArgType.String,
  async execute(_) {
    const req = _.getEnvironmentKey("req") as Request | undefined
    return this.success(req?.get("user-agent") || "")
  }
})

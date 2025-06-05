import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"

export default new NativeFunction({
  name: "$referrer",
    version: "1.1.0",
  description: "Returns the Referer header value from the request.",
  unwrap: false,
  output: ArgType.String,
  async execute(_) {
    const req = _.getEnvironmentKey("req") as Request | undefined
    return this.success(req?.get("referer") || "")
  }
})

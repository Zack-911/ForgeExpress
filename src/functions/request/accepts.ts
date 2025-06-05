import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"

export default new NativeFunction({
  name: "$accepts",
    version: "1.1.0",
  description: "Returns accepted content types as a comma-separated string.",
  unwrap: false,
  output: ArgType.String,
  async execute(_) {
    const req = _.getEnvironmentKey("req") as Request | undefined
    return this.success((req?.accepts() || []).join(", "))
  }
})

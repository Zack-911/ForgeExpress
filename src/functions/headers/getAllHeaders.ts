import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"

export default new NativeFunction({
  name: "$getAllHeaders",
    version: "1.1.0",
  description: "Returns all request headers as a JSON object.",
  unwrap: false,
  output: ArgType.Json,
  async execute(_) {
    const req = _.getEnvironmentKey("req") as Request | undefined
    return this.success(req?.headers ?? {})
  }
})

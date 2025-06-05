import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"

export default new NativeFunction({
  name: "$getRawBody",
    version: "1.1.0",
  description: "Gets the raw request body as a string.",
  unwrap: false,
  output: ArgType.String,
  async execute(_) {
    const raw = _.getEnvironmentKey("rawBody") as string | undefined
    return this.success(raw ?? "")
  }
})

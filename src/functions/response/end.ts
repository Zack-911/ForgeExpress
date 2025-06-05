import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Response } from "express"

export default new NativeFunction({
  name: "$end",
    version: "1.1.0",
  description: "Ends the response without sending any content.",
  unwrap: false,
  output: ArgType.Boolean,
  async execute(_) {
    const res = _.getEnvironmentKey("res") as Response | undefined
    if (!res) return this.customError("Response object not found.")
    res.end()
    return this.success(true)
  }
})

import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Response } from "express"

export default new NativeFunction({
  name: "$setStatus",
    version: "1.1.0",
  description: "Sets the HTTP status code for the response.",
  brackets: true,
  unwrap: true,
  args: [
    {
      name: "Code",
      description: "The status code to set.",
      type: ArgType.Number,
      required: true,
      rest: false
    }
  ],
  output: ArgType.Boolean,
  async execute(_, [code]) {
    const res = _.getEnvironmentKey("res") as Response | undefined
    if (!res) return this.customError("Response object not found.")
    res.status(code)
    return this.success(true)
  }
})

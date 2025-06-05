import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Response } from "express"

export default new NativeFunction({
  name: "$setHeader",
    version: "1.1.0",
  description: "Sets a custom response header.",
  brackets: true,
  unwrap: true,
  args: [
    {
      name: "Key",
      description: "Header key.",
      type: ArgType.String,
      required: true,
      rest: false
    },
    {
      name: "Value",
      description: "Header value.",
      type: ArgType.String,
      required: true,
      rest: false
    }
  ],
  output: ArgType.Boolean,
  async execute(_, [key, value]) {
    const res = _.getEnvironmentKey("res") as Response | undefined
    if (!res) return this.customError("Response object not found.")
    res.setHeader(key, value)
    return this.success(true)
  }
})

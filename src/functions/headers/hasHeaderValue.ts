import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"

export default new NativeFunction({
  name: "$hasHeaderValue",
  version: "1.1.0",
  description: "Checks if a header has a specific value.",
  brackets: true,
  unwrap: true,
  args: [
    {
      name: "Key",
      description: "The name of the header.",
      type: ArgType.String,
      required: true,
      rest: false,
    },
    {
      name: "Value",
      description: "The value to check for.",
      type: ArgType.String,
      required: true,
      rest: false,
    },
  ],
  output: ArgType.Boolean,
  async execute(_, [key, value]) {
    const req = _.getEnvironmentKey("req") as Request | undefined
    if (!req) return this.success("")
    const headerValue = req.get(key)
    return this.success(headerValue === value)
  },
})

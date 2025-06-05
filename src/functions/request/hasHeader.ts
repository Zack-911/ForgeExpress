import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"

export default new NativeFunction({
  name: "$hasHeader",
    version: "1.1.0",
  description: "Checks if a specific header exists in the request.",
  brackets: true,
  unwrap: true,
  args: [
    {
      name: "Name",
      description: "The name of the header.",
      type: ArgType.String,
      required: true,
      rest: false
    }
  ],
  output: ArgType.Boolean,
  async execute(_, [name]) {
    const req = _.getEnvironmentKey("req") as Request | undefined
    return this.success(!!req?.headers?.[name.toLowerCase()])
  }
})

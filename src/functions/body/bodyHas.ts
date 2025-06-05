import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"

export default new NativeFunction({
  name: "$bodyHas",
    version: "1.1.0",
  description: "Checks if the request body contains a key.",
  brackets: true,
  unwrap: true,
  args: [
    {
      name: "Key",
      description: "The key to check in the body.",
      type: ArgType.String,
      required: true,
      rest: false
    }
  ],
  output: ArgType.Boolean,
  async execute(_, [key]) {
    const req = _.getEnvironmentKey("req") as Request | undefined
    return this.success(typeof req?.body === "object" && key in req.body)
  }
})

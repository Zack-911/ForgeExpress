import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"

export default new NativeFunction({
  name: "$getBodyProp",
    version: "1.1.0",
  description: "Gets a property from the request body.",
  brackets: true,
  unwrap: true,
  args: [
    {
      name: "Key",
      description: "The body property to retrieve.",
      type: ArgType.String,
      required: true,
      rest: false
    }
  ],
  output: ArgType.String,
  async execute(_, [key]) {
    const req = _.getEnvironmentKey("req") as Request | undefined
    const value = req?.body?.[key]
    return this.success(value !== undefined ? value : null)
  }
})

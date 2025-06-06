import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"

export default new NativeFunction({
  name: "$param",
  version: "1.0.0",
  description: "Gets a route parameter by name from the URL.",
  brackets: true,
  unwrap: true,
  args: [
    {
      name: "name",
      description: "The name of the route parameter (e.g., id, type)",
      type: ArgType.String,
      required: true,
      rest: false,
    },
  ],
  output: ArgType.String,
  execute(_, [paramName]) {
    const req = _.getEnvironmentKey("req") as Request | undefined
    if (!req) return this.customError("Request object not found.")

    const value = req.params?.[paramName.trim()]
    return this.success(value ?? "")
  },
})

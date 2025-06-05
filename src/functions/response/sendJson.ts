import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Response } from "express"

export default new NativeFunction({
  name: "$sendJson",
    version: "1.1.0",
  description: "Sends a JSON response with the given data.",
  brackets: true,
  unwrap: true,
  args: [
    {
      name: "Data",
      description: "The JSON content to send.",
      type: ArgType.Json,
      required: true,
      rest: false
    },
    {
      name: "Status Code",
      description: "Optional status code.",
      type: ArgType.Number,
      required: false,
      rest: false
    }
  ],
  async execute(_, [data, status]) {
    const res = _.getEnvironmentKey("res") as Response | undefined
    if (!res) return this.customError("Response object not found.")
    if (status) res.status(status)
    res.json(data)
    return this.success()
  }
})

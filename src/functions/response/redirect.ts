import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Response } from "express"

export default new NativeFunction({
  name: "$redirect",
    version: "1.1.0",
  description: "Redirects the response to the given URL.",
  brackets: true,
  unwrap: true,
  args: [
    {
      name: "URL",
      description: "The URL to redirect to.",
      type: ArgType.String,
      required: true,
      rest: false
    },
    {
      name: "Status Code",
      description: "Optional status code (default 302).",
      type: ArgType.Number,
      required: false,
      rest: false
    }
  ],
  async execute(_, [url, code]) {
    const res = _.getEnvironmentKey("res") as Response | undefined
    if (!res) return this.customError("Response object not found.")
    res.redirect(code || 302, url)
    return this.success()
  }
})

import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Response } from "express"

export default new NativeFunction({
  name: "$setHtmlHeader",
  version: "1.1.0",
  description: "Sets Content-Type: text/html on the response.",
  unwrap: false,
  output: ArgType.Boolean,
  async execute(ctx) {
    const res = ctx.response as Response
    res.set("Content-Type", "text/html")
    return this.success(true)
  },
})

import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Response } from "express"

export default new NativeFunction({
  name: "$setJsonHeader",
  version: "1.1.0",
  description: "Sets Content-Type: application/json on the response.",
  unwrap: false,
  output: ArgType.Boolean,
  async execute(ctx) {
    const res = ctx.response as Response
    res.set("Content-Type", "application/json")
    return this.success(true)
  },
})

import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Response } from "express"

export default new NativeFunction({
  name: "$removeHeader",
  version: "1.1.0",
  description: "Removes a header from the response.",
  brackets: true,
  unwrap: true,
  args: [
    {
      name: "Key",
      description: "The name of the header to remove.",
      type: ArgType.String,
      required: true,
      rest: false,
    },
  ],
  output: ArgType.Boolean,
  async execute(ctx, [key]) {
    const res = ctx.response as Response
    try {
      res.removeHeader(key)
      return this.success(true)
    } catch {
      return this.success(false)
    }
  },
})

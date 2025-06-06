import { ArgType, NativeFunction } from "@tryforge/forgescript"
import path from "path"
import fs from "fs"
import mime from "mime-types"
import type { Response } from "express"

export default new NativeFunction({
  name: "$sendImage",
  version: "1.1.0",
  description: "Sends an image file in the response using its path and correct content-type.",
  brackets: true,
  unwrap: true,
  args: [
    {
      name: "path",
      description: "Relative path to the image file",
      required: true,
      rest: false,
      type: ArgType.String,
    },
  ],
  output: ArgType.Boolean,
  execute(_, [filePath]) {
    const rel = filePath.trim()
    const absolute = path.resolve("media", rel)
    const res = _.getEnvironmentKey("res") as Response | undefined

    if (!res) return this.customError("Response object not found.")
    if (!fs.existsSync(absolute)) return this.customError("File does not exist")

    const type = mime.lookup(absolute) || "application/octet-stream"
    res.contentType(type)
    res.sendFile(absolute)
    return this.success(true)
  }
})

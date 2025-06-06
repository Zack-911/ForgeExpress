import { ArgType, NativeFunction } from "@tryforge/forgescript"
import path from "path"
import fs from "fs"
import type { Response } from "express"
import mime from "mime-types"

export default new NativeFunction({
  name: "$sendVideo",
  version: "1.1.0",
  description: "Sends a video file (or animation like GIF) with correct content-type.",
  brackets: true,
  unwrap: true,
  args: [
    {
      name: "path",
      description: "Relative path to the video or animated media file",
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

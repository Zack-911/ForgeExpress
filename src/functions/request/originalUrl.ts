import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"

export default new NativeFunction({
	name: "$originalURL",
    version: "1.1.0",
	description: "Retrieves the full original URL of the incoming request.",
	unwrap: false,
	output: ArgType.String,
	async execute(_) {
		const req = _.getEnvironmentKey("req") as Request | undefined
		if (!req) return this.success("")
		return this.success(req.originalUrl || "")
	}
})

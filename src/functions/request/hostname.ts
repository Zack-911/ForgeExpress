import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"

export default new NativeFunction({
	name: "$hostname",
    version: "1.1.0",
	description: "Retrieves the hostname from the request. Returns an empty string if unavailable.",
	unwrap: false,
	output: ArgType.String,
	async execute(_) {
		const req = _.getEnvironmentKey("req") as Request | undefined
		if (!req) return this.success("")
		return this.success(req.hostname || "")
	}
})

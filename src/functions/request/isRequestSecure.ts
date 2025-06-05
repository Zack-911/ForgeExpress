import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"

export default new NativeFunction({
	name: "$isRequestSecure",
    version: "1.1.0",
	description: "Checks if the incoming request was made over HTTPS.",
	unwrap: false,
	output: ArgType.Boolean,
	async execute(_) {
		const req = _.getEnvironmentKey("req") as Request | undefined
		if (!req) return this.success(false)
		return this.success(req.secure)
	}
})

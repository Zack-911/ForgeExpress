import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"

export default new NativeFunction({
	name: "$baseURL",
    version: "1.1.0",
	description: "Retrieves the base URL of the request. Returns empty string if unavailable.",
	unwrap: false,
	output: ArgType.String,
	async execute(_) {
		const req = _.getEnvironmentKey("req") as Request | undefined
		if (!req) return this.success("")
		return this.success(req.baseUrl || "")
	}
})

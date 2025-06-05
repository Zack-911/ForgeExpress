import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"

export default new NativeFunction({
	name: "$getHeader",
    version: "1.1.0",
	description: "Retrieves a header from the request. Returns an empty string if not found.",
	brackets: true,
	unwrap: true,
	output: ArgType.String,
	args: [
		{
			name: "Name",
			description: "The header name.",
			type: ArgType.String,
			required: true,
			rest: false
		}
	],
	async execute(_, [name]) {
		const req = _.getEnvironmentKey("req") as Request | undefined
		if (!req || !name) return this.success("")
		const header = req.headers[name.trim().toLowerCase()]
		return this.success(typeof header === "string" ? header : "")
	}
})

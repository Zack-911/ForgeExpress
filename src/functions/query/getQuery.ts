import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"

export default new NativeFunction({
	name: "$getQuery",
    version: "1.1.0",
	description: "Retrieves a query parameter from the request. Returns an empty string if not found.",
	brackets: true,
	unwrap: true,
	output: ArgType.String,
	args: [
		{
			name: "Name",
			description: "The query parameter name.",
			type: ArgType.String,
			required: true,
			rest: false
		}
	],
	async execute(_, [name]) {
		const req = _.getEnvironmentKey("req") as Request | undefined
		if (!req || !name) return this.success("")
		const value = req.query[name.trim()]
		return this.success(typeof value === "string" ? value : "")
	}
})

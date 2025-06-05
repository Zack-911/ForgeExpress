import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Request } from "express"

export default new NativeFunction({
	name: "$loadBodyTo",
    version: "1.1.0",
	description: "Loads the parsed request body into an environment variable.",
	brackets: true,
	unwrap: true,
	args: [
		{
			name: "Name",
			description: "The environment variable name to assign the request body to.",
			type: ArgType.String,
			required: true,
			rest: false
		}
	],
	async execute(_, [name]) {
		const req = _.getEnvironmentKey("req") as Request | undefined
		if (!req || !req.body) return this.customError("No body found in the request.")
		_.setEnvironmentKey(name, req.body)
		return this.success()
	}
})

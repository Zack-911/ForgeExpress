import { ArgType, NativeFunction } from "@tryforge/forgescript"
import type { Response } from "express"

export default new NativeFunction({
	name: "$sendText",
    version: "1.1.0",
	description: "Sends plain text in a response, with an optional status code.",
	brackets: true,
	unwrap: true,
	output: ArgType.Boolean,
	args: [
		{
			name: "Content",
			description: "The text content to send.",
			type: ArgType.String,
			required: true,
			rest: false,
		},
		{
			name: "Status Code",
			description: "The status code to send with the response.",
			type: ArgType.Number,
			required: false,
			rest: false,
		},
	],
	async execute(_, [content, statusCode]) {
		const res = _.getEnvironmentKey("res") as Response | undefined
		if (!res) return this.customError("Response object not found in environment.")

		const code = typeof statusCode === "number" ? statusCode : 200
		res.status(code).setHeader("Content-Type", "text/plain")
		res.send(content)

		return this.success(true)
	},
})

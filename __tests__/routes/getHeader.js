module.exports = {
	url: "/getHeader",
	method: "get",
	auth: false,
	handler: `
	$log[hi]
	$sendText[$getHeader[test];200]
	`
}

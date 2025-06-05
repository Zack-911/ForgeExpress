module.exports = {
	url: "/hostname",
	method: "get",
	auth: false,
	handler: `
	$log[Host: $hostname]
	$sendText[Tested $hostname;200]
	`
}

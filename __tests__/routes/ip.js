module.exports = {
	url: "/ip",
	method: "get",
	auth: false,
	handler: `
	$log[IP: $ip]
	$sendText[Tested $ip;200]
	`
}

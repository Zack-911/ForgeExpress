module.exports = {
	url: "/secure",
	method: "get",
	auth: false,
	handler: `
	$log[Secure? $isRequestSecure]
	$sendText[Tested $isRequestSecure;200]
	`
}

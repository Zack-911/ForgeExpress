module.exports = {
	url: "/baseurl",
	method: "get",
	auth: false,
	handler: `
	$log[$baseURL]
	$sendText[Tested $baseURL;200]
	`
}

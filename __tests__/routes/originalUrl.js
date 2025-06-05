module.exports = {
	url: "/original",
	method: "get",
	auth: false,
	handler: `
	$log[Original URL: $originalURL]
	$sendText[Tested $originalURL;200]
	`
}

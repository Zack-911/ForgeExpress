module.exports = {
	url: "/string",
	method: "get",
	auth: false,
	handler: `
	$log[hi]
	$sendText[success!;200]
	`
}

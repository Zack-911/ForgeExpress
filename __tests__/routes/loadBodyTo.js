module.exports = {
	url: "/body",
	method: "post",
	auth: false,
	handler: `
	$loadBodyTo[bodyData]
	$log[Body loaded: $env[bodyData]]
	$sendText[Tested LoadBodyTo:$env[bodyData];200]
	`
}

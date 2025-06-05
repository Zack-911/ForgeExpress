module.exports = {
	url: "/query",
	method: "get",
	auth: false,
	handler: `
	$log[$getQuery[test]]
	$sendText[Tested $getQuery[test];200]
	`
}

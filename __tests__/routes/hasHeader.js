module.exports = {
  url: "/has-header",
  method: "get",
  auth: false,
  handler: `
    $sendText[Has User-Agent: $hasHeader[user-agent]]
  `
}

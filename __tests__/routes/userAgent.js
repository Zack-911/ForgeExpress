module.exports = {
  url: "/user-agent",
  method: "get",
  auth: false,
  handler: `
    $sendText[$userAgent]
  `
}

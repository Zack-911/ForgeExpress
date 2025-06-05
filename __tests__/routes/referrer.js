module.exports = {
  url: "/referrer",
  method: "get",
  auth: false,
  handler: `
    $sendText[$referrer]
  `
}

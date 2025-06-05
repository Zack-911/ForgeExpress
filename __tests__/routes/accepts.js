module.exports = {
  url: "/accepts",
  method: "get",
  auth: false,
  handler: `
    $sendText[$accepts]
  `
}

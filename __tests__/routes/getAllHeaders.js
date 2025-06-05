module.exports = {
  url: "/headers",
  method: "get",
  auth: false,
  handler: `
    $sendJson[$getAllHeaders]
  `
}

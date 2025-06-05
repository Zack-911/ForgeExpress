module.exports = {
  url: "/raw",
  method: "post",
  auth: false,
  handler: `
    $sendText[$getRawBody]
  `
}

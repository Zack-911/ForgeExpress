module.exports = {
  url: "/status",
  method: "get",
  auth: false,
  handler: `
    $setStatus[201]
    $sendText[Created!]
  `
}

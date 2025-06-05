module.exports = {
  url: "/header",
  method: "get",
  auth: false,
  handler: `
    $setHeader[X-Test;Success]
    $sendText[Header set!]
  `
}

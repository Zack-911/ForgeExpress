module.exports = {
  url: "/body-has",
  method: "post",
  auth: false,
  handler: `
    $sendText[Has 'test' key: $bodyHas[test]]
  `
}

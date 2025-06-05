module.exports = {
  url: "/json",
  method: "get",
  auth: false,
  handler: `
    $sendJson[{"hello":"world"};200]
  `
}

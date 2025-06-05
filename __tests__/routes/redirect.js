module.exports = {
  url: "/redirect",
  method: "get",
  auth: false,
  handler: `
    $redirect[https://github.com/zack-911/forgeexpress;302]
  `
}

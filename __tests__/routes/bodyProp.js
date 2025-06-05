module.exports = {
  url: "/body-prop",
  method: "post",
  auth: false,
  handler: `
    $sendJson[{"value": "$getBodyProp[test]"}]
  `
}

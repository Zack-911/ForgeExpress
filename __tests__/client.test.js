const { ForgeClient, LogPriority } = require('@tryforge/forgescript')
const path = require('path')
const { ForgeAPI } = require('@tryforge/forge.api')
const { ForgeExpress } = require('../dist')

const api = new ForgeAPI({
  port: 3008,
  auth: {
    type: 0,
  },
});

const client = new ForgeClient({
    extensions: [api, new ForgeExpress],
    events: [
        'messageCreate'
    ],
    intents: [
        'Guilds',
        'GuildMessages',
        'MessageContent'
    ],
    prefixes: ['.']
})

api.load(path.resolve(__dirname, 'routes'))

client.login('')
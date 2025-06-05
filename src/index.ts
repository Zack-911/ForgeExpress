import {
    ForgeExtension,
    ForgeClient,
} from "@tryforge/forgescript"


export class ForgeExpress extends ForgeExtension {
    name = "forge.express"
    description = "Extension for scheduling repeated tasks."
    version = require("../package.json").version

    private instance!: ForgeClient

    config: any
    commands: any

    init(client: ForgeClient): void {
        this.instance = client

        this.load(__dirname + "/functions")
    }
}

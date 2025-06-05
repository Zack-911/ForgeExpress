"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeExpress = void 0;
const forgescript_1 = require("@tryforge/forgescript");
class ForgeExpress extends forgescript_1.ForgeExtension {
    name = "forge.express";
    description = "Extension for scheduling repeated tasks.";
    version = require("../package.json").version;
    instance;
    config;
    commands;
    init(client) {
        this.instance = client;
        this.load(__dirname + "/functions");
    }
}
exports.ForgeExpress = ForgeExpress;
//# sourceMappingURL=index.js.map
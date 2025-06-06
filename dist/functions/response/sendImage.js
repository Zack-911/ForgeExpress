"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const mime_types_1 = __importDefault(require("mime-types"));
exports.default = new forgescript_1.NativeFunction({
    name: "$sendImage",
    version: "1.1.0",
    description: "Sends an image file in the response using its path and correct content-type.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "path",
            description: "Relative path to the image file",
            required: true,
            rest: false,
            type: forgescript_1.ArgType.String,
        },
    ],
    output: forgescript_1.ArgType.Boolean,
    execute(_, [filePath]) {
        const rel = filePath.trim();
        const absolute = path_1.default.resolve("media", rel);
        const res = _.getEnvironmentKey("res");
        if (!res)
            return this.customError("Response object not found.");
        if (!fs_1.default.existsSync(absolute))
            return this.customError("File does not exist");
        const type = mime_types_1.default.lookup(absolute) || "application/octet-stream";
        res.contentType(type);
        res.sendFile(absolute);
        return this.success(true);
    }
});
//# sourceMappingURL=sendImage.js.map
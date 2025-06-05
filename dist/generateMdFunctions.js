"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDocsFromMetadata = generateDocsFromMetadata;
const fs = __importStar(require("fs"));
function generateDocsFromMetadata(jsonPath) {
    const raw = fs.readFileSync(jsonPath, "utf-8");
    const functions = JSON.parse(raw);
    const grouped = functions.reduce((acc, fn) => {
        if (!acc[fn.category])
            acc[fn.category] = [];
        acc[fn.category].push(fn);
        return acc;
    }, {});
    function formatArgs(args) {
        if (!args || args.length === 0)
            return "None";
        return args
            .map((a) => `- \`${a.name}\` (${a.type}${a.required ? ", required" : ", optional"}) - ${a.description}`)
            .join("\n");
    }
    function formatOutput(output) {
        if (!output || output.length === 0)
            return "None";
        return output.join(" | ");
    }
    let md = "# ForgeExpress Functions\n\n";
    for (const category of Object.keys(grouped)) {
        md += `## ${capitalize(category)}\n\n`;
        for (const fn of grouped[category]) {
            md += `### ${fn.name} (v${fn.version})\n`;
            md += `${fn.description}\n\n`;
            if (fn.args && fn.args.length > 0) {
                md += `**Arguments:**\n\n${formatArgs(fn.args)}\n\n`;
            }
            md += `**Returns:** \`${formatOutput(fn.output)}\`  \n`;
            md += `**Brackets:** \`${fn.brackets ?? false}\`  \n`;
            md += `**Unwrap:** \`${fn.unwrap ?? false}\`\n\n`;
        }
    }
    return md;
}
function capitalize(s) {
    if (s.length === 0)
        return s;
    return s[0].toUpperCase() + s.slice(1);
}
//# sourceMappingURL=generateMdFunctions.js.map
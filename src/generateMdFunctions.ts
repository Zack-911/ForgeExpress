import * as fs from "fs";

type Arg = {
  name: string;
  description: string;
  type: string;
  required: boolean;
  rest: boolean;
};

type Func = {
  name: string;
  version: string;
  description: string;
  brackets?: boolean;
  unwrap?: boolean;
  args?: Arg[];
  output?: string[];
  category: string;
};

export function generateDocsFromMetadata(jsonPath: string): string {
  const raw = fs.readFileSync(jsonPath, "utf-8");
  const functions: Func[] = JSON.parse(raw);

  const grouped = functions.reduce<Record<string, Func[]>>((acc, fn) => {
    if (!acc[fn.category]) acc[fn.category] = [];
    acc[fn.category].push(fn);
    return acc;
  }, {});

  function formatArgs(args: Arg[] | undefined): string {
    if (!args || args.length === 0) return "None";
    return args
      .map(
        (a) =>
          `- \`${a.name}\` (${a.type}${
            a.required ? ", required" : ", optional"
          }) - ${a.description}`
      )
      .join("\n");
  }

  function formatOutput(output: string[] | undefined): string {
    if (!output || output.length === 0) return "None";
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

function capitalize(s: string) {
  if (s.length === 0) return s;
  return s[0].toUpperCase() + s.slice(1);
}

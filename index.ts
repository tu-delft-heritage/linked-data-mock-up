import schemaExamples from "./src/examples";

for (let i = 0; i < schemaExamples.length; i++) {
  const example = schemaExamples[i];
  const file = await Bun.file(`./json/schema-example-${i}.json`);
  Bun.write(file, JSON.stringify(example, null, 4));
}

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "@/sanity/schemas";
import { projectId, dataset } from "@/sanity/env";

export default defineConfig({
  name: "dtg-studio",
  title: "DTG - Content Management",
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});

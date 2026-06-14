"use client";

import { NextStudio } from "next-sanity/studio";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "@/sanity/schemas";
import { projectId, dataset } from "@/sanity/env";

const config = defineConfig({
  name: "dtg-studio",
  title: "DTG - Content Management",
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
  basePath: "/studio",
});

export default function StudioPage() {
  return <NextStudio config={config} />;
}

import type { SchemaTypeDefinition } from "sanity";
import { header } from "./header";
import { hero } from "./hero";
import { gioiThieu } from "./gioi-thieu";
import { veDtg } from "./ve-dtg";
import { partnersPage } from "./partners";

export const schemaTypes: SchemaTypeDefinition[] = [header, hero, gioiThieu, veDtg, partnersPage];

import type { SchemaTypeDefinition } from "sanity";
import { header } from "./header";
import { hero } from "./hero";
import { gioiThieu } from "./gioi-thieu";
import { veDtg } from "./ve-dtg";
import { giaiPhap } from "./giai-phap";
import { partnersPage } from "./partners";
import { tuyenDung } from "./tuyen-dung";
import { footer } from "./footer";
import { lienHe } from "./lien-he";
import { tinTuc } from "./tin-tuc";
import { baiVietGiaiPhap } from "./bai-viet-giai-phap";
import { veChungToiPage } from "./ve-chung-toi-page";

export const schemaTypes: SchemaTypeDefinition[] = [header, hero, gioiThieu, veDtg, giaiPhap, partnersPage, tuyenDung, footer, lienHe, tinTuc, baiVietGiaiPhap, veChungToiPage];

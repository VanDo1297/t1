import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "036on1ws",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

const viDoc = {
  _type: "trangDoiTac",
  ngonNgu: "vi",
  tieuDeHero: "Khách hàng – Đối tác",
  moTaHero:
    "DTS phát huy sức mạnh từ vị thế là một trong những nhà tích hợp hệ thống hàng đầu tại Việt Nam qua các chiến lược hợp tác kinh doanh với những đối tác công nghệ hàng đầu trong và ngoài nước. Chúng tôi mang đến cho khách hàng nhiều sự lựa chọn về sản phẩm – công nghệ tối ưu, tiên tiến và phù hợp với thực trạng ngành Công nghệ thông tin tại Việt Nam. Sự hài lòng của khách hàng là ưu tiên hàng đầu với chúng tôi.",
  nutLienHe: "Tư vấn",
  duongDanNut: "/lien-he",
  tieuDeDoiTac: "ĐỐI TÁC CHIẾN LƯỢC",
  danhSachDoiTac: [],
};

const enDoc = {
  _type: "trangDoiTac",
  ngonNgu: "en",
  tieuDeHero: "Clients & Partners",
  moTaHero:
    "DTS leverages its position as one of the leading system integrators in Vietnam through strategic business partnerships with top technology partners domestically and internationally. We provide customers with a wide range of optimal, advanced products and technologies suited to the IT landscape in Vietnam. Customer satisfaction is our top priority.",
  nutLienHe: "Consult",
  duongDanNut: "/contact",
  tieuDeDoiTac: "STRATEGIC PARTNERS",
  danhSachDoiTac: [],
};

async function seed() {
  console.log("Creating Vietnamese document...");
  const vi = await client.create(viDoc);
  console.log(`✓ Created: ${vi._id}`);

  console.log("Creating English document...");
  const en = await client.create(enDoc);
  console.log(`✓ Created: ${en._id}`);

  console.log("Done!");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});

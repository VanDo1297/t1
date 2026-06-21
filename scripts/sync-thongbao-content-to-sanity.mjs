import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "036on1ws",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

// Helper to create a Portable Text block
function block(text, key) {
  return {
    _type: "block",
    _key: key,
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: `${key}s`, text, marks: [] }],
  };
}

const bodyVi = [
  block('Bằng việc tích vào ô "Đồng ý", Tôi xác nhận đã đọc, hiểu và đồng ý với những điều kiện và điều khoản về hoạt động xử lý Dữ liệu cá nhân của Công ty Cổ phần Công nghệ Truyền thông DTS và Công ty TNHH MetaServ (METASERV) là công ty thành viên do DTS sở hữu 100% vốn) - sau đây gọi chung là "Công ty" - cụ thể như sau.', "b0"),
  block("1. Định nghĩa:", "b1"),
  block("1.1. Dữ liệu cá nhân là dữ liệu số hoặc thông tin dưới dạng khác xác định hoặc giúp xác định một con người cụ thể, bao gồm: dữ liệu cá nhân cơ bản và dữ liệu cá nhân nhạy cảm. Dữ liệu cá nhân sau khi khử nhận dạng không còn là dữ liệu cá nhân.", "b2"),
  block("1.2. Mối quan hệ của Tôi và Công ty trong quá trình xử lý Dữ liệu cá nhân của Tôi như sau:\n- Tôi là Chủ thể dữ liệu\n- Công ty là Bên kiểm soát dữ liệu hoặc Bên kiểm soát và xử lý dữ liệu cá nhân của Tôi\n- Bên được Công ty ủy quyền tiến hành xử lý những dữ liệu cá nhân do Tôi cung cấp sẽ là Bên xử lý dữ liệu", "b3"),
  block("1.3. Xử lý Dữ liệu cá nhân là hoạt động tác động đến Dữ liệu cá nhân, bao gồm một hoặc nhiều hoạt động như sau: thu thập, phân tích, tổng hợp, mã hóa, giải mã, chỉnh sửa, xóa, hủy, khử nhận dạng, cung cấp, công khai, chuyển giao Dữ liệu cá nhân và hoạt động khác tác động đến Dữ liệu cá nhân.", "b4"),
  block("1.4. Quan hệ tuyển dụng: là quan hệ phát sinh giữa Công ty và cá nhân ứng tuyển trong quá trình Công ty tiếp nhận, xem xét, đánh giá hồ sơ, phỏng vấn, kiểm tra, xác minh thông tin, thương lượng điều kiện làm việc và quyết định tuyển dụng hoặc không tuyển dụng, bao gồm cả các hoạt động chuẩn bị cho việc giao kết hợp đồng lao động.", "b5"),
  block("2. Phạm vi Dữ liệu cá nhân được xử lý:", "b6"),
  block("Trong quá trình thực hiện quy trình tuyển dụng, Công ty có thể thu thập, lưu trữ, sử dụng và xử lý Dữ liệu cá nhân của Tôi theo quy định pháp luật.", "b7"),
  block("2.1. Dữ liệu cá nhân cơ bản bao gồm: Họ, chữ đệm và tên khai sinh, tên gọi khác (nếu có); Ngày, tháng, năm sinh; Giới tính; Nơi sinh, nơi đăng ký khai sinh, nơi đăng ký thường trú, nơi ở hiện tại, quê quán, địa chỉ liên hệ; Quốc tịch; Hình ảnh của cá nhân; Số điện thoại, số định danh cá nhân, số hộ chiếu, số giấy phép lái xe; Tình trạng hôn nhân; Thông tin về mối quan hệ gia đình; Thông tin về tài khoản số của cá nhân.", "b8"),
  block("2.2. Dữ liệu cá nhân nhạy cảm bao gồm: Dữ liệu tiết lộ nguồn gốc chủng tộc, nguồn gốc dân tộc; Quan điểm về chính trị, tôn giáo, tín ngưỡng; Tình trạng sức khỏe; Dữ liệu sinh trắc học, đặc điểm di truyền; Dữ liệu về tội phạm, vi phạm pháp luật; Hình ảnh thẻ căn cước, chứng minh nhân dân.", "b9"),
  block("3. Mục đích xử lý Dữ liệu cá nhân:", "b10"),
  block("● (Bắt buộc) Tuyển dụng: Xác nhận, xác thực thông tin và đánh giá năng lực trong suốt quy trình tuyển dụng.\n● (Bắt buộc) Quản trị nội bộ: Thực hiện các hoạt động quản lý lao động, hành chính, kế toán, tài chính, an ninh.\n● (Bắt buộc) Thiết lập hồ sơ nhân sự: Sử dụng làm thông tin đầu vào để soạn thảo các văn bản khi được tuyển dụng.\n● (Tùy chọn) Lưu trữ thông tin để xem xét và liên hệ cho các vị trí công việc phù hợp trong tương lai.", "b11"),
  block("4. Cách thức xử lý Dữ liệu cá nhân: Công ty thực hiện việc xử lý thông qua một hoặc nhiều hoạt động: thu thập, phân tích, tổng hợp, mã hóa, giải mã, chỉnh sửa, xóa, hủy, khử nhận dạng, cung cấp, công khai.", "b12"),
  block("5. Chuyển giao Dữ liệu cá nhân: Công ty có thể chuyển giao với các bên thứ ba trong phạm vi cần thiết, bao gồm các công ty thành viên, công ty mẹ, công ty liên kết, các cá nhân/tổ chức đóng vai trò tư vấn.", "b13"),
  block("6. Quyền và nghĩa vụ của Chủ thể dữ liệu:\n6.1. Quyền: Xem hoặc yêu cầu chỉnh sửa; Đồng ý hoặc không đồng ý, yêu cầu rút lại sự đồng ý; Yêu cầu cung cấp, xóa, hạn chế xử lý.\n6.2. Nghĩa vụ: Tự bảo vệ dữ liệu cá nhân; Tôn trọng, bảo vệ dữ liệu người khác; Cung cấp đầy đủ, chính xác; Chấp hành pháp luật.", "b14"),
  block("7. Lưu trữ: Dữ liệu được lưu trữ đến khi hết 05 năm hoặc khi yêu cầu xóa.", "b15"),
  block("8. Kiểm tra tham chiếu: Công ty có thể tiến hành kiểm tra lý lịch hoặc thông qua bên thứ ba.", "b16"),
  block("9. Rút lại sự đồng ý: Gửi yêu cầu đến Bộ phận Bảo vệ dữ liệu cá nhân - Công ty Cổ phần Công nghệ Truyền thông DTS - Email: bvdlcn@dts.com.vn. Công ty sẽ xử lý trong vòng 02 ngày làm việc.", "b17"),
  block("10. Các rủi ro và biện pháp an toàn: Công ty đã và đang áp dụng các biện pháp kỹ thuật, quản lý và tổ chức phù hợp để bảo vệ dữ liệu.", "b18"),
  block("11. Xác nhận đồng ý: Bằng việc tích chọn vào ô \"Đồng ý\", Tôi xác nhận đã đọc, hiểu rõ toàn bộ nội dung và đồng ý cho phép Công ty xử lý dữ liệu cá nhân theo đúng phạm vi, mục đích, thời hạn đã quy định.", "b19"),
];

async function sync() {
  const existing = await client.fetch(`*[_type == "thongBaoDuLieu"]{ _id, language }`);

  for (const lang of ["vi"]) {
    const doc = existing.find((d) => d.language === lang);
    if (doc) {
      console.log(`Updating body for thongBaoDuLieu (${lang}) — ${doc._id}`);
      await client.patch(doc._id).set({ body: bodyVi }).commit();
      console.log(`✓ Updated ${lang}`);
    }
  }
  console.log("\nDone!");
}

sync().catch(console.error);

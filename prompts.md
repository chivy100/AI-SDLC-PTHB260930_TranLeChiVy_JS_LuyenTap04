# NHẬT KÝ PROMPT AI - BÀI LUYỆN TẬP 04
**Môn học:** Luyện tập kỹ năng JavaScript cơ bản (AI-Driven)  
**Đề bài:** Đề luyện tập số 04 - Ứng dụng Trắc nghiệm JavaScript (Quiz App)  
**Đơn vị:** Câu lạc bộ Lập trình  
**Sinh viên thực hiện:** Trần Lê Chí Vỹ (TranLeChiVy)  
**Lớp:** AI-SDLC-PTHB260930  
**Tài khoản GitHub:** [chivy100](https://github.com/chivy100)  
**Repository:** `AI-SDLC-PTHB260930_TranLeChiVy_JS_LuyenTap04`

---

## 📋 MỤC LỤC CÁC PROMPT THEO THỨ TỰ TÍNH NĂNG

1. [Prompt 1: Khai báo cấu trúc dữ liệu, bộ câu hỏi chuẩn và hằng số ban đầu](#prompt-1-khai-báo-cấu-trúc-dữ-liệu-bộ-câu-hỏi-chuẩn-và-hằng-số-ban-đầu)
2. [Prompt 2: Thiết kế giao diện 3 màn hình chuyển đổi linh hoạt và chuẩn responsive 375px](#prompt-2-thiết-kế-giao-diện-3-màn-hình-chuyển-đổi-linh-hoạt-và-chuẩn-responsive-375px)
3. [Prompt 3: Xây dựng Chức năng 1 - Bắt đầu lượt chơi, lọc chủ đề và xáo trộn câu hỏi](#prompt-3-xây-dựng-chức-năng-1---bắt-đầu-lượt-chơi-lọc-chủ-đề-và-xáo-trộn-câu-hỏi)
4. [Prompt 4: Xây dựng Chức năng 2 - Hiển thị câu hỏi động, thanh tiến độ và đồng hồ đếm ngược 15 giây](#prompt-4-xây-dựng-chức-năng-2---hiển-thị-câu-hỏi-động-thanh-tiến-độ-và-đồng-hồ-đếm-ngược-15-giây)
5. [Prompt 5: Xây dựng Chức năng 3 - Trả lời, chấm điểm, khóa nút và xử lý hết giờ](#prompt-5-xây-dựng-chức-năng-3---trả-lời-chấm-điểm-khóa-nút-và-xử-lý-hết-giờ)
6. [Prompt 6: Xây dựng Chức năng 4 - Tổng kết kết quả, xếp loại nhận xét và lưu Top 5 bảng xếp hạng](#prompt-6-xây-dựng-chức-năng-4---tổng-kết-kết-quả-xếp-loại-nhận-xét-và-lưu-top-5-bảng-xếp-hạng)
7. [Prompt 7: Xây dựng Chức năng 5 - Làm lại câu sai không tính điểm xếp hạng](#prompt-7-xây-dựng-chức-năng-5---làm-lại-câu-sai-không-tính-điểm-xếp-hạng)
8. [Prompt 8: Xây dựng Chức năng 6 - Quản lý bảng xếp hạng, xóa có xác nhận và tô nổi bật người chơi](#prompt-8-xây-dựng-chức-năng-6---quản-lý-bảng-xếp-hạng-xóa-có-xác-nhận-và-tô-nổi-bật-người-chơi)
9. [Prompt 9: Tái cấu trúc hàm dùng chung (render, loadData, saveData, shuffle) và tối ưu trải nghiệm](#prompt-9-tái-cấu-trúc-hàm-dùng-chung-render-loaddata-savedata-shuffle-và-tối-ưu-trải-nghiệm)

---

### Prompt 1: Khai báo cấu trúc dữ liệu, bộ câu hỏi chuẩn và hằng số ban đầu
> **Mục tiêu:** Đáp ứng Mục 4.1 Khai báo dữ liệu và quy tắc nghiệp vụ.
```text
Bạn hãy đóng vai trò là một lập trình viên JavaScript chuyên nghiệp. Hãy khai báo cấu trúc dữ liệu cho bài toán Ứng dụng Trắc nghiệm JavaScript (Quiz App) cho Câu lạc bộ Lập trình:
1. Mảng questions chứa bộ câu hỏi khai báo sẵn gồm ít nhất 12 câu về JavaScript (đề xuất 16 câu, chia đều cho 4 chủ đề). Mỗi câu hỏi là một Object gồm đúng 5 thuộc tính:
   - id: number (không trùng lặp, ví dụ: 1, 2, 3...)
   - noiDung: string (nội dung câu hỏi kiến thức JS thực tế, không rỗng)
   - luaChon: array (mảng đúng 4 chuỗi chứa 4 phương án trả lời)
   - dapAn: number (chỉ số lựa chọn đúng, từ 0 đến 3)
   - chuDe: string (thuộc một trong bốn chủ đề: "Biến", "Mảng", "Hàm", "DOM", mỗi chủ đề có ít nhất 3 câu).
2. Khai báo các hằng số:
   - THOI_GIAN = 15 (thời gian làm mỗi câu là 15 giây)
   - TOP = 5 (bảng xếp hạng chỉ lưu 5 kết quả cao nhất)
   - STORAGE_KEY = 'quizScores'
3. Khai báo mảng scores chứa bảng xếp hạng, nạp từ localStorage khi khởi chạy.
4. Khai báo các biến trạng thái lượt chơi:
   - viTri: number (vị trí câu hỏi hiện tại, bắt đầu từ 0)
   - diem: number (điểm số đạt được trong lượt chơi)
   - cauSai: array (mảng lưu các câu người chơi trả lời sai hoặc bị hết giờ)
   - timer: biến lưu định thời interval của đồng hồ đếm ngược 15s
   - thoiGianConLai: number (số giây đếm ngược còn lại của câu hiện tại)
   - danhSachHienTai: array (danh sách câu hỏi đã lọc và xáo trộn của lượt chơi)
   - tenNguoiChoi: string (tên người chơi đã nhập)
   - chuDeDaChon: string (chủ đề người chơi chọn: "all" hoặc "Biến", "Mảng", "Hàm", "DOM")
   - isRetrying: boolean (đánh dấu lượt chơi có phải là làm lại câu sai hay không)
   - vuaVaoBangId: string/number (đánh dấu kết quả vừa được thêm vào bảng xếp hạng để tô nổi bật).
```

---

### Prompt 2: Thiết kế giao diện 3 màn hình chuyển đổi linh hoạt và chuẩn responsive 375px
> **Mục tiêu:** Đáp ứng Mục 4.2 Giao diện chính, thẩm mỹ hiện đại và responsive trên thiết bị di động.
```text
Hãy thiết kế giao diện HTML và CSS thuần (Vanilla CSS) cho Ứng dụng Trắc nghiệm JavaScript đáp ứng các yêu cầu sau:
1. Cấu trúc ứng dụng gồm đúng 3 màn hình, tại một thời điểm chỉ hiển thị 1 màn hình duy nhất (sử dụng class hoặc thuộc tính hidden):
   - [Màn hình bắt đầu] (screen-start):
     + Tiêu đề ứng dụng nổi bật, giới thiệu CLB Lập trình.
     + Form nhập tên người chơi (input text) và thông báo lỗi tại chỗ (inline alert).
     + Hộp chọn chủ đề (select dropdown) gồm: "Tất cả chủ đề", "Biến", "Mảng", "Hàm", "DOM".
     + Nút [Bắt đầu làm bài].
     + Bảng xếp hạng Top 5 hiển thị Thứ hạng (Hạng 1-5 có huy hiệu), Tên người chơi, Điểm/Tổng số, Tỷ lệ %, Ngày chơi (dd/mm/yyyy).
     + Nếu chưa có người chơi: hiển thị thông báo "Chưa có ai chơi".
     + Nút [Xóa bảng xếp hạng] màu cảnh báo.
   - [Màn hình câu hỏi] (screen-question):
     + Header câu hỏi: huy hiệu "Câu x/y", nhãn chủ đề và Đồng hồ đếm ngược "Còn lại: 15s" trực quan.
     + Thanh tiến độ (Progress bar) sinh động thể hiện tỷ lệ hoàn thành.
     + Khung nội dung câu hỏi rõ ràng, dễ đọc.
     + Lưới 4 nút lựa chọn A, B, C, D to, rõ ràng, hiệu ứng hover đẹp mắt.
     + Hàng nút điều hướng với nút [Câu tiếp] (hoặc [Hoàn thành bài thi]).
   - [Màn hình kết quả] (screen-result):
     + Huy hiệu tổng kết điểm: dạng "8/10 (80%)".
     + Nhận xét kết quả tương ứng: "Xuất sắc!" (>=80%), "Đạt yêu cầu" (50%-79%), "Cần ôn thêm" (<50%).
     + Nút hành động: [Làm lại câu sai] (chỉ hiện khi có câu sai) và [Về trang đầu].
     + Khu vực danh sách xem lại câu sai: hiển thị rõ câu sai, phương án người chơi đã chọn (hoặc hết giờ), và đáp án chính xác kèm giải thích ngắn gọn.
2. Thiết kế thẩm mỹ:
   - Phong cách hiện đại (Modern Glassmorphism / Sleek Clean UI), tông màu Indigo/Slate sang trọng, bo góc mềm mại, đổ bóng cao cấp.
   - Font chữ Google Fonts (Inter / Plus Jakarta Sans).
   - Màu sắc phân biệt rõ ràng: Đúng (xanh ngọc Emerald), Sai (đỏ hồng Rose), Cảnh báo (vàng hổ phách Amber), Thông tin (xanh dương Indigo).
   - Responsive hoàn hảo từ màn hình điện thoại 375px đến máy tính bảng và màn hình máy tính để bàn.
```

---

### Prompt 3: Xây dựng Chức năng 1 - Bắt đầu lượt chơi, lọc chủ đề và xáo trộn câu hỏi
> **Mục tiêu:** Đáp ứng Mục 4.3 Bắt đầu lượt chơi.
```text
Hãy viết hàm batDauLuotChoi() xử lý sự kiện khi người chơi bấm nút "Bắt đầu":
1. Lấy giá trị tên người chơi từ ô input và dùng .trim() để loại bỏ khoảng trắng thừa hai đầu.
2. Kiểm tra tính hợp lệ:
   - Nếu tên rỗng: hiển thị thông báo lỗi ngay trên trang "Vui lòng nhập tên" và dừng lại, không bắt đầu.
   - Nếu tên dài quá 20 ký tự: hiển thị thông báo lỗi "Tên tối đa 20 ký tự" và dừng lại.
   - Xóa bỏ thông báo lỗi nếu nhập hợp lệ.
3. Lọc danh sách câu hỏi theo chủ đề đã chọn:
   - Nếu chọn "Tất cả" (all): lấy toàn bộ các câu trong questions.
   - Nếu chọn một chủ đề cụ thể ("Biến", "Mảng", "Hàm", "DOM"): dùng Array.prototype.filter() để lọc ra các câu hỏi có chuDe khớp với giá trị đã chọn.
4. Xáo trộn thứ tự các câu hỏi đã lọc bằng hàm shuffle() để mỗi lượt chơi đều ngẫu nhiên và thú vị.
5. Đặt lại các biến trạng thái:
   - viTri = 0
   - diem = 0
   - cauSai = []
   - isRetrying = false
6. Chuyển sang màn hình câu hỏi (screen-question) và gọi hàm hienThiCauHoi() để bắt đầu câu đầu tiên.
```

---

### Prompt 4: Xây dựng Chức năng 2 - Hiển thị câu hỏi động, thanh tiến độ và đồng hồ đếm ngược 15 giây
> **Mục tiêu:** Đáp ứng Mục 4.4 Hiển thị câu hỏi.
```text
Hãy viết hàm hienThiCauHoi() để hiển thị câu hỏi hiện tại lên giao diện:
1. Xác định câu hỏi hiện tại từ danhSachHienTai[viTri].
2. Cập nhật thông tin tiêu đề:
   - "Câu {viTri + 1}/{danhSachHienTai.length}".
   - Tag chủ đề tương ứng với màu sắc riêng biệt.
   - Cập nhật thanh tiến độ (progress bar) theo tỷ lệ: ((viTri + 1) / danhSachHienTai.length) * 100%.
   - Cập nhật nội dung câu hỏi vào phần tử giao diện.
3. Tạo 4 nút lựa chọn A, B, C, D bằng vòng lặp (forEach/map):
   - Nhãn chữ cái A, B, C, D kèm nội dung tương ứng của câu hỏi.
   - Gắn sự kiện click gọi hàm traLoiCauHoi(index).
   - Đảm bảo các nút ở trạng thái sẵn sàng (chưa bị khóa, chưa có màu đúng/sai).
4. Ẩn nút "Câu tiếp" cho đến khi người dùng chọn phương án hoặc hết giờ.
5. Khởi động đồng hồ đếm ngược 15 giây:
   - Xóa timer cũ nếu đang chạy bằng clearInterval(timer).
   - Đặt thoiGianConLai = THOI_GIAN (15 giây).
   - Hiển thị số giây lên giao diện (ví dụ: "Còn lại: 15 giây").
   - Dùng setInterval chạy mỗi 1000ms:
     + Giảm thoiGianConLai đi 1.
     + Cập nhật lại số giây hiển thị.
     + Khi thoiGianConLai <= 0: dừng timer bằng clearInterval, tính là trả lời sai do hết giờ, tô màu xanh đáp án đúng, khóa cả 4 nút lựa chọn, lưu câu hỏi này vào mảng cauSai (đánh dấu lựa chọn là hết giờ), và hiển thị nút "Câu tiếp".
```

---

### Prompt 5: Xây dựng Chức năng 3 - Trả lời, chấm điểm, khóa nút và xử lý hết giờ
> **Mục tiêu:** Đáp ứng Mục 4.5 Trả lời và chấm điểm.
```text
Hãy viết hàm traLoiCauHoi(viTriChon) và hàm chuyenCau() để xử lý tương tác của người chơi:
1. Khi người chơi bấm vào một phương án:
   - Dừng ngay đồng hồ đếm ngược bằng clearInterval(timer).
   - Khóa toàn bộ 4 nút lựa chọn (disabled = true) để ngăn người chơi bấm lại hoặc đổi ý.
   - So sánh vị trí chọn viTriChon với đáp án đúng dapAn của câu hiện tại:
     + Nếu ĐÚNG (viTriChon === dapAn):
       * Tô màu xanh (class correct) cho nút đã chọn.
       * Tăng điểm số: diem++.
     + Nếu SAI (viTriChon !== dapAn):
       * Tô màu đỏ (class wrong) cho nút người chơi đã bấm.
       * Tô màu xanh (class correct) cho nút đáp án đúng để người chơi biết đáp án chính xác.
       * Lưu thông tin câu sai vào mảng cauSai gồm: { ...cauHoi, daChon: viTriChon, dapAnDung: dapAn }.
   - Hiển thị nút "Câu tiếp" (hoặc nếu là câu cuối cùng thì đổi nhãn thành "Xem kết quả").
2. Viết hàm chuyenCau():
   - Tăng viTri++.
   - Nếu viTri < danhSachHienTai.length: gọi hienThiCauHoi() để sang câu tiếp theo.
   - Nếu đã làm hết câu: gọi hàm xuLyKetQua() để chuyển sang màn hình kết quả và tổng kết điểm.
```

---

### Prompt 6: Xây dựng Chức năng 4 - Tổng kết kết quả, xếp loại nhận xét và lưu Top 5 bảng xếp hạng
> **Mục tiêu:** Đáp ứng Mục 4.6 Kết quả và lưu bảng xếp hạng.
```text
Hãy viết hàm xuLyKetQua() để tính toán và hiển thị màn hình kết quả:
1. Tính điểm số và tỷ lệ phần trăm:
   - Điểm hiển thị dạng: "{diem}/{tongSo} ({phanTram}%)" với phanTram = Math.round((diem / tongSo) * 100).
2. Đưa ra nhận xét tương ứng dựa trên tỷ lệ phần trăm:
   - Từ 80% trở lên: "Xuất sắc!" (kèm biểu tượng cúp/ngôi sao và màu xanh thành công).
   - Từ 50% đến dưới 80%: "Đạt yêu cầu" (màu xanh dương/hổ phách).
   - Dưới 50%: "Cần ôn thêm" (màu cam/đỏ khích lệ).
3. Hiển thị danh sách các câu sai:
   - Nếu mảng cauSai có phần tử: liệt kê chi tiết từng câu sai gồm nội dung câu, phương án người chơi đã chọn (hoặc thông báo "Hết thời gian"), và đáp án đúng.
   - Nếu không có câu sai: hiển thị lời chúc mừng đạt điểm tuyệt đối.
4. Xử lý lưu bảng xếp hạng:
   - NẾU KHÔNG PHẢI lượt làm lại câu sai (!isRetrying):
     + Tạo đối tượng kết quả: { id: Date.now(), ten: tenNguoiChoi, diem: diem, tongSo: tongSo, phanTram: phanTram, ngay: dinhDangNgay(new Date()) }.
     + Thêm vào mảng scores.
     + Sắp xếp mảng scores theo thứ tự điểm giảm dần (nếu bằng điểm, giữ nguyên thứ tự ai chơi trước xếp trước).
     + Chỉ giữ lại đúng TOP = 5 kết quả cao nhất (scores = scores.slice(0, TOP)).
     + Lưu vào localStorage thông qua hàm saveData().
     + Ghi nhận vuaVaoBangId = id vừa tạo để tô nổi bật nếu người này lọt vào Top 5.
5. Cập nhật nút "Làm lại câu sai":
   - Nếu cauSai.length > 0: hiển thị nút.
   - Nếu cauSai.length === 0: ẩn nút.
6. Chuyển sang màn hình kết quả (screen-result).
```

---

### Prompt 7: Xây dựng Chức năng 5 - Làm lại câu sai không tính điểm xếp hạng
> **Mục tiêu:** Đáp ứng Mục 4.7 Làm lại câu sai.
```text
Hãy viết hàm lamLaiCauSai() xử lý khi người chơi bấm nút "Làm lại câu sai":
1. Kiểm tra nếu mảng cauSai trống thì không thực hiện.
2. Tạo danh sách câu hỏi mới chỉ gồm các câu hỏi từ mảng cauSai của lượt trước.
3. Đặt cờ isRetrying = true để quy định lượt chơi này là lượt ôn tập, TUYỆT ĐỐI KHÔNG lưu điểm vào bảng xếp hạng khi kết thúc.
4. Xáo trộn danh sách câu hỏi cần làm lại bằng hàm shuffle() để tăng tính khách quan.
5. Đặt lại các biến trạng thái:
   - viTri = 0
   - diem = 0
   - danhSachHienTai = câu sai đã xáo trộn
   - cauSai = [] (để lưu những câu vẫn làm sai trong lượt ôn tập này)
6. Chuyển sang màn hình câu hỏi (screen-question) và hiển thị câu hỏi đầu tiên.
```

---

### Prompt 8: Xây dựng Chức năng 6 - Quản lý bảng xếp hạng, xóa có xác nhận và tô nổi bật người chơi
> **Mục tiêu:** Đáp ứng Mục 4.8 Quản lý bảng xếp hạng.
```text
Hãy xây dựng tính năng hiển thị và quản lý bảng xếp hạng:
1. Viết hàm renderBangXepHang() hiển thị danh sách Top 5 trong màn hình bắt đầu:
   - Nếu mảng scores rỗng: hiển thị thông báo "Chưa có ai chơi" trong vùng bảng.
   - Nếu có dữ liệu: hiển thị bảng gồm các cột: Thứ hạng, Người chơi, Điểm số (ví dụ: 9/10), Tỷ lệ (%), Ngày chơi (dd/mm/yyyy).
   - Top 3 có huy hiệu đặc biệt: Hạng 1 (Vàng), Hạng 2 (Bạc), Hạng 3 (Đồng).
   - Nếu có người chơi vừa lọt vào bảng xếp hạng (vuaVaoBangId trùng với id của dòng), thêm hiệu ứng class highlight/glow để làm nổi bật dòng đó.
2. Viết hàm xoaBangXepHang():
   - Khi bấm nút "Xóa bảng xếp hạng", hiển thị hộp thoại xác nhận bằng confirm("Bạn có chắc chắn muốn xóa toàn bộ bảng xếp hạng không?").
   - Nếu người dùng chọn Đồng ý (OK):
     + Gán scores = [].
     + Gọi hàm saveData() để xóa trong localStorage.
     + Đặt lại vuaVaoBangId = null.
     + Gọi render() để cập nhật lại giao diện, hiển thị "Chưa có ai chơi".
```

---

### Prompt 9: Tái cấu trúc hàm dùng chung (render, loadData, saveData, shuffle) và tối ưu trải nghiệm
> **Mục tiêu:** Đáp ứng Mục 4.9 Tổ chức chương trình bằng hàm, chuẩn mã nguồn sạch và không có lỗi Console.
```text
Hãy tổ chức mã nguồn app.js thành các hàm mô-đun rõ ràng, chuẩn hóa theo yêu cầu kỹ thuật:
1. Hàm shuffle(mang): nhận vào một mảng, tạo bản sao và xáo trộn ngẫu nhiên bằng thuật toán Fisher-Yates, trả về mảng mới mà không làm biến đổi mảng gốc.
2. Hàm loadData(): đọc dữ liệu từ localStorage với key 'quizScores' bằng JSON.parse(). Nếu có lỗi hoặc chưa có dữ liệu thì trả về mảng rỗng [].
3. Hàm saveData(): lưu mảng scores vào localStorage bằng JSON.stringify().
4. Hàm dinhDangNgay(date): định dạng ngày tháng sang chuỗi chuẩn "dd/mm/yyyy" (thêm số 0 ở đầu nếu ngày hoặc tháng < 10).
5. Hàm chuyenManHinh(manHinhId): quản lý việc ẩn/hiện giữa 3 màn hình (screen-start, screen-question, screen-result), đảm bảo tại một thời điểm chỉ có 1 màn hình active.
6. Hàm render(): hàm trung tâm điều phối vẽ lại giao diện theo trạng thái hiện tại.
7. Đảm bảo tuân thủ nghiêm ngặt các quy định:
   - TUYỆT ĐỐI KHÔNG dùng alert() hay prompt().
   - Chỉ dùng confirm() cho thao tác xóa bảng xếp hạng.
   - Kiểm tra kỹ các sự kiện DOMContentLoaded để tránh lỗi null element.
   - Mở trực tiếp file index.html trên Google Chrome không có bất kỳ lỗi đỏ nào trong Console (F12).
```

/**
 * ============================================================================
 * ĐỀ LUYỆN TẬP SỐ 04: ỨNG DỤNG TRẮC NGHIỆM JAVASCRIPT (AI-DRIVEN)
 * Tác giả: Trần Lê Chí Vỹ (TranLeChiVy)
 * Lớp: AI-SDLC-PTHB260930
 * GitHub: https://github.com/chivy100
 * Repository: AI-SDLC-PTHB260930_TranLeChiVy_JS_LuyenTap04
 * ============================================================================
 */

// ============================================================================
// 1. KHAI BÁO DỮ LIỆU & HẰNG SỐ (Mục 4.1)
// ============================================================================

/**
 * Hằng số cấu hình hệ thống
 * - THOI_GIAN: 15 giây cho mỗi câu hỏi
 * - TOP: 5 kết quả cao nhất được lưu trong bảng xếp hạng
 * - STORAGE_KEY: Key lưu trữ bảng xếp hạng trong localStorage
 */
const THOI_GIAN = 15;
const TOP = 5;
const STORAGE_KEY = 'quizScores';

/**
 * Bộ câu hỏi trắc nghiệm JavaScript khai báo sẵn (16 câu, 4 câu mỗi chủ đề)
 * Mỗi câu hỏi là 1 object có đúng 5 thuộc tính:
 * - id: number (không trùng lặp)
 * - noiDung: string (nội dung câu hỏi)
 * - luaChon: array (mảng đúng 4 chuỗi phương án)
 * - dapAn: number (vị trí đáp án đúng từ 0 đến 3)
 * - chuDe: string ("Biến", "Mảng", "Hàm", "DOM")
 */
const questions = [
  // --- Chủ đề: Biến (4 câu) ---
  {
    id: 1,
    noiDung: "Từ khóa nào trong JavaScript được dùng để khai báo một biến có giá trị không thể gán lại?",
    luaChon: ["var", "let", "const", "static"],
    dapAn: 2,
    chuDe: "Biến"
  },
  {
    id: 2,
    noiDung: "Biến khai báo bằng từ khóa 'let' có phạm vi (scope) hoạt động như thế nào?",
    luaChon: ["Phạm vi toàn cục (Global scope)", "Phạm vi khối lệnh (Block scope)", "Phạm vi tệp tin (File scope)", "Không bị giới hạn phạm vi"],
    dapAn: 1,
    chuDe: "Biến"
  },
  {
    id: 3,
    noiDung: "Hiện tượng nào xảy ra khi JavaScript đưa phần khai báo biến và hàm lên đầu phạm vi trước khi thực thi?",
    luaChon: ["Hoisting", "Closure", "Event Bubbling", "Polymorphism"],
    dapAn: 0,
    chuDe: "Biến"
  },
  {
    id: 4,
    noiDung: "Toán tử 'typeof null' trong JavaScript trả về kết quả là gì?",
    luaChon: ["'null'", "'undefined'", "'object'", "'boolean'"],
    dapAn: 2,
    chuDe: "Biến"
  },

  // --- Chủ đề: Mảng (4 câu) ---
  {
    id: 5,
    noiDung: "Phương thức nào dùng để thêm một hoặc nhiều phần tử vào CUỐI mảng và trả về độ dài mới?",
    luaChon: ["push()", "pop()", "shift()", "unshift()"],
    dapAn: 0,
    chuDe: "Mảng"
  },
  {
    id: 6,
    noiDung: "Phương thức nào tạo ra một mảng mới chứa các phần tử thỏa mãn điều kiện kiểm tra của hàm callback?",
    luaChon: ["forEach()", "map()", "filter()", "reduce()"],
    dapAn: 2,
    chuDe: "Mảng"
  },
  {
    id: 7,
    noiDung: "Phương thức nào dùng để biến đổi từng phần tử trong mảng và trả về một mảng mới có cùng độ dài?",
    luaChon: ["filter()", "map()", "find()", "concat()"],
    dapAn: 1,
    chuDe: "Mảng"
  },
  {
    id: 8,
    noiDung: "Để kiểm tra xem một giá trị có phải là mảng trong JavaScript hay không, ta dùng cú pháp nào?",
    luaChon: ["typeof value === 'array'", "value.isArray()", "Array.isArray(value)", "value instanceof ArrayOnly"],
    dapAn: 2,
    chuDe: "Mảng"
  },

  // --- Chủ đề: Hàm (4 câu) ---
  {
    id: 9,
    noiDung: "Khái niệm nào mô tả một hàm có khả năng ghi nhớ và truy cập vào các biến thuộc phạm vi chứa nó ngay cả khi phạm vi đó đã thực thi xong?",
    luaChon: ["Callback", "Closure", "Promise", "Recursion"],
    dapAn: 1,
    chuDe: "Hàm"
  },
  {
    id: 10,
    noiDung: "Cú pháp () => {} trong JavaScript ES6 đại diện cho loại hàm nào?",
    luaChon: ["Generator Function", "Arrow Function", "Anonymous Constructor", "Async Function"],
    dapAn: 1,
    chuDe: "Hàm"
  },
  {
    id: 11,
    noiDung: "Nếu một hàm JavaScript không có câu lệnh 'return' cụ thể, giá trị trả về mặc định của hàm đó là gì?",
    luaChon: ["0", "null", "undefined", "false"],
    dapAn: 2,
    chuDe: "Hàm"
  },
  {
    id: 12,
    noiDung: "Cú pháp ba dấu chấm (...) đứng trước tham số cuối cùng của hàm (ví dụ: function sum(...nums)) được gọi là gì?",
    luaChon: ["Spread operator", "Rest parameter", "Optional chaining", "Destructuring"],
    dapAn: 1,
    chuDe: "Hàm"
  },

  // --- Chủ đề: DOM (4 câu) ---
  {
    id: 13,
    noiDung: "Phương thức nào của Document trả về phần tử đầu tiên khớp với bộ chọn CSS (CSS selector) chỉ định?",
    luaChon: ["getElementById()", "getElementsByClassName()", "querySelector()", "querySelectorAll()"],
    dapAn: 2,
    chuDe: "DOM"
  },
  {
    id: 14,
    noiDung: "Để lắng nghe sự kiện người dùng nhấn chuột vào một phần tử trên trang web, ta sử dụng phương thức nào?",
    luaChon: ["attachTrigger()", "addEventListener('click', ...)", "registerClickEvent()", "listenEvent('press', ...)"],
    dapAn: 1,
    chuDe: "DOM"
  },
  {
    id: 15,
    noiDung: "Thuộc tính nào dùng để lấy hoặc thay đổi nội dung văn bản thuần (không bao gồm thẻ HTML) của một phần tử?",
    luaChon: ["innerHTML", "textContent", "outerHTML", "nodeValue"],
    dapAn: 1,
    chuDe: "DOM"
  },
  {
    id: 16,
    noiDung: "Phương thức nào dùng để tạo ra một thẻ HTML mới trong bộ nhớ DOM trước khi chèn vào trang web?",
    luaChon: ["document.createElement()", "document.newElement()", "document.buildNode()", "document.append()"],
    dapAn: 0,
    chuDe: "DOM"
  }
];

/**
 * Biến lưu bảng xếp hạng và các biến trạng thái lượt chơi
 */
let scores = [];                // Mảng bảng xếp hạng nạp từ localStorage
let viTri = 0;                  // Vị trí câu hỏi hiện tại trong lượt chơi (0-indexed)
let diem = 0;                   // Điểm số đạt được trong lượt chơi hiện tại
let cauSai = [];                // Mảng chứa các câu trả lời sai hoặc hết giờ
let timer = null;               // Biến định thời đếm ngược (setInterval)
let thoiGianConLai = THOI_GIAN; // Số giây còn lại của câu hiện tại
let danhSachHienTai = [];       // Danh sách câu hỏi cho lượt chơi hiện tại (sau khi lọc & xáo)
let tenNguoiChoi = '';          // Tên người chơi trong lượt
let isRetrying = false;         // Cờ xác định lượt làm lại câu sai (không lưu bảng xếp hạng)
let vuaVaoBangId = null;        // ID bản ghi vừa thêm vào bảng xếp hạng để tô nổi bật
let manHinhHienTai = 'screen-start'; // Màn hình đang kích hoạt


// ============================================================================
// 2. CÁC HÀM DÙNG CHUNG (Mục 4.9)
// ============================================================================

/**
 * Hàm xáo trộn mảng ngẫu nhiên (Fisher-Yates Shuffle)
 * Nhận vào một mảng và trả về mảng mới đã xáo trộn, không làm biến đổi mảng gốc.
 * Dùng chung cho xáo câu hỏi ở Chức năng 1 (Bắt đầu) và Chức năng 5 (Làm lại câu sai).
 * @param {Array} mang 
 * @returns {Array} Mảng mới đã xáo trộn
 */
function shuffle(mang) {
  const ketQua = [...mang];
  for (let i = ketQua.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ketQua[i], ketQua[j]] = [ketQua[j], ketQua[i]];
  }
  return ketQua;
}

/**
 * Hàm đọc dữ liệu bảng xếp hạng từ localStorage
 * @returns {Array} Mảng kết quả bảng xếp hạng
 */
function loadData() {
  try {
    const duLieu = localStorage.getItem(STORAGE_KEY);
    return duLieu ? JSON.parse(duLieu) : [];
  } catch (error) {
    console.error("Lỗi khi đọc dữ liệu từ localStorage:", error);
    return [];
  }
}

/**
 * Hàm ghi dữ liệu bảng xếp hạng vào localStorage
 * @param {Array} data Mảng kết quả cần lưu
 */
function saveData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Lỗi khi lưu dữ liệu vào localStorage:", error);
  }
}

/**
 * Hàm định dạng ngày tháng theo định dạng dd/mm/yyyy
 * @param {Date} date Đối tượng Date
 * @returns {string} Chuỗi ngày chuẩn dd/mm/yyyy
 */
function dinhDangNgay(date) {
  const d = date instanceof Date ? date : new Date(date);
  const ngay = String(d.getDate()).padStart(2, '0');
  const thang = String(d.getMonth() + 1).padStart(2, '0');
  const nam = d.getFullYear();
  return `${ngay}/${thang}/${nam}`;
}

/**
 * Hàm chuyển đổi giữa 3 màn hình
 * Đảm bảo chỉ hiển thị đúng 1 màn hình tại một thời điểm
 * @param {string} tenManHinh Id của màn hình cần hiển thị
 */
function chuyenManHinh(tenManHinh) {
  manHinhHienTai = tenManHinh;
  const screens = ['screen-start', 'screen-question', 'screen-result'];
  screens.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (id === tenManHinh) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    }
  });

  // Gọi render() để cập nhật lại dữ liệu màn hình đang hiển thị
  render();
}

/**
 * Hàm hiển thị thông báo lỗi tại chỗ trên màn hình bắt đầu (Không dùng alert/prompt)
 * @param {string|null} thongBao Nội dung lỗi hoặc null để ẩn
 */
function hienThiLoiBatDau(thongBao) {
  const errorBox = document.getElementById('start-error');
  const errorText = document.getElementById('start-error-text');
  if (!errorBox || !errorText) return;

  if (thongBao) {
    errorText.textContent = thongBao;
    errorBox.classList.remove('hidden');
  } else {
    errorBox.classList.add('hidden');
  }
}


// ============================================================================
// 3. CHỨC NĂNG 1: BẮT ĐẦU LƯỢT CHƠI (Mục 4.3)
// ============================================================================

/**
 * Hàm bắt đầu lượt chơi mới
 * - Bỏ khoảng trắng hai đầu của tên
 * - Validate tên (rỗng -> "Vui lòng nhập tên", > 20 ký tự -> "Tên tối đa 20 ký tự")
 * - Lọc câu hỏi theo chủ đề đã chọn
 * - Xáo trộn câu hỏi bằng shuffle()
 * - Đặt lại điểm, vị trí, mảng câu sai, isRetrying = false
 * - Chuyển sang màn hình câu hỏi
 */
function batDauLuotChoi() {
  const nameInput = document.getElementById('player-name');
  const topicSelect = document.getElementById('topic-select');
  if (!nameInput || !topicSelect) return;

  const tenNhap = nameInput.value.trim();

  // Kiểm tra tên rỗng
  if (!tenNhap) {
    hienThiLoiBatDau('Vui lòng nhập tên');
    nameInput.focus();
    return;
  }

  // Kiểm tra tên quá 20 ký tự
  if (tenNhap.length > 20) {
    hienThiLoiBatDau('Tên tối đa 20 ký tự');
    nameInput.focus();
    return;
  }

  // Xóa thông báo lỗi khi hợp lệ
  hienThiLoiBatDau(null);
  tenNguoiChoi = tenNhap;

  // Lọc theo chủ đề đã chọn
  const chuDe = topicSelect.value;
  let danhSachLoc = [];
  if (chuDe === 'all') {
    danhSachLoc = [...questions];
  } else {
    danhSachLoc = questions.filter(q => q.chuDe === chuDe);
  }

  // Đảm bảo có câu hỏi
  if (danhSachLoc.length === 0) {
    hienThiLoiBatDau('Không tìm thấy câu hỏi cho chủ đề này!');
    return;
  }

  // Xáo trộn thứ tự câu hỏi trước lượt chơi
  danhSachHienTai = shuffle(danhSachLoc);

  // Đặt lại trạng thái lượt chơi
  viTri = 0;
  diem = 0;
  cauSai = [];
  isRetrying = false;
  vuaVaoBangId = null;

  // Chuyển sang màn hình câu hỏi
  chuyenManHinh('screen-question');
}


// ============================================================================
// 4. CHỨC NĂNG 2: HIỂN THỊ CÂU HỎI (Mục 4.4)
// ============================================================================

/**
 * Hàm dừng đồng hồ đếm ngược an toàn
 */
function dungDongHo() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

/**
 * Hàm hiển thị câu hỏi hiện tại lên giao diện
 * - Hiển thị "Câu x/y", nội dung câu hỏi
 * - Dùng vòng lặp tạo 4 nút lựa chọn nhãn A, B, C, D
 * - Cập nhật thanh tiến độ theo số câu đã làm trên tổng số câu
 * - Đếm ngược 15 giây, hết giờ tính sai, tô xanh đáp án đúng và khóa nút
 */
function hienThiCauHoi() {
  dungDongHo();

  if (!danhSachHienTai || danhSachHienTai.length === 0 || viTri >= danhSachHienTai.length) {
    xuLyKetQua();
    return;
  }

  const cauHienTai = danhSachHienTai[viTri];
  const tongSo = danhSachHienTai.length;

  // 1. Cập nhật số câu & chủ đề
  const counterEl = document.getElementById('question-counter');
  const topicEl = document.getElementById('question-topic-badge');
  const questionTextEl = document.getElementById('question-text');
  const progressFillEl = document.getElementById('progress-bar-fill');
  const optionsContainer = document.getElementById('options-container');
  const feedbackEl = document.getElementById('answer-feedback');
  const btnNext = document.getElementById('btn-next');
  const btnNextText = document.getElementById('btn-next-text');

  if (counterEl) counterEl.textContent = `Câu ${viTri + 1}/${tongSo}`;
  if (topicEl) {
    topicEl.textContent = cauHienTai.chuDe;
    topicEl.setAttribute('data-topic', cauHienTai.chuDe);
  }
  if (questionTextEl) questionTextEl.textContent = cauHienTai.noiDung;

  // 2. Cập nhật thanh tiến độ: tỷ lệ phần trăm số câu đã/đang làm
  if (progressFillEl) {
    const phanTramTienDo = ((viTri + 1) / tongSo) * 100;
    progressFillEl.style.width = `${phanTramTienDo}%`;
  }

  // 3. Reset phản hồi & ẩn nút Câu tiếp
  if (feedbackEl) {
    feedbackEl.textContent = '';
    feedbackEl.className = 'answer-feedback hidden';
  }
  if (btnNext) {
    btnNext.classList.add('hidden');
    if (btnNextText) {
      btnNextText.textContent = (viTri === tongSo - 1) ? 'Xem kết quả' : 'Câu tiếp theo';
    }
  }

  // 4. Tạo 4 nút lựa chọn A, B, C, D bằng vòng lặp
  if (optionsContainer) {
    optionsContainer.innerHTML = '';
    const nhanChuCai = ['A', 'B', 'C', 'D'];

    cauHienTai.luaChon.forEach((luaChonText, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-btn';
      btn.id = `option-${idx}`;
      btn.setAttribute('data-index', idx);
      btn.setAttribute('role', 'radio');
      btn.setAttribute('aria-checked', 'false');

      btn.innerHTML = `
        <span class="option-letter">${nhanChuCai[idx]}</span>
        <span class="option-text">${luaChonText}</span>
      `;

      btn.addEventListener('click', () => {
        traLoiCauHoi(idx);
      });

      optionsContainer.appendChild(btn);
    });
  }

  // 5. Khởi động đồng hồ đếm ngược 15 giây
  khoiDongDongHo();
}

/**
 * Hàm khởi động đồng hồ đếm ngược 15 giây
 * Mỗi giây cập nhật giao diện, khi hết giờ tính sai và khóa nút
 */
function khoiDongDongHo() {
  dungDongHo();

  thoiGianConLai = THOI_GIAN;
  const timerNumberEl = document.getElementById('timer-number');
  const timerBoxEl = document.getElementById('timer-box');

  if (timerNumberEl) timerNumberEl.textContent = thoiGianConLai;
  if (timerBoxEl) timerBoxEl.classList.remove('timer-urgent');

  timer = setInterval(() => {
    thoiGianConLai--;

    if (timerNumberEl) {
      timerNumberEl.textContent = thoiGianConLai;
    }

    // Hiệu ứng cảnh báo khi còn <= 5 giây
    if (timerBoxEl) {
      if (thoiGianConLai <= 5) {
        timerBoxEl.classList.add('timer-urgent');
      } else {
        timerBoxEl.classList.remove('timer-urgent');
      }
    }

    // Xử lý khi hết giờ
    if (thoiGianConLai <= 0) {
      dungDongHo();
      xuLyHetGio();
    }
  }, 1000);
}

/**
 * Xử lý khi hết giờ (0 giây)
 * - Tính là sai (0 điểm)
 * - Tô xanh đáp án đúng
 * - Khóa cả 4 nút
 * - Lưu câu đó vào mảng cauSai
 * - Hiện thông báo và nút Câu tiếp
 */
function xuLyHetGio() {
  const cauHienTai = danhSachHienTai[viTri];
  const optionButtons = document.querySelectorAll('.option-btn');
  const feedbackEl = document.getElementById('answer-feedback');
  const btnNext = document.getElementById('btn-next');

  // Khóa tất cả các nút
  optionButtons.forEach(btn => {
    btn.disabled = true;
  });

  // Tô xanh đáp án đúng
  const correctBtn = document.getElementById(`option-${cauHienTai.dapAn}`);
  if (correctBtn) {
    correctBtn.classList.add('correct');
  }

  // Lưu câu sai do hết giờ
  cauSai.push({
    ...cauHienTai,
    luaChonCuaNguoiDung: -1, // -1 biểu thị hết giờ
    lyDo: 'Hết thời gian (15 giây)'
  });

  // Hiển thị feedback
  if (feedbackEl) {
    feedbackEl.textContent = '⏱️ Đã hết 15 giây! Câu trả lời không được tính điểm.';
    feedbackEl.className = 'answer-feedback wrong-feedback';
    feedbackEl.classList.remove('hidden');
  }

  // Hiện nút Câu tiếp
  if (btnNext) {
    btnNext.classList.remove('hidden');
  }
}


// ============================================================================
// 5. CHỨC NĂNG 3: TRẢ LỜI VÀ CHẤM ĐIỂM (Mục 4.5)
// ============================================================================

/**
 * Hàm xử lý khi người chơi bấm chọn một đáp án
 * - Dừng đồng hồ, khóa cả 4 nút
 * - Đúng: tô xanh lựa chọn, cộng 1 điểm
 * - Sai: tô đỏ lựa chọn đã chọn, tô xanh đáp án đúng, lưu vào cauSai
 * - Hiện nút Câu tiếp
 * @param {number} viTriChon Chỉ số phương án người chơi chọn (0 - 3)
 */
function traLoiCauHoi(viTriChon) {
  dungDongHo();

  const cauHienTai = danhSachHienTai[viTri];
  const optionButtons = document.querySelectorAll('.option-btn');
  const feedbackEl = document.getElementById('answer-feedback');
  const btnNext = document.getElementById('btn-next');

  // Khóa cả 4 nút (không cho chọn lại)
  optionButtons.forEach(btn => {
    btn.disabled = true;
  });

  const selectedBtn = document.getElementById(`option-${viTriChon}`);
  const correctBtn = document.getElementById(`option-${cauHienTai.dapAn}`);

  if (viTriChon === cauHienTai.dapAn) {
    // Trả lời ĐÚNG
    diem++;
    if (selectedBtn) {
      selectedBtn.classList.add('correct');
      selectedBtn.setAttribute('aria-checked', 'true');
    }

    if (feedbackEl) {
      feedbackEl.textContent = '🎉 Chính xác! Bạn được cộng 1 điểm.';
      feedbackEl.className = 'answer-feedback correct-feedback';
      feedbackEl.classList.remove('hidden');
    }
  } else {
    // Trả lời SAI
    if (selectedBtn) {
      selectedBtn.classList.add('wrong');
      selectedBtn.setAttribute('aria-checked', 'true');
    }
    if (correctBtn) {
      correctBtn.classList.add('correct');
    }

    // Lưu câu sai vào mảng cauSai
    cauSai.push({
      ...cauHienTai,
      luaChonCuaNguoiDung: viTriChon,
      lyDo: 'Chọn sai phương án'
    });

    if (feedbackEl) {
      const nhanDapAnDung = ['A', 'B', 'C', 'D'][cauHienTai.dapAn];
      feedbackEl.textContent = `❌ Chưa chính xác! Đáp án đúng là ${nhanDapAnDung}.`;
      feedbackEl.className = 'answer-feedback wrong-feedback';
      feedbackEl.classList.remove('hidden');
    }
  }

  // Hiển thị nút "Câu tiếp"
  if (btnNext) {
    btnNext.classList.remove('hidden');
  }
}

/**
 * Hàm chuyển sang câu hỏi tiếp theo
 * Hết câu thì chuyển sang màn hình kết quả
 */
function chuyenCau() {
  viTri++;
  if (viTri < danhSachHienTai.length) {
    render();
  } else {
    xuLyKetQua();
  }
}


// ============================================================================
// 6. CHỨC NĂNG 4: KẾT QUẢ VÀ LƯU BẢNG XẾP HẠNG (Mục 4.6)
// ============================================================================

/**
 * Biến lưu trữ thông tin kết quả tính toán của lượt chơi
 */
let thongTinKetQua = null;

/**
 * Hàm xử lý tổng kết kết quả và lưu bảng xếp hạng
 * - Tính điểm dạng "8/10 (80%)", làm tròn số nguyên
 * - Nhận xét theo phần trăm:
 *   + Từ 80% trở lên: "Xuất sắc!"
 *   + Từ 50% đến dưới 80%: "Đạt yêu cầu"
 *   + Dưới 50%: "Cần ôn thêm"
 * - Lưu kết quả vào bảng xếp hạng nếu không phải lượt làm lại
 * - Chuyển sang màn hình kết quả
 */
function xuLyKetQua() {
  dungDongHo();

  const tongSo = danhSachHienTai.length;
  const phanTram = tongSo > 0 ? Math.round((diem / tongSo) * 100) : 0;

  // 1. Nhận xét theo quy định đề bài
  let nhanXet = '';
  let remarkClass = '';
  let badgeIcon = '🎉';

  if (phanTram >= 80) {
    nhanXet = 'Xuất sắc!';
    remarkClass = 'remark-excellent';
    badgeIcon = '🏆';
  } else if (phanTram >= 50) {
    nhanXet = 'Đạt yêu cầu';
    remarkClass = 'remark-pass';
    badgeIcon = '👍';
  } else {
    nhanXet = 'Cần ôn thêm';
    remarkClass = 'remark-needs-work';
    badgeIcon = '💪';
  }

  // 2. Xử lý lưu bảng xếp hạng:
  // QUY TẮC: Kết quả lượt làm lại KHÔNG được lưu vào bảng xếp hạng
  let datTop = false;
  let hangDatDuoc = 0;

  if (!isRetrying) {
    const banGhiMoi = {
      id: Date.now(),
      ten: tenNguoiChoi,
      diem: diem,
      tongSo: tongSo,
      phanTram: phanTram,
      ngay: dinhDangNgay(new Date())
    };

    // Nạp lại dữ liệu mới nhất từ localStorage
    scores = loadData();

    // Thêm bản ghi mới
    scores.push(banGhiMoi);

    // Sắp xếp điểm giảm dần (nếu bằng điểm, người chơi trước đứng trước -> stable sort)
    scores.sort((a, b) => {
      if (b.diem !== a.diem) {
        return b.diem - a.diem;
      }
      return 0; // Giữ nguyên thứ tự xuất hiện ban đầu
    });

    // Chỉ giữ 5 kết quả cao nhất
    scores = scores.slice(0, TOP);

    // Kiểm tra xem bản ghi mới có nằm trong Top 5 hay không
    const viTriTrongBang = scores.findIndex(item => item.id === banGhiMoi.id);
    if (viTriTrongBang !== -1) {
      datTop = true;
      hangDatDuoc = viTriTrongBang + 1;
      vuaVaoBangId = banGhiMoi.id; // Đánh dấu để tô nổi bật
    } else {
      vuaVaoBangId = null;
    }

    // Lưu vào localStorage
    saveData(scores);
  }

  // Lưu thông tin kết quả tính toán để renderKetQua() hiển thị
  thongTinKetQua = {
    tenNguoiChoi,
    diem,
    tongSo,
    phanTram,
    nhanXet,
    remarkClass,
    badgeIcon,
    isRetrying,
    datTop,
    hangDatDuoc
  };

  // Chuyển sang màn hình kết quả
  chuyenManHinh('screen-result');
}

/**
 * Hàm vẽ lại màn hình kết quả từ dữ liệu thongTinKetQua
 */
function renderKetQua() {
  if (!thongTinKetQua) return;

  const {
    tenNguoiChoi: ten,
    diem: diemDat,
    tongSo: tongSoCau,
    phanTram: phanTramDat,
    nhanXet,
    remarkClass,
    badgeIcon,
    isRetrying: dangLamLai,
    datTop,
    hangDatDuoc
  } = thongTinKetQua;

  const resultPlayerName = document.getElementById('result-player-name');
  const resultScore = document.getElementById('result-score');
  const resultRemark = document.getElementById('result-remark');
  const resultBadgeIcon = document.getElementById('result-badge-icon');
  const leaderboardNotice = document.getElementById('result-leaderboard-notice');
  const retryNotice = document.getElementById('result-retry-notice');
  const btnRetry = document.getElementById('btn-retry-wrong');
  const wrongCountBadge = document.getElementById('wrong-count-badge');

  if (resultPlayerName) {
    resultPlayerName.innerHTML = `Thí sinh: <strong>${escapeHtml(ten) || 'Ẩn danh'}</strong>`;
  }
  if (resultScore) {
    resultScore.textContent = `${diemDat}/${tongSoCau} (${phanTramDat}%)`;
  }
  if (resultRemark) {
    resultRemark.textContent = nhanXet;
    resultRemark.className = `score-remark ${remarkClass}`;
  }
  if (resultBadgeIcon) {
    resultBadgeIcon.textContent = badgeIcon;
  }

  if (dangLamLai) {
    if (retryNotice) retryNotice.classList.remove('hidden');
    if (leaderboardNotice) leaderboardNotice.classList.add('hidden');
  } else {
    if (retryNotice) retryNotice.classList.add('hidden');
    if (leaderboardNotice) {
      if (datTop) {
        leaderboardNotice.innerHTML = `✨ Xuất sắc! Bạn đã lọt vào <strong>Hạng ${hangDatDuoc}</strong> trong Top 5 Bảng Xếp Hạng!`;
        leaderboardNotice.classList.remove('hidden');
      } else {
        leaderboardNotice.classList.add('hidden');
      }
    }
  }

  // Cập nhật nút "Làm lại câu sai" (Chức năng 5)
  if (btnRetry && wrongCountBadge) {
    if (cauSai.length > 0) {
      btnRetry.classList.remove('hidden');
      wrongCountBadge.textContent = cauSai.length;
    } else {
      btnRetry.classList.add('hidden');
    }
  }

  // Render chi tiết danh sách câu sai
  hienThiDanhSachCauSai();
}

/**
 * Hàm render danh sách chi tiết các câu trả lời sai kèm đáp án đúng
 */
function hienThiDanhSachCauSai() {
  const container = document.getElementById('wrong-answers-list');
  if (!container) return;

  container.innerHTML = '';
  const nhanChuCai = ['A', 'B', 'C', 'D'];

  if (cauSai.length === 0) {
    container.innerHTML = `
      <div class="all-correct-box">
        <div class="all-correct-icon">🎯</div>
        <div class="all-correct-text">Tuyệt vời! Bạn không làm sai bất kỳ câu hỏi nào.</div>
      </div>
    `;
    return;
  }

  // Có câu sai -> liệt kê từng câu
  cauSai.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'wrong-card';

    let luaChonText = '';
    if (item.luaChonCuaNguoiDung === -1) {
      luaChonText = '⏱️ Không kịp trả lời (Hết 15 giây)';
    } else {
      const char = nhanChuCai[item.luaChonCuaNguoiDung];
      luaChonText = `${char}. ${item.luaChon[item.luaChonCuaNguoiDung]}`;
    }

    const dapAnDungChar = nhanChuCai[item.dapAn];
    const dapAnDungText = `${dapAnDungChar}. ${item.luaChon[item.dapAn]}`;

    card.innerHTML = `
      <div class="wrong-card-header">
        <span class="wrong-card-index">Câu hỏi sai #${idx + 1}</span>
        <span class="badge badge-topic" data-topic="${item.chuDe}">${item.chuDe}</span>
      </div>
      <div class="wrong-card-question">${item.noiDung}</div>
      <div class="wrong-card-details">
        <div>❌ Bạn chọn: <span class="detail-user-choice">${luaChonText}</span></div>
        <div>✅ Đáp án đúng: <span class="detail-correct-choice">${dapAnDungText}</span></div>
      </div>
    `;

    container.appendChild(card);
  });
}


// ============================================================================
// 7. CHỨC NĂNG 5: LÀM LẠI CÂU SAI (Mục 4.7)
// ============================================================================

/**
 * Hàm thực hiện làm lại các câu đã trả lời sai
 * - Nút chỉ hiện khi có câu sai
 * - Bắt đầu lượt mới CHỈ GỒM các câu sai của lượt trước
 * - Xáo trộn danh sách câu sai bằng shuffle()
 * - Đặt cờ isRetrying = true (kết quả không được lưu vào bảng xếp hạng)
 * - Đặt lại điểm = 0, vị trí = 0, mảng cauSai = []
 * - Chuyển sang màn hình câu hỏi
 */
function lamLaiCauSai() {
  if (!cauSai || cauSai.length === 0) return;

  // Lấy danh sách câu sai
  const danhSachCauSai = cauSai.map(item => ({
    id: item.id,
    noiDung: item.noiDung,
    luaChon: item.luaChon,
    dapAn: item.dapAn,
    chuDe: item.chuDe
  }));

  // Xáo trộn các câu hỏi cần làm lại
  danhSachHienTai = shuffle(danhSachCauSai);

  // Đặt cờ làm lại
  isRetrying = true;

  // Đặt lại các biến trạng thái
  viTri = 0;
  diem = 0;
  cauSai = [];

  // Chuyển sang màn hình câu hỏi
  chuyenManHinh('screen-question');
}


// ============================================================================
// 8. CHỨC NĂNG 6: QUẢN LÝ BẢNG XẾP HẠNG (Mục 4.8)
// ============================================================================

/**
 * Hàm vẽ lại bảng xếp hạng ở Màn hình bắt đầu
 * - Đọc từ mảng scores
 * - Hiển thị thứ hạng, tên, điểm và ngày chơi (dd/mm/yyyy)
 * - Bảng xếp hạng trống: hiện "Chưa có ai chơi"
 * - Người chơi vừa vào bảng xếp hạng được tô nổi bật
 */
function renderBangXepHang() {
  const container = document.getElementById('leaderboard-content');
  if (!container) return;

  // Đọc lại từ localStorage
  scores = loadData();

  if (!scores || scores.length === 0) {
    container.innerHTML = `
      <div class="leaderboard-empty">
        <div class="empty-icon">📭</div>
        <div class="empty-title">Chưa có ai chơi</div>
        <div class="empty-desc">Hãy là người đầu tiên tham gia thử thách và ghi danh trên bảng vàng!</div>
      </div>
    `;
    return;
  }

  let tableHtml = `
    <div class="leaderboard-table-wrapper">
      <table class="leaderboard-table" role="table" aria-label="Bảng xếp hạng điểm số">
        <thead>
          <tr>
            <th scope="col" style="width: 80px;">Thứ hạng</th>
            <th scope="col">Người chơi</th>
            <th scope="col">Điểm số</th>
            <th scope="col">Tỷ lệ</th>
            <th scope="col">Ngày chơi</th>
          </tr>
        </thead>
        <tbody>
  `;

  scores.forEach((item, index) => {
    const hang = index + 1;
    let rankBadge = '';

    if (hang === 1) {
      rankBadge = `<span class="rank-badge rank-1" title="Hạng 1 - Quán quân">🥇 1</span>`;
    } else if (hang === 2) {
      rankBadge = `<span class="rank-badge rank-2" title="Hạng 2 - Á quân">🥈 2</span>`;
    } else if (hang === 3) {
      rankBadge = `<span class="rank-badge rank-3" title="Hạng 3 - Quý quân">🥉 3</span>`;
    } else {
      rankBadge = `<span class="rank-badge rank-normal">${hang}</span>`;
    }

    // Kiểm tra xem người chơi này có vừa mới vào bảng hay không
    const isHighlighted = (vuaVaoBangId && item.id === vuaVaoBangId);
    const rowClass = isHighlighted ? 'highlight-new' : '';
    const newBadge = isHighlighted ? '<span class="new-badge">Mới</span>' : '';

    const phanTramHienThi = item.phanTram !== undefined 
      ? `${item.phanTram}%` 
      : `${Math.round((item.diem / item.tongSo) * 100)}%`;

    tableHtml += `
      <tr class="${rowClass}">
        <td>${rankBadge}</td>
        <td class="player-name-cell">${escapeHtml(item.ten)} ${newBadge}</td>
        <td class="score-cell">${item.diem}/${item.tongSo}</td>
        <td>${phanTramHienThi}</td>
        <td class="date-cell">${item.ngay}</td>
      </tr>
    `;
  });

  tableHtml += `
        </tbody>
      </table>
    </div>
  `;

  container.innerHTML = tableHtml;
}

/**
 * Hàm xóa bảng xếp hạng có xác nhận confirm()
 * Quy tắc: Không dùng alert/prompt, riêng thao tác xóa được dùng confirm()
 */
function xoaBangXepHang() {
  const xacNhan = confirm('Bạn có chắc chắn muốn xóa toàn bộ bảng xếp hạng không?');
  if (xacNhan) {
    scores = [];
    saveData(scores);
    vuaVaoBangId = null;
    renderBangXepHang();
  }
}

/**
 * Tránh lỗ hổng XSS khi hiển thị tên người chơi
 * @param {string} str 
 * @returns {string} Chuỗi an toàn
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}


// ============================================================================
// 9. HÀM RENDER DÙNG CHUNG & KHỞI TẠO ỨNG DỤNG (Mục 4.9)
// ============================================================================

/**
 * Hàm render() dùng chung để vẽ lại màn hình đang hiển thị từ dữ liệu
 * Gọi lại sau mỗi lần chuyển câu, chuyển màn hình
 */
function render() {
  if (manHinhHienTai === 'screen-start') {
    renderBangXepHang();
  } else if (manHinhHienTai === 'screen-question') {
    hienThiCauHoi();
  } else if (manHinhHienTai === 'screen-result') {
    renderKetQua();
  }
}

/**
 * Hàm khởi tạo và đăng ký các sự kiện khi trang đã tải xong
 */
function khoiTao() {
  // Nạp dữ liệu bảng xếp hạng ban đầu
  scores = loadData();

  // Đăng ký sự kiện nút Bắt đầu
  const btnStart = document.getElementById('btn-start');
  if (btnStart) {
    btnStart.addEventListener('click', batDauLuotChoi);
  }

  // Đăng ký phím Enter cho ô nhập tên
  const nameInput = document.getElementById('player-name');
  if (nameInput) {
    nameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        batDauLuotChoi();
      }
    });
    // Tự động xóa lỗi khi người chơi gõ lại
    nameInput.addEventListener('input', () => {
      hienThiLoiBatDau(null);
    });
  }

  // Đăng ký sự kiện nút Xóa bảng xếp hạng
  const btnClearScores = document.getElementById('btn-clear-scores');
  if (btnClearScores) {
    btnClearScores.addEventListener('click', xoaBangXepHang);
  }

  // Đăng ký sự kiện nút Câu tiếp
  const btnNext = document.getElementById('btn-next');
  if (btnNext) {
    btnNext.addEventListener('click', chuyenCau);
  }

  // Đăng ký sự kiện nút Làm lại câu sai
  const btnRetry = document.getElementById('btn-retry-wrong');
  if (btnRetry) {
    btnRetry.addEventListener('click', lamLaiCauSai);
  }

  // Đăng ký sự kiện nút Về trang đầu
  const btnBackHome = document.getElementById('btn-back-home');
  if (btnBackHome) {
    btnBackHome.addEventListener('click', () => {
      chuyenManHinh('screen-start');
    });
  }

  // Khởi động ở màn hình bắt đầu
  chuyenManHinh('screen-start');
}

// Chạy khởi tạo khi tài liệu DOM sẵn sàng
document.addEventListener('DOMContentLoaded', khoiTao);

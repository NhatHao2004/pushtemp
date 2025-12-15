# 📋 THIẾT KẾ GIAO DIỆN NGƯỜI DÙNG - VĂN HÓA KHMER NAM BỘ

## 🎯 Tổng quan dự án

### Mục tiêu
Xây dựng nền tảng số hóa và bảo tồn văn hóa Khmer Nam Bộ với giao diện người dùng hiện đại, thân thiện, hỗ trợ đa ngôn ngữ (Việt - Khmer).

### Công nghệ sử dụng
- **Backend:** PHP 8.x, MySQL/MariaDB
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla/jQuery)
- **UI Framework:** Custom CSS với design system
- **Icons:** Font Awesome 6
- **Maps:** Leaflet.js + OpenStreetMap
- **Charts:** Chart.js
- **i18n:** Custom PHP Language System

---

## 📁 CẤU TRÚC THƯ MỤC

```
FrontendUser/
├── index.php                    # Trang chủ
├── login.php                    # Đăng nhập
├── register.php                 # Đăng ký
├── logout.php                   # Đăng xuất
├── forgot-password.php          # Quên mật khẩu
├── profile.php                  # Trang cá nhân
├── settings.php                 # Cài đặt tài khoản
│
├── van-hoa.php                  # Danh sách văn hóa
├── van-hoa-chi-tiet.php         # Chi tiết bài viết văn hóa
│
├── chua-khmer.php               # Danh sách chùa
├── chua-khmer-chi-tiet.php      # Chi tiết chùa
│
├── le-hoi.php                   # Danh sách lễ hội
├── le-hoi-chi-tiet.php          # Chi tiết lễ hội
│
├── hoc-tieng-khmer.php          # Danh sách bài học
├── bai-hoc-chi-tiet.php         # Chi tiết bài học
├── bai-tap.php                  # Bài tập tương tác
│
├── truyen-dan-gian.php          # Danh sách truyện
├── truyen-chi-tiet.php          # Đọc truyện
│
├── ban-do.php                   # Bản đồ di sản
├── search.php                   # Tìm kiếm
├── leaderboard.php              # Bảng xếp hạng
│
├── api/                         # API endpoints
│   ├── auth.php
│   ├── comments.php
│   ├── favorites.php
│   ├── progress.php
│   └── search.php
│
├── assets/
│   ├── css/
│   │   ├── main.css             # CSS chính
│   │   ├── components.css       # Components
│   │   └── responsive.css       # Responsive
│   ├── js/
│   │   ├── main.js
│   │   ├── auth.js
│   │   └── components.js
│   └── images/
│
├── config/
│   └── database.php
│
├── includes/
│   ├── header.php
│   ├── footer.php
│   ├── navbar.php
│   ├── language.php
│   └── functions.php
│
├── models/                      # Shared models
│   ├── User.php
│   ├── VanHoa.php
│   ├── ChuaKhmer.php
│   ├── LeHoi.php
│   ├── BaiHoc.php
│   ├── TruyenDanGian.php
│   ├── Comment.php
│   └── Progress.php
│
└── uploads/
    ├── avatar/
    ├── vanhoa/
    ├── chua/
    └── truyen/
```

---

## 🗄️ CƠ SỞ DỮ LIỆU

### Các bảng chính (đã có)

| Bảng | Mô tả |
|------|-------|
| `nguoi_dung` | Thông tin người dùng |
| `quan_tri_vien` | Quản trị viên |
| `van_hoa` | Bài viết văn hóa |
| `chua_khmer` | Thông tin chùa |
| `le_hoi` | Lễ hội truyền thống |
| `bai_hoc` | Bài học tiếng Khmer |
| `tu_vung` | Từ vựng |
| `truyen_dan_gian` | Truyện dân gian |
| `binh_luan` | Bình luận |
| `yeu_thich` | Yêu thích/Bookmark |
| `tien_trinh_hoc_tap` | Tiến trình học |
| `huy_hieu` | Huy hiệu |
| `huy_hieu_nguoi_dung` | Huy hiệu đạt được |
| `thong_bao` | Thông báo |
| `hoat_dong` | Lịch sử hoạt động |

---

## 🎨 PHASE 1: TÍNH NĂNG CỐT LÕI

### 1.1 Trang chủ (index.php)

**Sections:**
- Hero Section với animation
- Thống kê tổng quan (số chùa, lễ hội, bài học, người dùng)
- Nội dung nổi bật (văn hóa, chùa, lễ hội sắp diễn ra)
- Features Grid (6 tính năng chính)
- Call-to-action đăng ký

### 1.2 Hệ thống Auth

**login.php:**
- Form đăng nhập email/password
- Remember me
- Link quên mật khẩu
- OAuth buttons (Google, Facebook)

**register.php:**
- Form đăng ký đầy đủ
- Validation real-time
- Terms & Conditions

**forgot-password.php:**
- Nhập email
- Gửi link reset
- Đặt mật khẩu mới

### 1.3 Profile & Dashboard

**profile.php:**
- Avatar upload
- Thông tin cá nhân
- Thống kê học tập
- Huy hiệu đạt được
- Bài học gần đây
- Nội dung đã lưu

**settings.php:**
- Cập nhật thông tin
- Đổi mật khẩu
- Chọn ngôn ngữ
- Thông báo
- Quyền riêng tư

### 1.4 Trang Văn hóa Khmer

**van-hoa.php:**
- Grid/List view toggle
- Filter theo danh mục
- Search
- Pagination
- Sort (mới nhất, xem nhiều)

**van-hoa-chi-tiet.php:**
- Hero image
- Nội dung bài viết
- Sidebar thông tin
- Bình luận
- Like/Share/Bookmark
- Bài viết liên quan

### 1.5 Trang Chùa Khmer

**chua-khmer.php:**
- Card grid với ảnh
- Filter theo tỉnh/loại chùa
- Search
- Map view toggle

**chua-khmer-chi-tiet.php:**
- Gallery ảnh
- Thông tin chi tiết
- Lịch sử
- Vị trí trên bản đồ
- Đánh giá & bình luận
- Chùa gần đây

### 1.6 Trang Lễ hội

**le-hoi.php:**
- Timeline view
- Calendar view
- Filter theo thời gian
- Lễ hội sắp diễn ra

**le-hoi-chi-tiet.php:**
- Banner
- Mô tả chi tiết
- Ý nghĩa & nguồn gốc
- Video (nếu có)
- Countdown (nếu sắp diễn ra)
- Đăng ký tham gia

### 1.7 Học tiếng Khmer

**hoc-tieng-khmer.php:**
- Danh sách bài học theo cấp độ
- Progress bar tổng
- Bài học đã hoàn thành
- Điểm tích lũy

**bai-hoc-chi-tiet.php:**
- Nội dung bài học
- Từ vựng với audio
- Bài tập tương tác
- Quiz
- Hoàn thành & nhận điểm

### 1.8 Truyện dân gian

**truyen-dan-gian.php:**
- Grid với cover
- Filter theo thể loại
- Độ tuổi phù hợp
- Thời gian đọc

**truyen-chi-tiet.php:**
- Đọc truyện
- Audio player (nếu có)
- Font size adjustment
- Bookmark
- Like & Share

### 1.9 Gamification

**leaderboard.php:**
- Top users theo điểm
- Ranking cá nhân
- Thống kê tuần/tháng/tổng

**Hệ thống điểm:**
- Hoàn thành bài học: +10-50 điểm
- Đọc truyện: +5 điểm
- Bình luận: +2 điểm
- Streak học tập: bonus

**Huy hiệu:**
- Người mới bắt đầu
- Siêng năng (7 ngày liên tiếp)
- Học giỏi (10 bài học)
- Chuyên gia (20 bài học)
- Bậc thầy (50 bài học)

### 1.10 Tìm kiếm

**search.php:**
- Search bar global
- Kết quả đa dạng (văn hóa, chùa, lễ hội, bài học, truyện)
- Filter nâng cao
- Gợi ý tìm kiếm
- Lịch sử tìm kiếm

---

## 🚀 PHASE 2: TÍNH NĂNG NÂNG CAO

### 2.1 Bản đồ di sản

**ban-do.php:**
- Leaflet.js + OpenStreetMap
- Markers cho chùa, di tích
- Popup thông tin
- Filter theo loại
- Cluster markers
- Chỉ đường (directions)

### 2.2 Đa ngôn ngữ (i18n)

- Chuyển đổi Việt ↔ Khmer
- Lưu preference vào session/database
- Language switcher trong header

### 2.3 Hệ thống bình luận

- Comment với reply
- Like comment
- Report spam
- Moderation queue
- Real-time notifications

### 2.4 PWA & Responsive

- Mobile-first design
- Service Worker
- Offline support
- Add to Home Screen
- Push notifications

---

## 🔮 PHASE 3: TÍNH NĂNG MỞ RỘNG

### 3.1 AI Chatbot
- Integration ChatGPT/Gemini API
- Context về văn hóa Khmer
- Gợi ý nội dung
- Trả lời câu hỏi

### 3.2 Diễn đàn cộng đồng
- Forum system
- Topics, threads, posts
- Moderation
- User reputation

### 3.3 Du lịch văn hóa
- Tuyến tham quan
- Gợi ý dựa trên vị trí
- Booking integration
- Reviews

---

## 🎨 DESIGN SYSTEM

### Colors
```css
:root {
  --primary: #667eea;
  --primary-dark: #5a67d8;
  --secondary: #764ba2;
  --accent: #ec4899;
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;
  --dark: #1e293b;
  --gray: #64748b;
  --light: #f8fafc;
}
```

### Typography
- Font: Inter, Plus Jakarta Sans
- Khmer: Battambang, Kantumruy Pro

### Components
- Buttons (primary, secondary, outline)
- Cards (article, temple, lesson)
- Forms (inputs, selects, checkboxes)
- Modals
- Toasts/Notifications
- Pagination
- Tabs
- Accordions

---

## 📱 RESPONSIVE BREAKPOINTS

```css
/* Mobile first */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

---

## 🔐 BẢO MẬT

- Password hashing (bcrypt)
- CSRF protection
- XSS prevention
- SQL injection prevention (PDO prepared statements)
- Rate limiting
- Session security

---

## 📊 ANALYTICS

- Page views tracking
- User engagement
- Learning progress
- Popular content
- Search analytics

---

*Tài liệu này sẽ được cập nhật trong quá trình phát triển.*

# 📋 KẾ HOẠCH MIGRATION DỰ ÁN VĂN HÓA KHMER NAM BỘ SANG NODE.JS

## 📌 TỔNG QUAN DỰ ÁN HIỆN TẠI

### Mô tả
Nền tảng số hóa và bảo tồn văn hóa Khmer Nam Bộ - Website giới thiệu văn hóa, chùa, lễ hội, học tiếng Khmer, truyện dân gian với hệ thống gamification.

### Công nghệ hiện tại
- **Backend:** PHP 8.x thuần (không framework)
- **Database:** MySQL/MariaDB (van_hoa_khmer)
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **UI:** Custom CSS Design System
- **Maps:** Leaflet.js + OpenStreetMap
- **Icons:** Font Awesome 6

### Cấu trúc thư mục hiện tại
```
DoAn_ChuyenNganh/
├── Backend/
│   ├── config/database.php
│   └── database/*.sql
├── FrontendAdmin/          # Admin Panel
│   ├── config/
│   ├── includes/
│   ├── models/             # 10 PHP Models
│   └── *.php               # Admin pages
├── FrontendUser/           # User Frontend
│   ├── api/                # REST API endpoints
│   ├── assets/css,js,images
│   ├── config/
│   ├── includes/
│   ├── models/
│   └── *.php               # User pages
└── uploads/                # File uploads
```

---

## 🗄️ CƠ SỞ DỮ LIỆU

### Các bảng chính (17 bảng)

| Bảng | Mô tả | Cột chính |
|------|-------|-----------|
| `quan_tri_vien` | Quản trị viên | ma_qtv, ten_dang_nhap, mat_khau, ho_ten, email, vai_tro, trang_thai |
| `nguoi_dung` | Người dùng | ma_nguoi_dung, ten_dang_nhap, email, mat_khau, ho_ten, tong_diem, cap_do, ngon_ngu |
| `van_hoa` | Bài viết văn hóa | ma_van_hoa, tieu_de, tieu_de_khmer, slug, noi_dung, danh_muc, luot_xem, noi_bat |
| `chua_khmer` | Chùa Khmer | ma_chua, ten_chua, ten_tieng_khmer, dia_chi, tinh_thanh, kinh_do, vi_do, loai_chua |
| `le_hoi` | Lễ hội | ma_le_hoi, ten_le_hoi, ngay_bat_dau, ngay_ket_thuc, dia_diem, y_nghia |
| `bai_hoc` | Bài học tiếng Khmer | ma_bai_hoc, tieu_de, cap_do, diem_thuong, thoi_luong |
| `tu_vung` | Từ vựng | ma_tu_vung, ma_bai_hoc, tu_khmer, phien_am, nghia_tieng_viet |
| `truyen_dan_gian` | Truyện dân gian | ma_truyen, tieu_de, the_loai, do_tuoi, luot_xem |
| `danh_muc` | Danh mục | ma_danh_muc, ten_danh_muc, loai |
| `binh_luan` | Bình luận | ma_binh_luan, ma_nguoi_dung, loai_noi_dung, ma_noi_dung, so_like |
| `yeu_thich` | Bookmark | ma_yeu_thich, ma_nguoi_dung, loai_doi_tuong, ma_doi_tuong |
| `tien_trinh_hoc_tap` | Tiến trình học | ma_tien_trinh, ma_nguoi_dung, ma_bai_hoc, trang_thai, diem_so |
| `huy_hieu` | Huy hiệu | ma_huy_hieu, ten_huy_hieu, dieu_kien, diem_thuong |
| `huy_hieu_nguoi_dung` | Huy hiệu đạt được | ma_nguoi_dung, ma_huy_hieu, ngay_dat_duoc |
| `thong_bao` | Thông báo | ma_thong_bao, ma_nguoi_dung, tieu_de, noi_dung, trang_thai |
| `nhat_ky_hoat_dong` | Activity log | ma_hoat_dong, ma_nguoi_dung, hanh_dong, mo_ta |
| `danh_muc_dien_dan` | Forum categories | ma_danh_muc, ten_danh_muc, ten_danh_muc_km |
| `chu_de_thao_luan` | Forum threads | ma_chu_de, ma_danh_muc, tieu_de, luot_xem |
| `bai_viet_dien_dan` | Forum posts | ma_bai_viet, ma_chu_de, ma_nguoi_dung, noi_dung |

---

## 🎯 TÍNH NĂNG HIỆN TẠI

### FrontendUser (Người dùng)
1. **Trang chủ** - Hero, thống kê, features grid, CTA
2. **Auth** - Đăng nhập/Đăng ký/Quên mật khẩu (CSRF, bcrypt)
3. **Profile** - Thông tin cá nhân, điểm, huy hiệu, bài đã lưu
4. **Văn hóa** - Danh sách + Chi tiết bài viết, filter, pagination
5. **Chùa Khmer** - Grid/Map view, filter theo tỉnh, bản đồ Leaflet
6. **Lễ hội** - Timeline/Calendar view, filter upcoming/past
7. **Học tiếng Khmer** - Bài học theo cấp độ, từ vựng, tiến trình
8. **Truyện dân gian** - Danh sách + đọc truyện
9. **Bản đồ di sản** - Leaflet.js interactive map
10. **Tìm kiếm** - Đa nội dung (văn hóa, chùa, lễ hội, truyện)
11. **Bảng xếp hạng** - Leaderboard theo điểm
12. **Diễn đàn** - Categories, threads, posts
13. **Bình luận** - Comment + reply + like
14. **Bookmark** - Lưu bài viết yêu thích
15. **Đa ngôn ngữ** - Việt/Khmer (i18n)
16. **Gamification** - Điểm, cấp độ, huy hiệu

### FrontendAdmin (Quản trị)
1. **Dashboard** - Thống kê, biểu đồ, hoạt động gần đây
2. **Quản lý Văn hóa** - CRUD bài viết
3. **Quản lý Chùa** - CRUD + thư viện ảnh + tọa độ
4. **Quản lý Lễ hội** - CRUD + ngày tổ chức
5. **Quản lý Bài học** - CRUD + từ vựng
6. **Quản lý Truyện** - CRUD
7. **Quản lý Người dùng** - CRUD + điểm + cấp độ
8. **Cài đặt hệ thống** - Config website
9. **Thông báo/Tin nhắn** - Notification system

### API Endpoints hiện tại
- `api/auth.php` - Login/Logout/Register/Check
- `api/comments.php` - Get/Add/Like/Report/Delete
- `api/favorites.php` - Toggle/List bookmarks
- `api/progress.php` - Get/Update learning progress
- `api/search.php` - Multi-content search

---

## 🚀 KIẾN TRÚC NODE.JS ĐỀ XUẤT

### Tech Stack đề xuất

```
Backend:
├── Runtime: Node.js 20 LTS
├── Framework: Express.js hoặc Fastify
├── ORM: Prisma (type-safe) hoặc Sequelize
├── Auth: Passport.js + JWT + bcrypt
├── Validation: Joi hoặc Zod
├── File Upload: Multer
├── API Docs: Swagger/OpenAPI
└── Testing: Jest + Supertest

Frontend (tùy chọn):
├── Option 1: EJS/Pug (Server-side rendering - giữ nguyên flow)
├── Option 2: React/Next.js (SPA/SSR - modern)
├── Option 3: Vue/Nuxt.js (SPA/SSR - progressive)
└── Option 4: Vanilla JS + Vite (lightweight)

Database:
├── MySQL/MariaDB (giữ nguyên)
├── Redis (caching, sessions)
└── Prisma Migrate (schema management)

DevOps:
├── Docker + Docker Compose
├── PM2 (process manager)
├── Nginx (reverse proxy)
└── GitHub Actions (CI/CD)
```

### Cấu trúc thư mục Node.js đề xuất

```
khmer-culture-nodejs/
├── src/
│   ├── config/
│   │   ├── database.js         # Prisma/Sequelize config
│   │   ├── passport.js         # Auth strategies
│   │   ├── multer.js           # File upload config
│   │   └── i18n.js             # Internationalization
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   ├── culture.controller.js
│   │   ├── temple.controller.js
│   │   ├── festival.controller.js
│   │   ├── lesson.controller.js
│   │   ├── story.controller.js
│   │   ├── comment.controller.js
│   │   ├── forum.controller.js
│   │   └── admin/
│   │       ├── dashboard.controller.js
│   │       ├── culture.admin.controller.js
│   │       └── ...
│   │
│   ├── models/                  # Prisma schema hoặc Sequelize models
│   │   └── schema.prisma
│   │
│   ├── routes/
│   │   ├── index.js            # Route aggregator
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   ├── culture.routes.js
│   │   ├── temple.routes.js
│   │   ├── festival.routes.js
│   │   ├── lesson.routes.js
│   │   ├── story.routes.js
│   │   ├── comment.routes.js
│   │   ├── forum.routes.js
│   │   ├── search.routes.js
│   │   └── admin/
│   │       └── admin.routes.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js   # JWT verification
│   │   ├── admin.middleware.js  # Admin role check
│   │   ├── validate.middleware.js
│   │   ├── upload.middleware.js
│   │   ├── rateLimit.middleware.js
│   │   └── errorHandler.middleware.js
│   │
│   ├── services/
│   │   ├── auth.service.js
│   │   ├── user.service.js
│   │   ├── culture.service.js
│   │   ├── gamification.service.js  # Points, badges, leaderboard
│   │   ├── notification.service.js
│   │   └── search.service.js
│   │
│   ├── utils/
│   │   ├── helpers.js
│   │   ├── slug.js
│   │   ├── pagination.js
│   │   └── response.js
│   │
│   ├── views/                   # Nếu dùng SSR (EJS/Pug)
│   │   ├── layouts/
│   │   ├── partials/
│   │   ├── user/
│   │   └── admin/
│   │
│   ├── locales/                 # i18n translations
│   │   ├── vi.json
│   │   └── km.json
│   │
│   └── app.js                   # Express app setup
│
├── public/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── uploads/
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── tests/
│   ├── unit/
│   └── integration/
│
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
│
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## 📊 PRISMA SCHEMA (Database Models)

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

// ============ ADMIN ============
model QuanTriVien {
  ma_qtv              Int       @id @default(autoincrement())
  ten_dang_nhap       String    @unique @db.VarChar(50)
  mat_khau            String    @db.VarChar(255)
  ho_ten              String    @db.VarChar(100)
  email               String    @unique @db.VarChar(100)
  so_dien_thoai       String?   @db.VarChar(15)
  anh_dai_dien        String?   @db.VarChar(255)
  vai_tro             VaiTroAdmin @default(bien_tap_vien)
  trang_thai          TrangThaiAdmin @default(hoat_dong)
  ngay_tao            DateTime  @default(now())
  lan_dang_nhap_cuoi  DateTime?

  // Relations
  van_hoa_tao         VanHoa[]  @relation("NguoiTaoVanHoa")
  chua_tao            ChuaKhmer[] @relation("NguoiTaoChua")
  le_hoi_tao          LeHoi[]   @relation("NguoiTaoLeHoi")
  bai_hoc_tao         BaiHoc[]  @relation("NguoiTaoBaiHoc")
  truyen_tao          TruyenDanGian[] @relation("NguoiTaoTruyen")

  @@map("quan_tri_vien")
}

enum VaiTroAdmin {
  sieu_quan_tri
  quan_tri
  bien_tap_vien
}

enum TrangThaiAdmin {
  hoat_dong
  khoa
}

// ============ USER ============
model NguoiDung {
  ma_nguoi_dung       Int       @id @default(autoincrement())
  ten_dang_nhap       String    @unique @db.VarChar(50)
  email               String    @unique @db.VarChar(100)
  mat_khau            String    @db.VarChar(255)
  ho_ten              String    @db.VarChar(100)
  ngay_sinh           DateTime? @db.Date
  gioi_tinh           GioiTinh?
  so_dien_thoai       String?   @db.VarChar(15)
  anh_dai_dien        String?   @db.VarChar(255)
  tong_diem           Int       @default(0)
  cap_do              Int       @default(1)
  ngon_ngu            NgonNgu   @default(vi)
  trang_thai          TrangThaiUser @default(hoat_dong)
  ngay_tao            DateTime  @default(now())
  lan_dang_nhap_cuoi  DateTime?

  // Relations
  binh_luan           BinhLuan[]
  yeu_thich           YeuThich[]
  tien_trinh          TienTrinhHocTap[]
  huy_hieu            HuyHieuNguoiDung[]
  thong_bao           ThongBao[]
  hoat_dong           NhatKyHoatDong[]
  chu_de_forum        ChuDeThaoLuan[]
  bai_viet_forum      BaiVietDienDan[]

  @@map("nguoi_dung")
}

enum GioiTinh {
  nam
  nu
  khac
}

enum NgonNgu {
  vi
  km
}

enum TrangThaiUser {
  hoat_dong
  khoa
  cho_xac_thuc
}


// ============ VĂN HÓA ============
model VanHoa {
  ma_van_hoa          Int       @id @default(autoincrement())
  tieu_de             String    @db.VarChar(200)
  tieu_de_khmer       String?   @db.VarChar(200)
  slug                String    @unique @db.VarChar(250)
  tom_tat             String?   @db.Text
  noi_dung            String    @db.LongText
  hinh_anh_chinh      String?   @db.VarChar(255)
  thu_vien_anh        String?   @db.Text
  danh_muc            String?   @db.VarChar(50)
  tac_gia             String?   @db.VarChar(100)
  nguon_tham_khao     String?   @db.Text
  luot_xem            Int       @default(0)
  noi_bat             Boolean   @default(false)
  trang_thai          TrangThaiNoiDung @default(nhap)
  ma_nguoi_tao        Int?
  ngay_xuat_ban       DateTime?
  ngay_tao            DateTime  @default(now())
  ngay_cap_nhat       DateTime? @updatedAt

  nguoi_tao           QuanTriVien? @relation("NguoiTaoVanHoa", fields: [ma_nguoi_tao], references: [ma_qtv])
  binh_luan           BinhLuan[] @relation("BinhLuanVanHoa")
  yeu_thich           YeuThich[] @relation("YeuThichVanHoa")

  @@map("van_hoa")
}

enum TrangThaiNoiDung {
  nhap
  xuat_ban
  luu_tru
}

// ============ CHÙA KHMER ============
model ChuaKhmer {
  ma_chua             Int       @id @default(autoincrement())
  ten_chua            String    @db.VarChar(200)
  ten_tieng_khmer     String?   @db.VarChar(200)
  slug                String    @unique @db.VarChar(250)
  dia_chi             String?   @db.VarChar(255)
  tinh_thanh          String?   @db.VarChar(100)
  quan_huyen          String?   @db.VarChar(100)
  kinh_do             Decimal?  @db.Decimal(10, 6)
  vi_do               Decimal?  @db.Decimal(10, 6)
  loai_chua           LoaiChua  @default(Theravada)
  so_dien_thoai       String?   @db.VarChar(15)
  email               String?   @db.VarChar(100)
  website             String?   @db.VarChar(255)
  mo_ta_ngan          String?   @db.Text
  lich_su             String?   @db.LongText
  hinh_anh_chinh      String?   @db.VarChar(255)
  thu_vien_anh        String?   @db.Text
  nam_thanh_lap       Int?
  so_nha_su           Int       @default(0)
  luot_xem            Int       @default(0)
  trang_thai          TrangThaiChua @default(hoat_dong)
  ma_nguoi_tao        Int?
  ngay_tao            DateTime  @default(now())
  ngay_cap_nhat       DateTime? @updatedAt

  nguoi_tao           QuanTriVien? @relation("NguoiTaoChua", fields: [ma_nguoi_tao], references: [ma_qtv])
  binh_luan           BinhLuan[] @relation("BinhLuanChua")
  yeu_thich           YeuThich[] @relation("YeuThichChua")

  @@map("chua_khmer")
}

enum LoaiChua {
  Theravada
  Mahayana
  Vajrayana
}

enum TrangThaiChua {
  hoat_dong
  ngung_hoat_dong
}

// ============ LỄ HỘI ============
model LeHoi {
  ma_le_hoi           Int       @id @default(autoincrement())
  ten_le_hoi          String    @db.VarChar(200)
  ten_le_hoi_khmer    String?   @db.VarChar(200)
  slug                String    @unique @db.VarChar(250)
  mo_ta               String?   @db.Text
  noi_dung            String?   @db.LongText
  ngay_bat_dau        DateTime? @db.Date
  ngay_ket_thuc       DateTime? @db.Date
  ngay_dien_ra        String?   @db.VarChar(100)
  dia_diem            String?   @db.VarChar(255)
  tinh_thanh          String?   @db.VarChar(100)
  anh_dai_dien        String?   @db.VarChar(255)
  thu_vien_anh        String?   @db.Text
  y_nghia             String?   @db.Text
  nguon_goc           String?   @db.Text
  loai_le_hoi         LoaiLeHoi @default(ton_giao)
  luot_xem            Int       @default(0)
  trang_thai          TrangThaiHienThi @default(hien_thi)
  ma_nguoi_tao        Int?
  ngay_tao            DateTime  @default(now())
  ngay_cap_nhat       DateTime? @updatedAt

  nguoi_tao           QuanTriVien? @relation("NguoiTaoLeHoi", fields: [ma_nguoi_tao], references: [ma_qtv])
  binh_luan           BinhLuan[] @relation("BinhLuanLeHoi")
  yeu_thich           YeuThich[] @relation("YeuThichLeHoi")

  @@map("le_hoi")
}

enum LoaiLeHoi {
  ton_giao
  van_hoa
  the_thao
  khac
}

enum TrangThaiHienThi {
  hien_thi
  an
}

// ============ BÀI HỌC ============
model BaiHoc {
  ma_bai_hoc          Int       @id @default(autoincrement())
  ma_danh_muc         Int?
  tieu_de             String    @db.VarChar(200)
  slug                String    @unique @db.VarChar(250)
  mo_ta               String?   @db.Text
  noi_dung            String    @db.LongText
  cap_do              CapDo     @default(co_ban)
  thu_tu              Int       @default(0)
  diem_thuong         Int       @default(10)
  thoi_luong          Int       @default(30)
  hinh_anh            String?   @db.VarChar(255)
  video_url           String?   @db.VarChar(255)
  file_am_thanh       String?   @db.VarChar(255)
  luot_hoc            Int       @default(0)
  trang_thai          TrangThaiBaiHoc @default(nhap)
  ma_nguoi_tao        Int?
  ngay_tao            DateTime  @default(now())
  ngay_cap_nhat       DateTime? @updatedAt

  nguoi_tao           QuanTriVien? @relation("NguoiTaoBaiHoc", fields: [ma_nguoi_tao], references: [ma_qtv])
  tu_vung             TuVung[]
  tien_trinh          TienTrinhHocTap[]
  binh_luan           BinhLuan[] @relation("BinhLuanBaiHoc")
  yeu_thich           YeuThich[] @relation("YeuThichBaiHoc")

  @@map("bai_hoc")
}

enum CapDo {
  co_ban
  trung_cap
  nang_cao
}

enum TrangThaiBaiHoc {
  xuat_ban
  nhap
  an
}

// ============ TỪ VỰNG ============
model TuVung {
  ma_tu_vung          Int       @id @default(autoincrement())
  ma_bai_hoc          Int?
  tu_khmer            String    @db.VarChar(100)
  phien_am            String?   @db.VarChar(100)
  nghia_tieng_viet    String    @db.VarChar(200)
  vi_du               String?   @db.Text
  file_am_thanh       String?   @db.VarChar(255)
  anh_minh_hoa        String?   @db.VarChar(255)
  loai_tu             LoaiTu    @default(danh_tu)
  ghi_chu             String?   @db.Text
  thu_tu              Int       @default(0)
  ngay_tao            DateTime  @default(now())

  bai_hoc             BaiHoc?   @relation(fields: [ma_bai_hoc], references: [ma_bai_hoc], onDelete: Cascade)

  @@map("tu_vung")
}

enum LoaiTu {
  danh_tu
  dong_tu
  tinh_tu
  trang_tu
  khac
}

// ============ TRUYỆN DÂN GIAN ============
model TruyenDanGian {
  ma_truyen           Int       @id @default(autoincrement())
  tieu_de             String    @db.VarChar(200)
  tieu_de_khmer       String?   @db.VarChar(200)
  slug                String    @unique @db.VarChar(250)
  tom_tat             String?   @db.Text
  noi_dung            String    @db.LongText
  anh_dai_dien        String?   @db.VarChar(255)
  file_audio          String?   @db.VarChar(255)
  the_loai            TheLoaiTruyen @default(truyen_co_tich)
  do_tuoi             DoTuoi    @default(moi_lua_tuoi)
  nguon_goc           String?   @db.VarChar(255)
  tac_gia             String?   @db.VarChar(100)
  thoi_luong_doc      Int?
  luot_xem            Int       @default(0)
  luot_thich          Int       @default(0)
  trang_thai          TrangThaiHienThi @default(hien_thi)
  ma_nguoi_tao        Int?
  ngay_tao            DateTime  @default(now())
  ngay_cap_nhat       DateTime? @updatedAt

  nguoi_tao           QuanTriVien? @relation("NguoiTaoTruyen", fields: [ma_nguoi_tao], references: [ma_qtv])
  binh_luan           BinhLuan[] @relation("BinhLuanTruyen")
  yeu_thich           YeuThich[] @relation("YeuThichTruyen")

  @@map("truyen_dan_gian")
}

enum TheLoaiTruyen {
  truyen_co_tich
  truyen_truyen_thuyet
  truyen_cuoi
  truyen_dao_duc
  khac
}

enum DoTuoi {
  thieu_nhi
  thieu_nien
  moi_lua_tuoi
  nguoi_lon
}


// ============ BÌNH LUẬN ============
model BinhLuan {
  ma_binh_luan        Int       @id @default(autoincrement())
  ma_nguoi_dung       Int
  loai_noi_dung       LoaiNoiDung
  ma_noi_dung         Int
  noi_dung            String    @db.Text
  ma_binh_luan_cha    Int?
  so_like             Int       @default(0)
  so_bao_cao          Int       @default(0)
  trang_thai          TrangThaiBinhLuan @default(hien_thi)
  ngay_tao            DateTime  @default(now())
  ngay_cap_nhat       DateTime? @updatedAt

  nguoi_dung          NguoiDung @relation(fields: [ma_nguoi_dung], references: [ma_nguoi_dung], onDelete: Cascade)
  binh_luan_cha       BinhLuan? @relation("BinhLuanReply", fields: [ma_binh_luan_cha], references: [ma_binh_luan])
  binh_luan_con       BinhLuan[] @relation("BinhLuanReply")
  like_binh_luan      LikeBinhLuan[]

  // Polymorphic relations (handled in application layer)
  van_hoa             VanHoa?   @relation("BinhLuanVanHoa", fields: [ma_noi_dung], references: [ma_van_hoa], map: "fk_binhluan_vanhoa")
  chua                ChuaKhmer? @relation("BinhLuanChua", fields: [ma_noi_dung], references: [ma_chua], map: "fk_binhluan_chua")
  le_hoi              LeHoi?    @relation("BinhLuanLeHoi", fields: [ma_noi_dung], references: [ma_le_hoi], map: "fk_binhluan_lehoi")
  bai_hoc             BaiHoc?   @relation("BinhLuanBaiHoc", fields: [ma_noi_dung], references: [ma_bai_hoc], map: "fk_binhluan_baihoc")
  truyen              TruyenDanGian? @relation("BinhLuanTruyen", fields: [ma_noi_dung], references: [ma_truyen], map: "fk_binhluan_truyen")

  @@index([loai_noi_dung, ma_noi_dung])
  @@map("binh_luan")
}

enum LoaiNoiDung {
  van_hoa
  chua
  le_hoi
  bai_hoc
  truyen
  forum
}

enum TrangThaiBinhLuan {
  hien_thi
  cho_duyet
  an
  spam
}

// ============ LIKE BÌNH LUẬN ============
model LikeBinhLuan {
  ma_like             Int       @id @default(autoincrement())
  ma_binh_luan        Int
  ma_nguoi_dung       Int
  ngay_tao            DateTime  @default(now())

  binh_luan           BinhLuan  @relation(fields: [ma_binh_luan], references: [ma_binh_luan], onDelete: Cascade)

  @@unique([ma_binh_luan, ma_nguoi_dung])
  @@map("like_binh_luan")
}

// ============ YÊU THÍCH / BOOKMARK ============
model YeuThich {
  ma_yeu_thich        Int       @id @default(autoincrement())
  ma_nguoi_dung       Int
  loai_doi_tuong      LoaiNoiDung
  ma_doi_tuong        Int
  ngay_tao            DateTime  @default(now())

  nguoi_dung          NguoiDung @relation(fields: [ma_nguoi_dung], references: [ma_nguoi_dung], onDelete: Cascade)

  // Polymorphic relations
  van_hoa             VanHoa?   @relation("YeuThichVanHoa", fields: [ma_doi_tuong], references: [ma_van_hoa], map: "fk_yeuthich_vanhoa")
  chua                ChuaKhmer? @relation("YeuThichChua", fields: [ma_doi_tuong], references: [ma_chua], map: "fk_yeuthich_chua")
  le_hoi              LeHoi?    @relation("YeuThichLeHoi", fields: [ma_doi_tuong], references: [ma_le_hoi], map: "fk_yeuthich_lehoi")
  bai_hoc             BaiHoc?   @relation("YeuThichBaiHoc", fields: [ma_doi_tuong], references: [ma_bai_hoc], map: "fk_yeuthich_baihoc")
  truyen              TruyenDanGian? @relation("YeuThichTruyen", fields: [ma_doi_tuong], references: [ma_truyen], map: "fk_yeuthich_truyen")

  @@unique([ma_nguoi_dung, loai_doi_tuong, ma_doi_tuong])
  @@map("yeu_thich")
}

// ============ TIẾN TRÌNH HỌC TẬP ============
model TienTrinhHocTap {
  ma_tien_trinh       Int       @id @default(autoincrement())
  ma_nguoi_dung       Int
  ma_bai_hoc          Int
  trang_thai          TrangThaiHocTap @default(chua_hoc)
  diem_so             Int       @default(0)
  thoi_gian_hoc       Int       @default(0)
  so_lan_hoc          Int       @default(0)
  ngay_bat_dau        DateTime?
  ngay_hoan_thanh     DateTime?
  ngay_cap_nhat       DateTime  @default(now()) @updatedAt

  nguoi_dung          NguoiDung @relation(fields: [ma_nguoi_dung], references: [ma_nguoi_dung], onDelete: Cascade)
  bai_hoc             BaiHoc    @relation(fields: [ma_bai_hoc], references: [ma_bai_hoc], onDelete: Cascade)

  @@unique([ma_nguoi_dung, ma_bai_hoc])
  @@map("tien_trinh_hoc_tap")
}

enum TrangThaiHocTap {
  chua_hoc
  dang_hoc
  hoan_thanh
}

// ============ HUY HIỆU ============
model HuyHieu {
  ma_huy_hieu         Int       @id @default(autoincrement())
  ten_huy_hieu        String    @db.VarChar(100)
  ten_huy_hieu_khmer  String?   @db.VarChar(100)
  mo_ta               String?   @db.Text
  dieu_kien           String?   @db.Text
  icon                String?   @db.VarChar(255)
  mau_sac             String?   @db.VarChar(50)
  diem_thuong         Int       @default(0)
  thu_tu              Int       @default(0)
  trang_thai          TrangThaiHoatDong @default(hoat_dong)
  ngay_tao            DateTime  @default(now())

  nguoi_dung          HuyHieuNguoiDung[]

  @@map("huy_hieu")
}

enum TrangThaiHoatDong {
  hoat_dong
  khong_hoat_dong
}

model HuyHieuNguoiDung {
  ma_hh_nguoi_dung    Int       @id @default(autoincrement())
  ma_nguoi_dung       Int
  ma_huy_hieu         Int
  ngay_dat_duoc       DateTime  @default(now())

  nguoi_dung          NguoiDung @relation(fields: [ma_nguoi_dung], references: [ma_nguoi_dung], onDelete: Cascade)
  huy_hieu            HuyHieu   @relation(fields: [ma_huy_hieu], references: [ma_huy_hieu], onDelete: Cascade)

  @@unique([ma_nguoi_dung, ma_huy_hieu])
  @@map("huy_hieu_nguoi_dung")
}

// ============ THÔNG BÁO ============
model ThongBao {
  ma_thong_bao        Int       @id @default(autoincrement())
  ma_nguoi_dung       Int?
  tieu_de             String    @db.VarChar(200)
  noi_dung            String    @db.Text
  loai                LoaiThongBao @default(thong_tin)
  lien_ket            String?   @db.VarChar(255)
  trang_thai          TrangThaiDoc @default(chua_doc)
  ngay_tao            DateTime  @default(now())

  nguoi_dung          NguoiDung? @relation(fields: [ma_nguoi_dung], references: [ma_nguoi_dung], onDelete: Cascade)

  @@map("thong_bao")
}

enum LoaiThongBao {
  thong_tin
  canh_bao
  thanh_cong
  loi
}

enum TrangThaiDoc {
  chua_doc
  da_doc
}

// ============ NHẬT KÝ HOẠT ĐỘNG ============
model NhatKyHoatDong {
  ma_hoat_dong        Int       @id @default(autoincrement())
  ma_nguoi_dung       Int?
  loai_nguoi_dung     LoaiNguoiDung @default(nguoi_dung)
  hanh_dong           String    @db.VarChar(100)
  loai_doi_tuong      String?   @db.VarChar(100)
  ma_doi_tuong        Int?
  mo_ta               String?   @db.Text
  ip_address          String?   @db.VarChar(45)
  user_agent          String?   @db.VarChar(255)
  ngay_tao            DateTime  @default(now())

  nguoi_dung          NguoiDung? @relation(fields: [ma_nguoi_dung], references: [ma_nguoi_dung], onDelete: SetNull)

  @@map("nhat_ky_hoat_dong")
}

enum LoaiNguoiDung {
  nguoi_dung
  quan_tri
}

// ============ DANH MỤC ============
model DanhMuc {
  ma_danh_muc         Int       @id @default(autoincrement())
  ten_danh_muc        String    @db.VarChar(100)
  ten_danh_muc_khmer  String?   @db.VarChar(100)
  slug                String    @unique @db.VarChar(150)
  mo_ta               String?   @db.Text
  loai                LoaiDanhMuc @default(van_hoa)
  thu_tu              Int       @default(0)
  trang_thai          TrangThaiHienThi @default(hien_thi)
  ngay_tao            DateTime  @default(now())

  @@map("danh_muc")
}

enum LoaiDanhMuc {
  bai_hoc
  van_hoa
  le_hoi
  truyen
}

// ============ DIỄN ĐÀN ============
model DanhMucDienDan {
  ma_danh_muc         Int       @id @default(autoincrement())
  ten_danh_muc        String    @db.VarChar(100)
  ten_danh_muc_km     String?   @db.VarChar(100)
  mo_ta               String?   @db.Text
  mo_ta_km            String?   @db.Text
  icon                String?   @db.VarChar(50)
  mau_sac             String?   @db.VarChar(20)
  thu_tu              Int       @default(0)
  trang_thai          TrangThaiHienThi @default(hien_thi)
  ngay_tao            DateTime  @default(now())

  chu_de              ChuDeThaoLuan[]

  @@map("danh_muc_dien_dan")
}

model ChuDeThaoLuan {
  ma_chu_de           Int       @id @default(autoincrement())
  ma_danh_muc         Int
  ma_nguoi_tao        Int
  tieu_de             String    @db.VarChar(255)
  slug                String    @unique @db.VarChar(300)
  noi_dung            String    @db.LongText
  luot_xem            Int       @default(0)
  so_tra_loi          Int       @default(0)
  ghim                Boolean   @default(false)
  khoa                Boolean   @default(false)
  trang_thai          TrangThaiBinhLuan @default(hien_thi)
  ngay_tao            DateTime  @default(now())
  ngay_cap_nhat       DateTime? @updatedAt
  hoat_dong_cuoi      DateTime  @default(now())

  danh_muc            DanhMucDienDan @relation(fields: [ma_danh_muc], references: [ma_danh_muc], onDelete: Cascade)
  nguoi_tao           NguoiDung @relation(fields: [ma_nguoi_tao], references: [ma_nguoi_dung], onDelete: Cascade)
  bai_viet            BaiVietDienDan[]

  @@map("chu_de_thao_luan")
}

model BaiVietDienDan {
  ma_bai_viet         Int       @id @default(autoincrement())
  ma_chu_de           Int
  ma_nguoi_dung       Int
  ma_bai_viet_cha     Int?
  noi_dung            String    @db.LongText
  so_like             Int       @default(0)
  trang_thai          TrangThaiBinhLuan @default(hien_thi)
  ngay_tao            DateTime  @default(now())
  ngay_cap_nhat       DateTime? @updatedAt

  chu_de              ChuDeThaoLuan @relation(fields: [ma_chu_de], references: [ma_chu_de], onDelete: Cascade)
  nguoi_dung          NguoiDung @relation(fields: [ma_nguoi_dung], references: [ma_nguoi_dung], onDelete: Cascade)
  bai_viet_cha        BaiVietDienDan? @relation("BaiVietReply", fields: [ma_bai_viet_cha], references: [ma_bai_viet])
  bai_viet_con        BaiVietDienDan[] @relation("BaiVietReply")

  @@map("bai_viet_dien_dan")
}
```

---

## 🔌 API ROUTES DESIGN

### Authentication Routes
```
POST   /api/auth/register          # Đăng ký
POST   /api/auth/login             # Đăng nhập
POST   /api/auth/logout            # Đăng xuất
POST   /api/auth/refresh           # Refresh token
POST   /api/auth/forgot-password   # Quên mật khẩu
POST   /api/auth/reset-password    # Reset mật khẩu
GET    /api/auth/me                # Thông tin user hiện tại
```

### User Routes
```
GET    /api/users/profile          # Profile user
PUT    /api/users/profile          # Cập nhật profile
PUT    /api/users/avatar           # Upload avatar
PUT    /api/users/password         # Đổi mật khẩu
GET    /api/users/progress         # Tiến trình học tập
GET    /api/users/badges           # Huy hiệu đạt được
GET    /api/users/favorites        # Danh sách yêu thích
GET    /api/users/leaderboard      # Bảng xếp hạng
```

### Content Routes
```
# Văn hóa
GET    /api/cultures               # Danh sách (pagination, filter)
GET    /api/cultures/:slug         # Chi tiết
GET    /api/cultures/featured      # Nổi bật

# Chùa
GET    /api/temples                # Danh sách
GET    /api/temples/:slug          # Chi tiết
GET    /api/temples/provinces      # Danh sách tỉnh
GET    /api/temples/map            # Dữ liệu bản đồ

# Lễ hội
GET    /api/festivals              # Danh sách
GET    /api/festivals/:slug        # Chi tiết
GET    /api/festivals/upcoming     # Sắp diễn ra
GET    /api/festivals/calendar     # Calendar view

# Bài học
GET    /api/lessons                # Danh sách theo cấp độ
GET    /api/lessons/:slug          # Chi tiết + từ vựng
POST   /api/lessons/:id/complete   # Hoàn thành bài học
GET    /api/lessons/:id/vocabulary # Từ vựng

# Truyện
GET    /api/stories                # Danh sách
GET    /api/stories/:slug          # Chi tiết
GET    /api/stories/genres         # Thể loại
```

### Interaction Routes
```
# Bình luận
GET    /api/comments               # Lấy comments (type, id)
POST   /api/comments               # Thêm comment
POST   /api/comments/:id/like      # Like/unlike
POST   /api/comments/:id/report    # Báo cáo
DELETE /api/comments/:id           # Xóa (owner only)

# Yêu thích
POST   /api/favorites              # Toggle bookmark
GET    /api/favorites              # Danh sách

# Tìm kiếm
GET    /api/search                 # Multi-content search
GET    /api/search/suggestions     # Gợi ý
```

### Forum Routes
```
GET    /api/forum/categories       # Danh mục
GET    /api/forum/categories/:id   # Chi tiết + threads
GET    /api/forum/threads/:slug    # Chi tiết thread + posts
POST   /api/forum/threads          # Tạo thread
POST   /api/forum/posts            # Tạo post
```

### Admin Routes
```
# Dashboard
GET    /api/admin/dashboard        # Thống kê

# CRUD cho tất cả entities
GET    /api/admin/cultures
POST   /api/admin/cultures
PUT    /api/admin/cultures/:id
DELETE /api/admin/cultures/:id
# ... tương tự cho temples, festivals, lessons, stories, users
```

---

## 📁 CODE EXAMPLES

### Express App Setup (src/app.js)

```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const passport = require('passport');
const session = require('express-session');
const path = require('path');

// Import routes
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const cultureRoutes = require('./routes/culture.routes');
const templeRoutes = require('./routes/temple.routes');
const festivalRoutes = require('./routes/festival.routes');
const lessonRoutes = require('./routes/lesson.routes');
const storyRoutes = require('./routes/story.routes');
const commentRoutes = require('./routes/comment.routes');
const searchRoutes = require('./routes/search.routes');
const forumRoutes = require('./routes/forum.routes');
const adminRoutes = require('./routes/admin/admin.routes');

// Import middleware
const errorHandler = require('./middleware/errorHandler.middleware');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Session & Passport
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}));
app.use(passport.initialize());
app.use(passport.session());

// Static files
app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));
app.use(express.static(path.join(__dirname, '../public')));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cultures', cultureRoutes);
app.use('/api/temples', templeRoutes);
app.use('/api/festivals', festivalRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/stories', storyRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/admin', adminRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling
app.use(errorHandler);

module.exports = app;
```

### Auth Controller Example (src/controllers/auth.controller.js)
```javascript
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const { validationResult } = require('express-validator');

const prisma = new PrismaClient();

// Đăng ký
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { ten_dang_nhap, email, mat_khau, ho_ten } = req.body;

    // Check existing
    const existing = await prisma.nguoiDung.findFirst({
      where: { OR: [{ email }, { ten_dang_nhap }] }
    });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: existing.email === email ? 'Email đã được sử dụng' : 'Tên đăng nhập đã tồn tại'
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(mat_khau, 12);

    // Create user
    const user = await prisma.nguoiDung.create({
      data: {
        ten_dang_nhap,
        email,
        mat_khau: hashedPassword,
        ho_ten
      },
      select: {
        ma_nguoi_dung: true,
        ten_dang_nhap: true,
        email: true,
        ho_ten: true
      }
    });

    // Log activity
    await prisma.nhatKyHoatDong.create({
      data: {
        ma_nguoi_dung: user.ma_nguoi_dung,
        hanh_dong: 'register',
        mo_ta: 'Đăng ký tài khoản mới',
        ip_address: req.ip
      }
    });

    res.status(201).json({
      success: true,
      message: 'Đăng ký thành công',
      data: user
    });
  } catch (error) {
    next(error);
  }
};

// Đăng nhập
exports.login = async (req, res, next) => {
  try {
    const { ten_dang_nhap, mat_khau } = req.body;

    const user = await prisma.nguoiDung.findFirst({
      where: {
        ten_dang_nhap,
        trang_thai: 'hoat_dong'
      }
    });

    if (!user || !(await bcrypt.compare(mat_khau, user.mat_khau))) {
      return res.status(401).json({
        success: false,
        message: 'Tên đăng nhập hoặc mật khẩu không đúng'
      });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.ma_nguoi_dung, username: user.ten_dang_nhap },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );

    // Update last login
    await prisma.nguoiDung.update({
      where: { ma_nguoi_dung: user.ma_nguoi_dung },
      data: { lan_dang_nhap_cuoi: new Date() }
    });

    // Log activity
    await prisma.nhatKyHoatDong.create({
      data: {
        ma_nguoi_dung: user.ma_nguoi_dung,
        hanh_dong: 'login',
        mo_ta: 'Đăng nhập thành công',
        ip_address: req.ip
      }
    });

    res.json({
      success: true,
      message: 'Đăng nhập thành công',
      data: {
        token,
        user: {
          id: user.ma_nguoi_dung,
          username: user.ten_dang_nhap,
          email: user.email,
          ho_ten: user.ho_ten,
          anh_dai_dien: user.anh_dai_dien,
          tong_diem: user.tong_diem,
          cap_do: user.cap_do
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

// Get current user
exports.me = async (req, res, next) => {
  try {
    const user = await prisma.nguoiDung.findUnique({
      where: { ma_nguoi_dung: req.user.id },
      select: {
        ma_nguoi_dung: true,
        ten_dang_nhap: true,
        email: true,
        ho_ten: true,
        anh_dai_dien: true,
        tong_diem: true,
        cap_do: true,
        ngon_ngu: true,
        ngay_tao: true
      }
    });

    res.json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};
```

### Culture Service Example (src/services/culture.service.js)
```javascript
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class CultureService {
  // Lấy danh sách với pagination và filter
  async getAll({ page = 1, limit = 12, search, category, sort = 'newest' }) {
    const skip = (page - 1) * limit;
    
    const where = {
      trang_thai: 'xuat_ban',
      ...(search && {
        OR: [
          { tieu_de: { contains: search } },
          { noi_dung: { contains: search } }
        ]
      }),
      ...(category && { danh_muc: category })
    };

    const orderBy = {
      newest: { ngay_tao: 'desc' },
      oldest: { ngay_tao: 'asc' },
      popular: { luot_xem: 'desc' }
    }[sort] || { ngay_tao: 'desc' };

    const [items, total] = await Promise.all([
      prisma.vanHoa.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        select: {
          ma_van_hoa: true,
          tieu_de: true,
          tieu_de_khmer: true,
          slug: true,
          tom_tat: true,
          hinh_anh_chinh: true,
          danh_muc: true,
          luot_xem: true,
          noi_bat: true,
          ngay_tao: true
        }
      }),
      prisma.vanHoa.count({ where })
    ]);

    return {
      items,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    };
  }

  // Lấy chi tiết theo slug
  async getBySlug(slug) {
    const item = await prisma.vanHoa.findUnique({
      where: { slug },
      include: {
        nguoi_tao: {
          select: { ho_ten: true }
        }
      }
    });

    if (!item) return null;

    // Tăng lượt xem
    await prisma.vanHoa.update({
      where: { ma_van_hoa: item.ma_van_hoa },
      data: { luot_xem: { increment: 1 } }
    });

    return item;
  }

  // Lấy bài viết nổi bật
  async getFeatured(limit = 5) {
    return prisma.vanHoa.findMany({
      where: {
        trang_thai: 'xuat_ban',
        noi_bat: true
      },
      orderBy: { luot_xem: 'desc' },
      take: limit,
      select: {
        ma_van_hoa: true,
        tieu_de: true,
        tieu_de_khmer: true,
        slug: true,
        tom_tat: true,
        hinh_anh_chinh: true,
        luot_xem: true
      }
    });
  }

  // Lấy bài viết liên quan
  async getRelated(id, category, limit = 4) {
    return prisma.vanHoa.findMany({
      where: {
        trang_thai: 'xuat_ban',
        danh_muc: category,
        ma_van_hoa: { not: id }
      },
      orderBy: { luot_xem: 'desc' },
      take: limit,
      select: {
        ma_van_hoa: true,
        tieu_de: true,
        slug: true,
        hinh_anh_chinh: true,
        luot_xem: true
      }
    });
  }
}

module.exports = new CultureService();
```

### Gamification Service (src/services/gamification.service.js)
```javascript
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class GamificationService {
  // Thêm điểm cho user
  async addPoints(userId, points, reason) {
    await prisma.nguoiDung.update({
      where: { ma_nguoi_dung: userId },
      data: { tong_diem: { increment: points } }
    });

    // Log activity
    await prisma.nhatKyHoatDong.create({
      data: {
        ma_nguoi_dung: userId,
        hanh_dong: 'earn_points',
        mo_ta: `Nhận ${points} điểm: ${reason}`
      }
    });

    // Check badges
    await this.checkBadges(userId);
  }

  // Kiểm tra và trao huy hiệu
  async checkBadges(userId) {
    const user = await prisma.nguoiDung.findUnique({
      where: { ma_nguoi_dung: userId },
      include: {
        tien_trinh: { where: { trang_thai: 'hoan_thanh' } },
        huy_hieu: true
      }
    });

    const completedLessons = user.tien_trinh.length;
    const earnedBadgeIds = user.huy_hieu.map(h => h.ma_huy_hieu);

    // Badge conditions
    const badgeConditions = [
      { id: 1, condition: completedLessons >= 1 },   // Người mới bắt đầu
      { id: 3, condition: completedLessons >= 10 },  // Học giỏi
      { id: 4, condition: completedLessons >= 20 },  // Chuyên gia
      { id: 5, condition: completedLessons >= 50 },  // Bậc thầy
    ];

    for (const badge of badgeConditions) {
      if (badge.condition && !earnedBadgeIds.includes(badge.id)) {
        await prisma.huyHieuNguoiDung.create({
          data: {
            ma_nguoi_dung: userId,
            ma_huy_hieu: badge.id
          }
        });

        // Get badge info for notification
        const badgeInfo = await prisma.huyHieu.findUnique({
          where: { ma_huy_hieu: badge.id }
        });

        // Create notification
        await prisma.thongBao.create({
          data: {
            ma_nguoi_dung: userId,
            tieu_de: 'Huy hiệu mới!',
            noi_dung: `Chúc mừng! Bạn đã đạt được huy hiệu "${badgeInfo.ten_huy_hieu}"`,
            loai: 'thanh_cong'
          }
        });
      }
    }
  }

  // Lấy bảng xếp hạng
  async getLeaderboard(limit = 50) {
    return prisma.nguoiDung.findMany({
      where: { trang_thai: 'hoat_dong' },
      orderBy: { tong_diem: 'desc' },
      take: limit,
      select: {
        ma_nguoi_dung: true,
        ho_ten: true,
        anh_dai_dien: true,
        tong_diem: true,
        cap_do: true
      }
    });
  }

  // Lấy rank của user
  async getUserRank(userId) {
    const user = await prisma.nguoiDung.findUnique({
      where: { ma_nguoi_dung: userId },
      select: { tong_diem: true }
    });

    const rank = await prisma.nguoiDung.count({
      where: {
        tong_diem: { gt: user.tong_diem },
        trang_thai: 'hoat_dong'
      }
    });

    return rank + 1;
  }
}

module.exports = new GamificationService();
```

---

## 📋 MIGRATION CHECKLIST

### Phase 1: Setup & Infrastructure (Tuần 1-2)

- [ ] Khởi tạo project Node.js với Express
- [ ] Cấu hình Prisma ORM + MySQL connection
- [ ] Tạo Prisma schema từ database hiện tại
- [ ] Setup authentication (Passport + JWT)
- [ ] Cấu hình file upload (Multer)
- [ ] Setup i18n (Việt/Khmer)
- [ ] Cấu hình Docker + docker-compose
- [ ] Setup testing framework (Jest)

### Phase 2: Core API Development (Tuần 3-5)
- [ ] Auth API (register, login, logout, forgot password)
- [ ] User API (profile, settings, avatar)
- [ ] Culture API (CRUD + pagination + filter)
- [ ] Temple API (CRUD + map data)
- [ ] Festival API (CRUD + calendar)
- [ ] Lesson API (CRUD + vocabulary)
- [ ] Story API (CRUD)
- [ ] Comment API (CRUD + like + report)
- [ ] Favorite/Bookmark API
- [ ] Search API (multi-content)

### Phase 3: Advanced Features (Tuần 6-7)
- [ ] Gamification service (points, badges, leaderboard)
- [ ] Forum API (categories, threads, posts)
- [ ] Notification system
- [ ] Activity logging
- [ ] Admin dashboard API
- [ ] Admin CRUD APIs

### Phase 4: Frontend Migration (Tuần 8-10)
- [ ] Chọn frontend approach (SSR/SPA)
- [ ] Migrate layouts & components
- [ ] Migrate user pages
- [ ] Migrate admin pages
- [ ] Responsive testing
- [ ] i18n integration

### Phase 5: Testing & Deployment (Tuần 11-12)
- [ ] Unit tests cho services
- [ ] Integration tests cho APIs
- [ ] Performance testing
- [ ] Security audit
- [ ] Documentation (Swagger)
- [ ] CI/CD setup
- [ ] Production deployment

---

## 🔄 DATA MIGRATION STRATEGY

### Approach 1: Direct Database Connection (Recommended)
```bash
# Prisma sẽ introspect database hiện tại
npx prisma db pull

# Generate Prisma Client
npx prisma generate

# Tạo migration từ schema
npx prisma migrate dev --name init
```

### Approach 2: Export/Import
```sql
-- Export từ PHP MySQL
mysqldump -u root -p van_hoa_khmer > backup.sql

-- Import vào Node.js MySQL
mysql -u root -p van_hoa_khmer_nodejs < backup.sql
```

### Password Compatibility
PHP sử dụng `password_hash()` với bcrypt, Node.js `bcryptjs` tương thích:
```javascript
// Verify password từ PHP
const bcrypt = require('bcryptjs');
const isValid = await bcrypt.compare(inputPassword, phpHashedPassword);
// Hoạt động vì cả hai đều dùng bcrypt
```

---

## 🔐 SECURITY CONSIDERATIONS

### Authentication
- JWT với refresh token rotation
- Rate limiting cho login attempts
- Password strength validation
- Account lockout sau nhiều lần fail

### API Security
- Helmet.js cho HTTP headers
- CORS configuration
- Input validation (Joi/Zod)
- SQL injection prevention (Prisma ORM)
- XSS prevention (sanitize-html)

### File Upload
- File type validation
- File size limits
- Virus scanning (optional)
- Secure file naming

---

## 📊 PERFORMANCE OPTIMIZATION

### Database
- Prisma query optimization
- Database indexing
- Connection pooling
- Query caching (Redis)

### API
- Response compression (gzip)
- Pagination cho large datasets
- Lazy loading
- CDN cho static assets

### Caching Strategy
```javascript
// Redis caching example
const redis = require('redis');
const client = redis.createClient();

async function getCachedData(key, fetchFn, ttl = 3600) {
  const cached = await client.get(key);
  if (cached) return JSON.parse(cached);
  
  const data = await fetchFn();
  await client.setEx(key, ttl, JSON.stringify(data));
  return data;
}
```

---

## 📁 ENVIRONMENT VARIABLES

```env
# .env.example

# App
NODE_ENV=development
PORT=3000
APP_URL=http://localhost:3000

# Database
DATABASE_URL="mysql://root:password@localhost:3306/van_hoa_khmer"

# JWT
JWT_SECRET=your-super-secret-key-change-in-production
JWT_EXPIRES_IN=7d
JWT_REFRESH_EXPIRES_IN=30d

# Session
SESSION_SECRET=your-session-secret

# CORS
CORS_ORIGIN=http://localhost:3000

# File Upload
UPLOAD_PATH=./public/uploads
MAX_FILE_SIZE=5242880

# Redis (optional)
REDIS_URL=redis://localhost:6379

# Email (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

---

## 📚 RECOMMENDED PACKAGES

```json
{
  "dependencies": {
    "express": "^4.18.2",
    "prisma": "^5.7.0",
    "@prisma/client": "^5.7.0",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.2",
    "passport": "^0.7.0",
    "passport-jwt": "^4.0.1",
    "passport-local": "^1.0.0",
    "express-validator": "^7.0.1",
    "multer": "^1.4.5-lts.1",
    "cors": "^2.8.5",
    "helmet": "^7.1.0",
    "morgan": "^1.10.0",
    "express-rate-limit": "^7.1.5",
    "express-session": "^1.17.3",
    "i18next": "^23.7.11",
    "i18next-http-middleware": "^3.5.0",
    "slugify": "^1.6.6",
    "sanitize-html": "^2.11.0",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.2",
    "jest": "^29.7.0",
    "supertest": "^6.3.3",
    "eslint": "^8.56.0",
    "prettier": "^3.1.1"
  }
}
```

---

## 🎯 FRONTEND OPTIONS

### Option 1: Server-Side Rendering (EJS) - Giữ nguyên flow
**Pros:** Dễ migrate, SEO tốt, không cần build step
**Cons:** Ít interactive, reload toàn trang

### Option 2: React + Next.js - Modern SPA/SSR
**Pros:** Modern, component-based, SSR + CSR, ecosystem lớn
**Cons:** Learning curve, build complexity

### Option 3: Vue + Nuxt.js - Progressive
**Pros:** Dễ học, progressive enhancement, SSR
**Cons:** Ecosystem nhỏ hơn React

### Option 4: Vanilla JS + Vite - Lightweight
**Pros:** Nhẹ, nhanh, không framework overhead
**Cons:** Cần viết nhiều code hơn

### Recommendation
Với dự án này, **Option 1 (EJS)** hoặc **Option 2 (Next.js)** phù hợp nhất:
- EJS nếu muốn migrate nhanh, giữ nguyên UI
- Next.js nếu muốn modernize hoàn toàn

---

## 📞 SUPPORT & RESOURCES

### Documentation
- [Express.js](https://expressjs.com/)
- [Prisma](https://www.prisma.io/docs)
- [Passport.js](http://www.passportjs.org/)
- [JWT](https://jwt.io/)

### Tutorials
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [Express Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)

---

## 📝 NOTES

### Ưu điểm của việc chuyển sang Node.js
1. **Performance:** Non-blocking I/O, xử lý concurrent requests tốt hơn
2. **Ecosystem:** NPM với hàng triệu packages
3. **Full-stack JavaScript:** Cùng ngôn ngữ frontend/backend
4. **Modern tooling:** TypeScript support, hot reload, debugging
5. **Scalability:** Dễ scale horizontal với PM2, Docker
6. **Real-time:** WebSocket support native (Socket.io)

### Thách thức
1. **Learning curve:** Team cần học Node.js ecosystem
2. **Migration effort:** Viết lại toàn bộ backend logic
3. **Testing:** Cần viết tests mới
4. **Deployment:** Thay đổi infrastructure

### Timeline ước tính
- **Minimal viable migration:** 8-10 tuần
- **Full migration với testing:** 12-14 tuần
- **Production-ready:** 14-16 tuần

---

*Tài liệu này được tạo tự động từ phân tích dự án PHP hiện tại.*
*Cập nhật: December 2024*

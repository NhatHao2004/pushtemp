import Link from "next/link"
import { Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  khamPha: [
    { name: "Văn hóa Khmer", href: "/van-hoa" },
    { name: "Chùa Khmer", href: "/chua-khmer" },
    { name: "Lễ hội", href: "/le-hoi" },
    { name: "Truyện dân gian", href: "/truyen-dan-gian" },
  ],
  hocTap: [
    { name: "Học tiếng Khmer", href: "/hoc-tieng-khmer" },
    { name: "Từ vựng", href: "/hoc-tieng-khmer/tu-vung" },
    { name: "Bài tập", href: "/hoc-tieng-khmer/bai-tap" },
    { name: "Bảng xếp hạng", href: "/leaderboard" },
  ],
  congDong: [
    { name: "Diễn đàn", href: "/dien-dan" },
    { name: "Bản đồ di sản", href: "/ban-do" },
    { name: "Sự kiện", href: "/su-kien" },
    { name: "Đóng góp", href: "/dong-gop" },
  ],
  hoTro: [
    { name: "Giới thiệu", href: "/gioi-thieu" },
    { name: "Liên hệ", href: "/lien-he" },
    { name: "Điều khoản", href: "/dieu-khoan" },
    { name: "Chính sách", href: "/chinh-sach" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">ក</span>
              </div>
              <div>
                <h2 className="font-bold text-white">Văn hóa Khmer</h2>
                <p className="text-xs text-gray-400">Nam Bộ</p>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Nền tảng số hóa và bảo tồn văn hóa Khmer Nam Bộ - Kết nối cộng đồng, lan tỏa giá trị văn hóa.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#667eea] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#667eea] transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#667eea] transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Khám phá</h3>
            <ul className="space-y-2">
              {footerLinks.khamPha.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Học tập</h3>
            <ul className="space-y-2">
              {footerLinks.hocTap.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Cộng đồng</h3>
            <ul className="space-y-2">
              {footerLinks.congDong.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Trà Vinh, Việt Nam</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>0123 456 789</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>contact@khmerculture.vn</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2024 Văn hóa Khmer Nam Bộ. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="/dieu-khoan" className="hover:text-white transition-colors">Điều khoản</Link>
            <Link href="/chinh-sach" className="hover:text-white transition-colors">Chính sách</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowLeft, Eye, Clock, Calendar, Share2, Heart, 
  BookmarkPlus, MessageSquare, Facebook, Twitter, Link2
} from "lucide-react"

// Mock data - sẽ thay bằng API
const article = {
  id: 1,
  title: "Nghệ thuật điêu khắc Khmer - Di sản văn hóa độc đáo",
  titleKhmer: "សិល្បៈចម្លាក់ខ្មែរ",
  category: "Nghệ thuật",
  author: "Nguyễn Văn A",
  publishDate: "15/12/2024",
  views: 1234,
  readTime: 5,
  content: `
    <p>Nghệ thuật điêu khắc Khmer là một trong những di sản văn hóa quý giá nhất của người Khmer Nam Bộ. Với lịch sử hàng nghìn năm, nghệ thuật này đã để lại dấu ấn sâu đậm trong các công trình kiến trúc, đặc biệt là các ngôi chùa.</p>
    
    <h2>Đặc điểm nổi bật</h2>
    <p>Điêu khắc Khmer mang đậm dấu ấn của Phật giáo Theravada, với các hình tượng Phật, Bồ Tát, và các vị thần trong thần thoại Hindu. Các tác phẩm thường được chạm khắc trên gỗ, đá, và kim loại với độ tinh xảo cao.</p>
    
    <h2>Các chủ đề phổ biến</h2>
    <ul>
      <li>Hình tượng Đức Phật trong các tư thế khác nhau</li>
      <li>Các vị thần Hindu như Vishnu, Shiva</li>
      <li>Rồng (Naga) - biểu tượng của nước và sự bảo vệ</li>
      <li>Hoa sen - biểu tượng của sự thanh khiết</li>
      <li>Các cảnh trong Jataka (tiền thân Đức Phật)</li>
    </ul>
    
    <h2>Kỹ thuật chạm khắc</h2>
    <p>Nghệ nhân Khmer sử dụng nhiều kỹ thuật khác nhau như chạm nổi, chạm chìm, và chạm lộng. Mỗi kỹ thuật đòi hỏi sự khéo léo và kinh nghiệm lâu năm.</p>
    
    <h2>Bảo tồn và phát triển</h2>
    <p>Ngày nay, nghệ thuật điêu khắc Khmer đang được bảo tồn và phát triển thông qua các chương trình đào tạo nghệ nhân trẻ và các dự án trùng tu các công trình cổ.</p>
  `,
  relatedArticles: [
    { id: 2, title: "Âm nhạc truyền thống Khmer", slug: "am-nhac-truyen-thong-khmer", category: "Âm nhạc" },
    { id: 3, title: "Kiến trúc chùa Khmer", slug: "kien-truc-chua-khmer", category: "Kiến trúc" },
    { id: 4, title: "Trang phục truyền thống", slug: "trang-phuc-truyen-thong", category: "Trang phục" },
  ]
}

export default function VanHoaDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="h-[400px] bg-gradient-to-br from-[#667eea] to-[#764ba2] relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 h-full flex items-end pb-8 relative z-10">
          <div className="text-white">
            <Link href="/van-hoa" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Quay lại
            </Link>
            <Badge className="mb-3">{article.category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{article.title}</h1>
            <p className="text-xl text-white/80">{article.titleKhmer}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6 md:p-8">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.publishDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {article.views} lượt xem
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime} phút đọc
                  </span>
                  <span>Tác giả: <strong>{article.author}</strong></span>
                </div>

                {/* Content */}
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t">
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm">
                      <Heart className="w-4 h-4" />
                      Thích
                    </Button>
                    <Button variant="outline" size="sm">
                      <BookmarkPlus className="w-4 h-4" />
                      Lưu
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Chia sẻ:</span>
                    <button className="p-2 rounded-full hover:bg-blue-50 text-blue-600">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-sky-50 text-sky-500">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
                      <Link2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comments Section */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Bình luận (12)
                </h3>
                
                {/* Comment Form */}
                <div className="mb-6">
                  <textarea 
                    className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#667eea]"
                    rows={3}
                    placeholder="Viết bình luận của bạn..."
                  />
                  <div className="flex justify-end mt-2">
                    <Button size="sm">Gửi bình luận</Button>
                  </div>
                </div>

                {/* Comments List */}
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-3 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">Người dùng {i}</span>
                          <span className="text-xs text-gray-500">2 giờ trước</span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Bài viết rất hay và bổ ích! Cảm ơn tác giả đã chia sẻ.
                        </p>
                        <div className="flex items-center gap-3 mt-2 text-sm">
                          <button className="text-gray-500 hover:text-[#667eea]">Thích (5)</button>
                          <button className="text-gray-500 hover:text-[#667eea]">Trả lời</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Author Card */}
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] mb-4"></div>
                <h4 className="font-semibold text-lg">{article.author}</h4>
                <p className="text-sm text-gray-500 mb-4">Biên tập viên</p>
                <Button variant="outline" size="sm" className="w-full">Xem hồ sơ</Button>
              </CardContent>
            </Card>

            {/* Related Articles */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-4">Bài viết liên quan</h4>
                <div className="space-y-4">
                  {article.relatedArticles.map((item) => (
                    <Link key={item.id} href={`/van-hoa/${item.slug}`} className="block group">
                      <div className="flex gap-3">
                        <div className="w-20 h-16 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 flex-shrink-0"></div>
                        <div>
                          <Badge variant="secondary" className="text-xs mb-1">{item.category}</Badge>
                          <h5 className="text-sm font-medium group-hover:text-[#667eea] transition-colors line-clamp-2">
                            {item.title}
                          </h5>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-4">Từ khóa</h4>
                <div className="flex flex-wrap gap-2">
                  {["Điêu khắc", "Nghệ thuật", "Văn hóa", "Khmer", "Di sản", "Chùa"].map((tag) => (
                    <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-gray-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

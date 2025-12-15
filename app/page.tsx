import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  BookOpen, Building2, Calendar, GraduationCap, 
  BookMarked, Map, Users, Trophy, Star, ArrowRight,
  Play, Eye, Clock
} from "lucide-react"

// Mock data - sẽ thay bằng API sau
const stats = [
  { icon: Building2, value: "150+", label: "Chùa Khmer" },
  { icon: Calendar, value: "50+", label: "Lễ hội" },
  { icon: GraduationCap, value: "100+", label: "Bài học" },
  { icon: Users, value: "10K+", label: "Thành viên" },
]

const features = [
  { 
    icon: BookOpen, 
    title: "Văn hóa Khmer", 
    desc: "Khám phá nét đẹp văn hóa độc đáo của người Khmer Nam Bộ",
    href: "/van-hoa",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    icon: Building2, 
    title: "Chùa Khmer", 
    desc: "Tìm hiểu kiến trúc và lịch sử các ngôi chùa cổ kính",
    href: "/chua-khmer",
    color: "from-amber-500 to-orange-500"
  },
  { 
    icon: Calendar, 
    title: "Lễ hội", 
    desc: "Trải nghiệm các lễ hội truyền thống đặc sắc",
    href: "/le-hoi",
    color: "from-pink-500 to-rose-500"
  },
  { 
    icon: GraduationCap, 
    title: "Học tiếng Khmer", 
    desc: "Học tiếng Khmer qua các bài học tương tác",
    href: "/hoc-tieng-khmer",
    color: "from-emerald-500 to-teal-500"
  },
  { 
    icon: BookMarked, 
    title: "Truyện dân gian", 
    desc: "Đọc những câu chuyện dân gian đầy ý nghĩa",
    href: "/truyen-dan-gian",
    color: "from-purple-500 to-violet-500"
  },
  { 
    icon: Map, 
    title: "Bản đồ di sản", 
    desc: "Khám phá di sản văn hóa trên bản đồ tương tác",
    href: "/ban-do",
    color: "from-indigo-500 to-blue-500"
  },
]

const featuredCultures = [
  {
    id: 1,
    title: "Nghệ thuật điêu khắc Khmer",
    image: "/images/culture-1.jpg",
    category: "Nghệ thuật",
    views: 1234,
    slug: "nghe-thuat-dieu-khac-khmer"
  },
  {
    id: 2,
    title: "Âm nhạc truyền thống Khmer",
    image: "/images/culture-2.jpg",
    category: "Âm nhạc",
    views: 987,
    slug: "am-nhac-truyen-thong-khmer"
  },
  {
    id: 3,
    title: "Trang phục truyền thống",
    image: "/images/culture-3.jpg",
    category: "Trang phục",
    views: 856,
    slug: "trang-phuc-truyen-thong"
  },
]

const upcomingFestivals = [
  {
    id: 1,
    name: "Lễ hội Ok Om Bok",
    date: "15/11/2024",
    location: "Trà Vinh",
    image: "/images/festival-1.jpg"
  },
  {
    id: 2,
    name: "Lễ Sene Đôlta",
    date: "01/10/2024",
    location: "Sóc Trăng",
    image: "/images/festival-2.jpg"
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center gradient-primary overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-0">
              🎉 Chào mừng bạn đến với nền tảng văn hóa Khmer
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Khám phá vẻ đẹp
              <span className="block text-amber-300">Văn hóa Khmer Nam Bộ</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Nền tảng số hóa và bảo tồn văn hóa Khmer - Nơi kết nối cộng đồng, 
              lan tỏa giá trị văn hóa truyền thống đến thế hệ trẻ.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/van-hoa">
                <Button size="xl" className="bg-white text-[#667eea] hover:bg-gray-100">
                  Bắt đầu khám phá
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/hoc-tieng-khmer">
                <Button size="xl" variant="outline" className="border-white text-white hover:bg-white/20">
                  <Play className="w-5 h-5" />
                  Học tiếng Khmer
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl gradient-primary flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Khám phá nền tảng
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trải nghiệm đa dạng các tính năng giúp bạn tìm hiểu và kết nối với văn hóa Khmer Nam Bộ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link key={index} href={feature.href}>
                <Card className="h-full hover:scale-[1.02] transition-transform cursor-pointer group">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#667eea] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Nội dung nổi bật</h2>
              <p className="text-gray-600 mt-1">Những bài viết được quan tâm nhất</p>
            </div>
            <Link href="/van-hoa">
              <Button variant="outline">
                Xem tất cả
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCultures.map((item) => (
              <Link key={item.id} href={`/van-hoa/${item.slug}`}>
                <Card className="overflow-hidden group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <Badge className="absolute top-3 left-3">{item.category}</Badge>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-semibold text-lg group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {item.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        5 phút đọc
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Festivals */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Lễ hội sắp diễn ra</h2>
              <p className="text-gray-600 mt-1">Đừng bỏ lỡ các sự kiện văn hóa đặc sắc</p>
            </div>
            <Link href="/le-hoi">
              <Button variant="outline">
                Xem tất cả
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingFestivals.map((festival) => (
              <Card key={festival.id} className="overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-48 h-40 sm:h-auto bg-gradient-to-br from-amber-400 to-orange-500 flex-shrink-0"></div>
                  <CardContent className="p-6 flex-1">
                    <Badge variant="warning" className="mb-2">Sắp diễn ra</Badge>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{festival.name}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {festival.date}
                      </p>
                      <p className="flex items-center gap-2">
                        <Map className="w-4 h-4" />
                        {festival.location}
                      </p>
                    </div>
                    <Button className="mt-4" size="sm">Xem chi tiết</Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gamification CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl gradient-primary p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/20 flex items-center justify-center">
                <Trophy className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Học và nhận thưởng
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Tham gia học tiếng Khmer, hoàn thành bài học và tích lũy điểm để nhận các huy hiệu đặc biệt. 
                Cạnh tranh với cộng đồng trên bảng xếp hạng!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/hoc-tieng-khmer">
                  <Button size="lg" className="bg-white text-[#667eea] hover:bg-gray-100">
                    <GraduationCap className="w-5 h-5" />
                    Bắt đầu học ngay
                  </Button>
                </Link>
                <Link href="/leaderboard">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                    <Star className="w-5 h-5" />
                    Xem bảng xếp hạng
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

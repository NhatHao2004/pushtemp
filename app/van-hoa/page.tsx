"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Grid, List, Eye, Clock, Heart, BookmarkPlus } from "lucide-react"

// Mock data
const categories = ["Tất cả", "Nghệ thuật", "Âm nhạc", "Trang phục", "Ẩm thực", "Kiến trúc", "Phong tục"]

const articles = [
  {
    id: 1,
    title: "Nghệ thuật điêu khắc Khmer - Di sản văn hóa độc đáo",
    excerpt: "Khám phá nét đẹp tinh xảo trong nghệ thuật điêu khắc của người Khmer Nam Bộ qua các công trình chùa chiền...",
    category: "Nghệ thuật",
    image: "/images/culture-1.jpg",
    views: 1234,
    readTime: 5,
    featured: true,
    slug: "nghe-thuat-dieu-khac-khmer"
  },
  {
    id: 2,
    title: "Âm nhạc truyền thống Khmer - Giai điệu của tâm hồn",
    excerpt: "Tìm hiểu về các nhạc cụ truyền thống và những giai điệu đặc trưng trong âm nhạc Khmer...",
    category: "Âm nhạc",
    image: "/images/culture-2.jpg",
    views: 987,
    readTime: 7,
    featured: true,
    slug: "am-nhac-truyen-thong-khmer"
  },
  {
    id: 3,
    title: "Trang phục truyền thống Khmer",
    excerpt: "Vẻ đẹp của trang phục Khmer qua các thời kỳ lịch sử và ý nghĩa văn hóa sâu sắc...",
    category: "Trang phục",
    image: "/images/culture-3.jpg",
    views: 856,
    readTime: 4,
    featured: false,
    slug: "trang-phuc-truyen-thong"
  },
  {
    id: 4,
    title: "Ẩm thực Khmer - Hương vị đặc trưng",
    excerpt: "Khám phá những món ăn truyền thống độc đáo của người Khmer Nam Bộ...",
    category: "Ẩm thực",
    image: "/images/culture-4.jpg",
    views: 1567,
    readTime: 6,
    featured: false,
    slug: "am-thuc-khmer"
  },
  {
    id: 5,
    title: "Kiến trúc chùa Khmer - Nghệ thuật và tâm linh",
    excerpt: "Tìm hiểu về kiến trúc độc đáo của các ngôi chùa Khmer với những họa tiết tinh xảo...",
    category: "Kiến trúc",
    image: "/images/culture-5.jpg",
    views: 2341,
    readTime: 8,
    featured: true,
    slug: "kien-truc-chua-khmer"
  },
  {
    id: 6,
    title: "Phong tục cưới hỏi của người Khmer",
    excerpt: "Những nghi lễ truyền thống trong đám cưới của người Khmer Nam Bộ...",
    category: "Phong tục",
    image: "/images/culture-6.jpg",
    views: 1123,
    readTime: 5,
    featured: false,
    slug: "phong-tuc-cuoi-hoi"
  },
]

export default function VanHoaPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState("Tất cả")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredArticles = articles.filter(article => {
    const matchCategory = selectedCategory === "Tất cả" || article.category === selectedCategory
    const matchSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="gradient-primary py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Văn hóa Khmer</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Khám phá nét đẹp văn hóa độc đáo của người Khmer Nam Bộ qua các bài viết chuyên sâu
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input 
                placeholder="Tìm kiếm bài viết..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? "bg-[#667eea] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors ${viewMode === "grid" ? "bg-white shadow-sm" : ""}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-colors ${viewMode === "list" ? "bg-white shadow-sm" : ""}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results count */}
        <p className="text-gray-600 mb-6">
          Hiển thị <span className="font-semibold">{filteredArticles.length}</span> bài viết
        </p>

        {/* Articles Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Link key={article.id} href={`/van-hoa/${article.slug}`}>
                <Card className="h-full overflow-hidden group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    {article.featured && (
                      <Badge className="absolute top-3 right-3">Nổi bật</Badge>
                    )}
                    <Badge variant="secondary" className="absolute top-3 left-3">
                      {article.category}
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-[#667eea] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {article.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime} phút
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-1 hover:text-red-500 transition-colors">
                          <Heart className="w-4 h-4" />
                        </button>
                        <button className="p-1 hover:text-[#667eea] transition-colors">
                          <BookmarkPlus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredArticles.map((article) => (
              <Link key={article.id} href={`/van-hoa/${article.slug}`}>
                <Card className="overflow-hidden group cursor-pointer">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-64 h-48 sm:h-auto bg-gradient-to-br from-gray-200 to-gray-300 flex-shrink-0 relative">
                      {article.featured && (
                        <Badge className="absolute top-3 right-3">Nổi bật</Badge>
                      )}
                    </div>
                    <CardContent className="p-5 flex-1">
                      <Badge variant="secondary" className="mb-2">{article.category}</Badge>
                      <h3 className="font-semibold text-xl text-gray-900 mb-2 group-hover:text-[#667eea] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {article.views} lượt xem
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime} phút đọc
                        </span>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center mt-10">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>Trước</Button>
            <Button size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Sau</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

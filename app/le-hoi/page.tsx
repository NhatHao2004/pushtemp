"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight, Grid, List } from "lucide-react"

// Mock data
const festivals = [
  {
    id: 1,
    name: "Lễ hội Ok Om Bok",
    nameKhmer: "បុណ្យអកអំបុក",
    date: "15/11/2024",
    endDate: "17/11/2024",
    location: "Trà Vinh",
    description: "Lễ hội cúng trăng truyền thống của người Khmer, tạ ơn thần Mặt Trăng đã bảo vệ mùa màng.",
    type: "Tôn giáo",
    status: "upcoming",
    image: "/images/festival-1.jpg",
    slug: "le-hoi-ok-om-bok"
  },
  {
    id: 2,
    name: "Lễ Sene Đôlta",
    nameKhmer: "បុណ្យភ្ជុំបិណ្ឌ",
    date: "01/10/2024",
    endDate: "03/10/2024",
    location: "Sóc Trăng",
    description: "Lễ cúng ông bà tổ tiên, tương tự lễ Vu Lan của người Việt.",
    type: "Tôn giáo",
    status: "past",
    image: "/images/festival-2.jpg",
    slug: "le-sene-dolta"
  },
  {
    id: 3,
    name: "Tết Chôl Chnăm Thmây",
    nameKhmer: "ចូលឆ្នាំថ្មី",
    date: "14/04/2025",
    endDate: "16/04/2025",
    location: "Toàn vùng ĐBSCL",
    description: "Tết cổ truyền của người Khmer, đánh dấu năm mới theo lịch Phật giáo.",
    type: "Văn hóa",
    status: "upcoming",
    image: "/images/festival-3.jpg",
    slug: "tet-chol-chnam-thmay"
  },
  {
    id: 4,
    name: "Lễ hội đua ghe Ngo",
    nameKhmer: "បុណ្យអុំទូក",
    date: "15/11/2024",
    endDate: "15/11/2024",
    location: "Sóc Trăng",
    description: "Lễ hội đua thuyền truyền thống diễn ra vào dịp Ok Om Bok.",
    type: "Thể thao",
    status: "upcoming",
    image: "/images/festival-4.jpg",
    slug: "le-hoi-dua-ghe-ngo"
  },
  {
    id: 5,
    name: "Lễ Kathina",
    nameKhmer: "បុណ្យកឋិន",
    date: "20/10/2024",
    endDate: "20/10/2024",
    location: "Các chùa Khmer",
    description: "Lễ dâng y cà sa cho các nhà sư sau mùa an cư kiết hạ.",
    type: "Tôn giáo",
    status: "past",
    image: "/images/festival-5.jpg",
    slug: "le-kathina"
  },
  {
    id: 6,
    name: "Lễ Phật Đản",
    nameKhmer: "វិសាខបូជា",
    date: "22/05/2025",
    endDate: "22/05/2025",
    location: "Toàn vùng ĐBSCL",
    description: "Kỷ niệm ngày Đức Phật đản sinh, thành đạo và nhập niết bàn.",
    type: "Tôn giáo",
    status: "upcoming",
    image: "/images/festival-6.jpg",
    slug: "le-phat-dan"
  },
]

const filterTypes = ["Tất cả", "Tôn giáo", "Văn hóa", "Thể thao"]
const filterStatus = ["Tất cả", "Sắp diễn ra", "Đã qua"]

export default function LeHoiPage() {
  const [viewMode, setViewMode] = useState<"timeline" | "grid">("timeline")
  const [selectedType, setSelectedType] = useState("Tất cả")
  const [selectedStatus, setSelectedStatus] = useState("Tất cả")

  const filteredFestivals = festivals.filter(f => {
    const matchType = selectedType === "Tất cả" || f.type === selectedType
    const matchStatus = selectedStatus === "Tất cả" || 
      (selectedStatus === "Sắp diễn ra" && f.status === "upcoming") ||
      (selectedStatus === "Đã qua" && f.status === "past")
    return matchType && matchStatus
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="gradient-primary py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lễ hội Khmer</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Khám phá các lễ hội truyền thống đặc sắc của người Khmer Nam Bộ
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-500 mr-2">Loại:</span>
              {filterTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedType === type
                      ? "bg-[#667eea] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-500 mr-2">Trạng thái:</span>
              {filterStatus.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedStatus === status
                      ? "bg-[#667eea] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("timeline")}
                className={`p-2 rounded-md transition-colors ${viewMode === "timeline" ? "bg-white shadow-sm" : ""}`}
              >
                <List className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors ${viewMode === "grid" ? "bg-white shadow-sm" : ""}`}
              >
                <Grid className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Timeline View */}
        {viewMode === "timeline" ? (
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#667eea]/30 transform md:-translate-x-1/2"></div>

            <div className="space-y-8">
              {filteredFestivals.map((festival, index) => (
                <div key={festival.id} className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#667eea] rounded-full transform -translate-x-1/2 z-10 ring-4 ring-white"></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <Link href={`/le-hoi/${festival.slug}`}>
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="flex flex-col sm:flex-row">
                          <div className="sm:w-48 h-40 sm:h-auto bg-gradient-to-br from-[#667eea] to-[#764ba2] flex-shrink-0 relative">
                            {festival.status === "upcoming" && (
                              <Badge className="absolute top-2 left-2 bg-emerald-500">Sắp diễn ra</Badge>
                            )}
                          </div>
                          <CardContent className="p-5 flex-1">
                            <Badge variant="secondary" className="mb-2">{festival.type}</Badge>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">{festival.name}</h3>
                            <p className="text-sm text-[#667eea] mb-2">{festival.nameKhmer}</p>
                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{festival.description}</p>
                            <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {festival.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {festival.location}
                              </span>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFestivals.map((festival) => (
              <Link key={festival.id} href={`/le-hoi/${festival.slug}`}>
                <Card className="h-full overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-[#667eea] to-[#764ba2] relative">
                    {festival.status === "upcoming" && (
                      <Badge className="absolute top-3 right-3 bg-emerald-500">Sắp diễn ra</Badge>
                    )}
                    <Badge variant="secondary" className="absolute top-3 left-3">{festival.type}</Badge>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-[#667eea] transition-colors">
                      {festival.name}
                    </h3>
                    <p className="text-sm text-[#667eea] mb-2">{festival.nameKhmer}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{festival.description}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {festival.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {festival.location}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

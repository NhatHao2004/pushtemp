"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Eye, Grid, Map, Building2, Users } from "lucide-react"

const provinces = ["Tất cả", "Trà Vinh", "Sóc Trăng", "An Giang", "Kiên Giang", "Bạc Liêu"]

const temples = [
  { id: 1, name: "Chùa Âng", nameKhmer: "វត្តអង្គ", address: "Xã Lương Hòa A, Châu Thành", province: "Trà Vinh", monks: 25, views: 2341, slug: "chua-ang" },
  { id: 2, name: "Chùa Dơi", nameKhmer: "វត្តសេរីតារាម", address: "Phường 3, TP Sóc Trăng", province: "Sóc Trăng", monks: 30, views: 3456, slug: "chua-doi" },
  { id: 3, name: "Chùa Xiêm Cán", nameKhmer: "វត្តសៀមកាន", address: "Xã Vĩnh Trạch Đông", province: "Bạc Liêu", monks: 20, views: 1890, slug: "chua-xiem-can" },
]

export default function ChuaKhmerPage() {
  const [selectedProvince, setSelectedProvince] = useState("Tất cả")
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTemples = temples.filter(t => {
    const matchProvince = selectedProvince === "Tất cả" || t.province === selectedProvince
    const matchSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchProvince && matchSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="gradient-primary py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Chùa Khmer</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">Khám phá các ngôi chùa Khmer cổ kính tại Nam Bộ</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input placeholder="Tìm kiếm chùa..." className="pl-10" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            <div className="flex flex-wrap gap-2">
              {provinces.map((p) => (
                <button key={p} onClick={() => setSelectedProvince(p)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedProvince === p ? "bg-[#667eea] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>{p}</button>
              ))}
            </div>
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button onClick={() => setViewMode("grid")} className={`p-2 rounded-md ${viewMode === "grid" ? "bg-white shadow-sm" : ""}`}><Grid className="w-5 h-5" /></button>
              <button onClick={() => setViewMode("map")} className={`p-2 rounded-md ${viewMode === "map" ? "bg-white shadow-sm" : ""}`}><Map className="w-5 h-5" /></button>
            </div>
          </div>
        </div>

        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemples.map((temple) => (
              <Link key={temple.id} href={`/chua-khmer/${temple.slug}`}>
                <Card className="h-full overflow-hidden group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-[#667eea] to-[#764ba2] relative">
                    <Badge className="absolute top-3 left-3">{temple.province}</Badge>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-[#667eea]">{temple.name}</h3>
                    <p className="text-sm text-[#667eea] mb-2">{temple.nameKhmer}</p>
                    <p className="text-gray-600 text-sm mb-3 flex items-center gap-1"><MapPin className="w-4 h-4" />{temple.address}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><Users className="w-4 h-4" />{temple.monks} sư</span>
                      <span className="flex items-center gap-1"><Eye className="w-4 h-4" />{temple.views}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <Map className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">Bản đồ sẽ được tích hợp sau</p>
          </div>
        )}
      </div>
    </div>
  )
}

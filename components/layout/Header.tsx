"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { 
  Menu, X, Search, Bell, User, Globe, 
  Home, BookOpen, Building2, Calendar, 
  GraduationCap, BookMarked, Map, MessageSquare
} from "lucide-react"

const navigation = [
  { name: "Trang chủ", href: "/", icon: Home },
  { name: "Văn hóa", href: "/van-hoa", icon: BookOpen },
  { name: "Chùa Khmer", href: "/chua-khmer", icon: Building2 },
  { name: "Lễ hội", href: "/le-hoi", icon: Calendar },
  { name: "Học tiếng Khmer", href: "/hoc-tieng-khmer", icon: GraduationCap },
  { name: "Truyện dân gian", href: "/truyen-dan-gian", icon: BookMarked },
  { name: "Bản đồ", href: "/ban-do", icon: Map },
  { name: "Diễn đàn", href: "/dien-dan", icon: MessageSquare },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoggedIn] = useState(false) // TODO: Replace with auth state

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">ក</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg text-gradient">Văn hóa Khmer</h1>
              <p className="text-xs text-gray-500">Nam Bộ</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.slice(0, 6).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm text-gray-600 hover:text-[#667eea] hover:bg-gray-50 rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="relative group">
              <button className="px-3 py-2 text-sm text-gray-600 hover:text-[#667eea] hover:bg-gray-50 rounded-lg transition-colors">
                Thêm ▾
              </button>
              <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {navigation.slice(6).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-[#667eea] hover:bg-gray-50"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-500 hover:text-[#667eea] hover:bg-gray-50 rounded-lg transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-[#667eea] hover:bg-gray-50 rounded-lg transition-colors">
              <Globe className="w-5 h-5" />
            </button>
            
            {isLoggedIn ? (
              <>
                <button className="p-2 text-gray-500 hover:text-[#667eea] hover:bg-gray-50 rounded-lg transition-colors relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <Link href="/profile">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                </Link>
              </>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <Link href="/login">
                  <Button variant="ghost" size="sm">Đăng nhập</Button>
                </Link>
                <Link href="/register">
                  <Button size="sm">Đăng ký</Button>
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-500 hover:text-[#667eea] hover:bg-gray-50 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-[#667eea] hover:bg-gray-50 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              ))}
            </div>
            {!isLoggedIn && (
              <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200 px-4">
                <Link href="/login" className="flex-1">
                  <Button variant="outline" className="w-full">Đăng nhập</Button>
                </Link>
                <Link href="/register" className="flex-1">
                  <Button className="w-full">Đăng ký</Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  )
}

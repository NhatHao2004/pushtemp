import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const inter = Inter({ subsets: ["latin", "vietnamese"] })

export const metadata: Metadata = {
  title: "Văn hóa Khmer Nam Bộ - Nền tảng số hóa và bảo tồn văn hóa",
  description: "Khám phá văn hóa Khmer Nam Bộ - Chùa, lễ hội, học tiếng Khmer, truyện dân gian và nhiều hơn nữa.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

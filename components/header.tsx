"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Leaf, Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="text-lg font-bold text-green-950">SmartFarm</span>
        </Link>
        <nav className="hidden gap-6 md:ml-auto md:flex">
          <Link href="/features" className="text-sm font-medium text-gray-600 transition-colors hover:text-green-600">
            Tính năng
          </Link>
          <Link href="/solutions" className="text-sm font-medium text-gray-600 transition-colors hover:text-green-600">
            Giải pháp
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-gray-600 transition-colors hover:text-green-600">
            Bảng giá
          </Link>
          <Link href="/blog" className="text-sm font-medium text-gray-600 transition-colors hover:text-green-600">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-600 transition-colors hover:text-green-600">
            Liên hệ
          </Link>
        </nav>
        <div className="hidden md:ml-4 md:flex md:gap-2">
          <Link href="/login">
            <Button variant="outline" size="sm">
              Đăng nhập
            </Button>
          </Link>
          <Link href="/register">
            <Button className="bg-green-600 hover:bg-green-700" size="sm">
              Đăng ký
            </Button>
          </Link>
        </div>
        <Button variant="ghost" size="icon" className="ml-auto md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        {isMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 flex h-[calc(100vh-4rem)] w-full flex-col bg-white p-6 md:hidden">
            <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close Menu</span>
            </Button>
            <nav className="flex flex-col space-y-6 text-lg font-medium">
              <Link
                href="/features"
                className="flex py-2 text-green-950 transition-colors hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Tính năng
              </Link>
              <Link
                href="/solutions"
                className="flex py-2 text-green-950 transition-colors hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Giải pháp
              </Link>
              <Link
                href="/pricing"
                className="flex py-2 text-green-950 transition-colors hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Bảng giá
              </Link>
              <Link
                href="/blog"
                className="flex py-2 text-green-950 transition-colors hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="flex py-2 text-green-950 transition-colors hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Liên hệ
              </Link>
              <div className="pt-6">
                <div className="flex flex-col gap-2">
                  <Link
                    href="/login"
                    className="flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Đăng nhập
                  </Link>
                  <Link
                    href="/register"
                    className="flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Đăng ký
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}


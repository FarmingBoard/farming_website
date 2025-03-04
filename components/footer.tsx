import Link from "next/link"
import { Leaf, Facebook, Twitter, Instagram, Youtube, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-950 text-green-100">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-green-400" />
              <span className="text-xl font-bold text-white">SmartFarm</span>
            </div>
            <p className="text-sm text-green-200 max-w-xs">
              Giải pháp nông nghiệp thông minh toàn diện, giúp tối ưu hóa năng suất và bảo vệ môi trường.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-green-200 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-green-200 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-green-200 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-green-200 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Sản phẩm</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-green-200 hover:text-white">
                  Thiết bị cảm biến
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-green-200 hover:text-white">
                  Hệ thống tưới tự động
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-green-200 hover:text-white">
                  Phần mềm quản lý
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-green-200 hover:text-white">
                  Ứng dụng di động
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-green-200 hover:text-white">
                  Dịch vụ lắp đặt
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Giải pháp</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-green-200 hover:text-white">
                  Nhà kính thông minh
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-green-200 hover:text-white">
                  Nông trại IoT
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-green-200 hover:text-white">
                  Canh tác chính xác
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-green-200 hover:text-white">
                  Giám sát thời tiết
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-green-200 hover:text-white">
                  Truy xuất nguồn gốc
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Công ty</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-green-200 hover:text-white">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-green-200 hover:text-white">
                  Đội ngũ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-green-200 hover:text-white">
                  Báo chí
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-green-200 hover:text-white">
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-green-200 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-green-400" />
                <span className="text-sm text-green-200">contact@sfit.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-green-400" />
                <span className="text-sm text-green-200">0123456789</span>
              </li>
              <li className="text-sm text-green-200">UTC, HaNoi, VietNam</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-green-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-green-300">
              &copy; {new Date().getFullYear()} SmartFarm Technology. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-green-300 hover:text-white">
                Điều khoản sử dụng
              </Link>
              <Link href="#" className="text-sm text-green-300 hover:text-white">
                Chính sách bảo mật
              </Link>
              <Link href="#" className="text-sm text-green-300 hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


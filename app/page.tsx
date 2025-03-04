import Link from "next/link"
import { ArrowRight, Leaf, BarChart2, Droplets, Sun, Wind, Database, Tablet, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroAnimation from "@/components/hero-animation"

export default function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-16 md:py-24 lg:py-32">
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  <Leaf className="mr-1 h-4 w-4" />
                  Công Nghệ Nông Nghiệp Tiên Tiến
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-green-950 sm:text-4xl md:text-5xl">
                    Giải Pháp Smart Farming Cho Tương Lai Bền Vững
                  </h1>
                  <p className="text-gray-600 md:text-xl">
                    Tối ưu hóa năng suất canh tác, tiết kiệm tài nguyên và bảo vệ môi trường với hệ thống giám sát thông
                    minh và tự động hóa.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-green-600 hover:bg-green-700" size="lg">
                    <Link href="/demo" className="inline-flex items-center">
                      Dùng thử miễn phí
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    <Link href="/login">Đăng nhập</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <HeroAnimation />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Tính năng chính */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-md bg-green-100 px-3 py-1 text-sm text-green-800">
                  <Leaf className="mr-1 h-4 w-4" />
                  Tính năng nổi bật
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-950">
                  Nông nghiệp thông minh, thu hoạch dồi dào
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hệ thống Smart Farming của chúng tôi cung cấp giải pháp toàn diện giúp bạn tối ưu hóa quy trình canh
                  tác và nâng cao năng suất.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border p-6 shadow-sm transition-all hover:shadow-md hover:translate-y-[-4px]"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-green-950">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile App Section */}
        <section className="w-full bg-gradient-to-b from-white to-green-50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -left-4 -top-4 h-64 w-64 rounded-full bg-green-200 opacity-30 blur-3xl"></div>
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=600&width=300"
                      alt="SmartFarm Mobile App"
                      className="rounded-[32px] shadow-2xl"
                      width={300}
                      height={600}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  <Smartphone className="mr-1 h-4 w-4" />
                  Ứng dụng di động
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-950">
                    Quản lý nông trại trong lòng bàn tay
                  </h2>
                  <p className="text-gray-600 md:text-xl">
                    Theo dõi, điều khiển và tối ưu hóa hoạt động canh tác mọi lúc mọi nơi với ứng dụng SmartFarm trên
                    điện thoại di động.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-gray-600">Giám sát thời gian thực các thông số nông trại</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-gray-600">Điều khiển từ xa hệ thống tưới và thiết bị</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-gray-600">Nhận thông báo và cảnh báo kịp thời</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-gray-600">Phân tích dữ liệu và đề xuất tối ưu</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button className="bg-green-600 hover:bg-green-700" size="lg">
                    <Link href="/mobile-app" className="inline-flex items-center">
                      Tìm hiểu thêm
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Demo */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-950">
                  Xem cách hoạt động
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
                  Trải nghiệm Smart Farming trong thực tế với video demo dưới đây
                </p>
              </div>
              <div className="w-full max-w-4xl overflow-hidden rounded-xl border shadow-xl">
                <div className="aspect-video bg-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button className="bg-green-600 hover:bg-green-700" size="lg">
                      <div className="flex items-center gap-2">
                        <span className="sr-only">Xem Video</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </Button>
                  </div>
                  <img
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Video demo trình diễn hệ thống Smart Farming"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lợi ích */}
        <section className="w-full bg-gradient-to-b from-green-50 to-white py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-md bg-green-100 px-3 py-1 text-sm text-green-800">
                  <BarChart2 className="mr-1 h-4 w-4" />
                  Lợi ích vượt trội
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-950">
                  Tại sao nên chọn giải pháp của chúng tôi?
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Khám phá những lợi ích mà Smart Farming mang lại cho doanh nghiệp và nông trại của bạn
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:gap-12">
              <div className="rounded-xl border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-green-950">Dành cho chủ nông trại</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-gray-600">Tăng năng suất canh tác lên đến 30%</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-gray-600">Giảm 25% chi phí lao động và vận hành</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-gray-600">Tiết kiệm 40% lượng nước sử dụng</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-gray-600">Theo dõi và quản lý từ xa qua ứng dụng di động</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-green-950">Dành cho doanh nghiệp nông nghiệp</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-gray-600">Dữ liệu phân tích chi tiết về hoạt động canh tác</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-gray-600">Quy trình đồng bộ và chuẩn hóa</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-gray-600">Truy xuất nguồn gốc và chứng nhận sản phẩm</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-gray-600">Giảm thiểu rủi ro và tăng tính dự đoán trong kinh doanh</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Giải pháp thực tế */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-md bg-green-100 px-3 py-1 text-sm text-green-800">
                  <Database className="mr-1 h-4 w-4" />
                  Giải pháp toàn diện
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-950">Ứng dụng thực tế</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Khám phá các mô hình canh tác đã áp dụng thành công giải pháp Smart Farming
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={app.image || "/placeholder.svg"}
                      alt={app.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative bg-white p-4">
                    <h3 className="text-lg font-bold text-green-950">{app.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{app.description}</p>
                    <Button variant="link" className="mt-2 p-0 text-green-600 hover:text-green-700">
                      Xem chi tiết
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Khách hàng đã sử dụng */}
        <section className="w-full bg-gradient-to-b from-green-50 to-white py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-950">
                  Khách hàng của chúng tôi
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
                  Hàng trăm nông trại và doanh nghiệp nông nghiệp đã tin dùng giải pháp Smart Farming
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-medium text-green-950">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mt-4 text-gray-600">"{testimonial.quote}"</blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-950">Câu hỏi thường gặp</h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
                  Giải đáp những thắc mắc phổ biến về hệ thống Smart Farming
                </p>
              </div>
            </div>
            <div className="mx-auto mt-8 max-w-3xl space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-green-950">{faq.question}</h3>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700"
              >
                Xem thêm câu hỏi
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-900 text-white">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Sẵn sàng nâng tầm nông nghiệp của bạn?
              </h2>
              <p className="max-w-[600px] text-green-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Trải nghiệm demo miễn phí và tham khảo ý kiến từ chuyên gia của chúng tôi
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-end">
              <Button size="lg" className="bg-white text-green-900 hover:bg-green-50">
                <Link href="/demo">Dùng thử miễn phí</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-green-800">
                <Link href="/contact">Liên hệ với chúng tôi</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

// Data
const features = [
  {
    title: "Theo dõi thời tiết",
    description: "Dữ liệu thời tiết thực tế và dự báo chính xác giúp lập kế hoạch canh tác hiệu quả.",
    icon: <Sun className="h-6 w-6" />,
  },
  {
    title: "Giám sát độ ẩm đất",
    description: "Cảm biến cho phép theo dõi và duy trì độ ẩm đất ở mức tối ưu cho từng loại cây trồng.",
    icon: <Droplets className="h-6 w-6" />,
  },
  {
    title: "Điều khiển tưới tiêu",
    description: "Hệ thống tưới tự động thông minh dựa trên dữ liệu thời tiết và độ ẩm đất.",
    icon: <Wind className="h-6 w-6" />,
  },
  {
    title: "Quản lý dữ liệu",
    description: "Lưu trữ và phân tích dữ liệu canh tác, giúp cải thiện quy trình liên tục.",
    icon: <Database className="h-6 w-6" />,
  },
  {
    title: "Điều khiển từ xa",
    description: "Kiểm soát tất cả thiết bị từ xa thông qua ứng dụng di động hoặc máy tính.",
    icon: <Tablet className="h-6 w-6" />,
  },
  {
    title: "Cảnh báo thông minh",
    description: "Nhận thông báo khi có vấn đề hoặc khi cần can thiệp vào quy trình canh tác.",
    icon: <BarChart2 className="h-6 w-6" />,
  },
]

const applications = [
  {
    title: "Nhà kính thông minh",
    description: "Điều khiển tự động nhiệt độ, độ ẩm và ánh sáng cho cây trồng trong nhà kính.",
    image: "/placeholder.svg?height=450&width=600",
  },
  {
    title: "Canh tác rau hữu cơ",
    description: "Tối ưu hóa quy trình trồng rau hữu cơ với hệ thống giám sát và kiểm soát chất lượng.",
    image: "/placeholder.svg?height=450&width=600",
  },
  {
    title: "Vườn cây ăn quả",
    description: "Giám sát và quản lý hiệu quả năng suất các loại cây ăn quả quy mô lớn.",
    image: "/placeholder.svg?height=450&width=600",
  },
  {
    title: "Trang trại chăn nuôi",
    description: "Theo dõi sức khỏe vật nuôi và tối ưu hóa quy trình cho trang trại chăn nuôi.",
    image: "/placeholder.svg?height=450&width=600",
  },
  {
    title: "Thủy sản thông minh",
    description: "Hệ thống giám sát và điều khiển nuôi trồng thủy sản thông minh.",
    image: "/placeholder.svg?height=450&width=600",
  },
  {
    title: "Nông nghiệp chính xác",
    description: "Ứng dụng công nghệ cao trong nông nghiệp chính xác quy mô lớn.",
    image: "/placeholder.svg?height=450&width=600",
  },
]

const testimonials = [
  {
    name: "Nguyễn Văn A",
    role: "Chủ Trang Trại, Đà Lạt",
    quote:
      "Sau khi áp dụng Smart Farming, năng suất trang trại của tôi tăng 40% trong khi chi phí giảm đáng kể. Một giải pháp tuyệt vời!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Trần Thị B",
    role: "Giám đốc Công ty Nông sản XYZ",
    quote:
      "Hệ thống giúp chúng tôi kiểm soát chất lượng sản phẩm xuyên suốt từ khâu trồng trọt đến thu hoạch, đáp ứng tiêu chuẩn xuất khẩu khắt khe.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Lê Văn C",
    role: "Chủ Hợp tác xã Nông nghiệp Tân Tiến",
    quote:
      "Smart Farming đã giúp các thành viên trong HTX của chúng tôi hiện đại hóa quy trình canh tác và tăng thu nhập đáng kể.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

const faqs = [
  {
    question: "Chi phí đầu tư hệ thống Smart Farming là bao nhiêu?",
    answer:
      "Chi phí đầu tư phụ thuộc vào quy mô và nhu cầu cụ thể của từng nông trại. Chúng tôi cung cấp nhiều gói giải pháp khác nhau, từ gói cơ bản cho đến gói cao cấp với đầy đủ tính năng. Vui lòng liên hệ với chúng tôi để được tư vấn chi tiết.",
  },
  {
    question: "Mất bao lâu để triển khai hệ thống?",
    answer:
      "Thời gian triển khai thường từ 2-4 tuần tùy thuộc vào quy mô và mức độ phức tạp của dự án. Chúng tôi sẽ cung cấp lịch trình chi tiết sau khi khảo sát thực tế.",
  },
  {
    question: "Hệ thống có hoạt động khi không có kết nối internet không?",
    answer:
      "Hệ thống vẫn hoạt động cơ bản mà không cần kết nối internet liên tục. Tuy nhiên, một số tính năng như cập nhật dữ liệu từ xa, cảnh báo, và phân tích dữ liệu sẽ cần kết nối internet để hoạt động đầy đủ.",
  },
  {
    question: "Có cần nhân viên kỹ thuật để vận hành hệ thống không?",
    answer:
      "Hệ thống được thiết kế dễ sử dụng và không đòi hỏi kiến thức kỹ thuật chuyên sâu. Chúng tôi cung cấp đầy đủ tài liệu hướng dẫn và đào tạo sử dụng. Đội ngũ hỗ trợ kỹ thuật của chúng tôi luôn sẵn sàng giúp đỡ khi cần.",
  },
]


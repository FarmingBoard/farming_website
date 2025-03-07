import Link from "next/link"
import Image from "next/image"
import { Check, Download, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AppFeatures from "@/components/app-features"
import AppScreenshots from "@/components/app-screenshots"

export default function MobileAppPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-16 md:py-24 lg:py-32">
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col jus/tify-center space-y-4">
                <div className="inline-flex items-center rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  <Download className="mr-1 h-4 w-4" />
                  Ứng dụng di động
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-green-950 sm:text-4xl md:text-5xl">
                    Quản lý nông trại trong lòng bàn tay
                  </h1>
                  <p className="text-gray-600 md:text-xl">
                    Theo dõi, điều khiển và tối ưu hóa hoạt động canh tác mọi lúc mọi nơi với ứng dụng SmartFarm trên
                    điện thoại di động.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="#download">
                    <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                      <Download className="mr-2 h-4 w-4" />
                      Tải ứng dụng
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button variant="outline" size="lg" className="w-full">
                      Xem tính năng
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5/5 từ hơn 3 đánh giá</span>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-200 opacity-30 blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-green-200 opacity-30 blur-3xl"></div>
                <div className="relative z-10">
                  <img
                    src="./appmobile.jpg"
                    width={300}
                    height={600}
                    alt="SmartFarm Mobile App"
                    className="rounded-[32px] shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* App Features */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-950">Tính năng nổi bật</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Khám phá những tính năng mạnh mẽ giúp bạn quản lý nông trại hiệu quả
                </p>
              </div>
            </div>
            <AppFeatures />
          </div>
        </section>

        {/* App Screenshots */}
        <section className="w-full bg-gradient-to-b from-white to-green-50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-950">Giao diện trực quan</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Thiết kế hiện đại, dễ sử dụng và đầy đủ thông tin
                </p>
              </div>
            </div>
            <AppScreenshots />
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-950">Cách thức hoạt động</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ứng dụng SmartFarm kết nối liền mạch với hệ thống cảm biến và thiết bị tại nông trại
                </p>
              </div>
            </div>
            <div className="mx-auto mt-16 max-w-5xl">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="relative flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-900">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-green-950">Thu thập dữ liệu</h3>
                    <p className="mt-2 text-gray-600">
                      Hệ thống cảm biến IoT thu thập dữ liệu thời tiết, độ ẩm đất và các thông số canh tác khác.
                    </p>
                  </div>
                  <div className="absolute right-0 top-6 hidden h-0.5 w-full bg-green-200 md:block md:w-1/2"></div>
                </div>
                <div className="relative flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-900">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-green-950">Phân tích thông minh (Phát triển trong tương lai)</h3>
                    <p className="mt-2 text-gray-600">
                      Dữ liệu được xử lý bởi thuật toán AI để đưa ra các phân tích và đề xuất tối ưu.
                    </p>
                  </div>
                  <div className="absolute left-0 right-0 top-6 hidden h-0.5 w-1/2 bg-green-200 md:block"></div>
                </div>
                <div className="relative flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-900">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-green-950">Điều khiển từ xa</h3>
                    <p className="mt-2 text-gray-600">
                      Người dùng có thể theo dõi và điều khiển các thiết bị từ xa thông qua ứng dụng di động.
                    </p>
                  </div>
                  <div className="absolute left-0 top-6 hidden h-0.5 w-1/2 bg-green-200 md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {/* <section className="w-full bg-green-50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-950">
                  Người dùng nói gì về ứng dụng
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Trải nghiệm thực tế từ những người nông dân đã sử dụng ứng dụng SmartFarm
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {appTestimonials.map((testimonial, index) => (
                <div key={index} className="flex flex-col rounded-xl bg-white p-6 shadow-md">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg?height=48&width=48"}
                      width={48}
                      height={48}
                      alt={testimonial.name}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-medium text-green-950">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? "fill-current" : "fill-gray-200"}`}
                      />
                    ))}
                  </div>
                  <blockquote className="mt-3 flex-1 text-gray-600">"{testimonial.quote}"</blockquote>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Download Section */}
        <section id="download" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-950">
                    Tải ứng dụng ngay hôm nay
                  </h2>
                  <p className="text-gray-600 md:text-xl">
                    Ứng dụng SmartFarm có sẵn trên cả iOS và Android. Tải xuống miễn phí và bắt đầu tối ưu hóa nông trại
                    của bạn.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2 sm:flex-row">
                   
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-green-950">Yêu cầu hệ thống:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-600" />
                        <span>iOS 12.0 trở lên hoặc Android 8.0 trở lên</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-600" />
                        <span>Kết nối internet để đồng bộ dữ liệu</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-600" />
                        <span>Bluetooth 4.0 để kết nối với thiết bị cảm biến</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -left-4 -top-4 h-64 w-64 rounded-full bg-green-200 opacity-30 blur-3xl"></div>
                  <div className="relative">
                    <img
                        src="./appmobile.jpg"
                        width={250}
                      height={500}
                      alt="SmartFarm Mobile App"
                      className="rounded-[32px] shadow-xl"
                    />
                    <div className="absolute -right-16 -top-8 rounded-lg bg-white p-4 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-full bg-green-500"></div>
                        <div>
                          <div className="h-2 w-16 rounded-full bg-gray-200"></div>
                          <div className="mt-1 h-2 w-12 rounded-full bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-8 -left-16 rounded-lg bg-white p-4 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-full bg-blue-500"></div>
                        <div>
                          <div className="h-2 w-16 rounded-full bg-gray-200"></div>
                          <div className="mt-1 h-2 w-12 rounded-full bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full bg-gradient-to-b from-green-50 to-white py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-950">Câu hỏi thường gặp</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Giải đáp những thắc mắc phổ biến về ứng dụng SmartFarm
                </p>
              </div>
            </div>
            <div className="mx-auto mt-8 max-w-3xl space-y-4">
              {appFaqs.map((faq, index) => (
                <div key={index} className="rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-green-950">{faq.question}</h3>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-900 text-white">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Sẵn sàng nâng cao hiệu quả canh tác?
              </h2>
              <p className="max-w-[600px] text-green-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tải ứng dụng SmartFarm ngay hôm nay và trải nghiệm sự khác biệt
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-end">
              <Button size="lg" className="bg-white text-green-900 hover:bg-green-50">
                <Link href="#download">Tải ứng dụng</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white bg-black text-white hover:bg-green-800">
                <Link href="/contact">Liên hệ hỗ trợ</Link>
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
const appTestimonials = [
  {
    name: "Nguyễn Văn A",
    role: "Chủ Trang Trại, Đà Lạt",
    rating: 5,
    quote:
      "Ứng dụng SmartFarm đã thay đổi hoàn toàn cách tôi quản lý trang trại. Giờ đây tôi có thể theo dõi mọi thứ ngay trên điện thoại, kể cả khi đang đi công tác.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Trần Thị B",
    role: "Giám đốc Công ty Nông sản XYZ",
    rating: 4,
    quote:
      "Giao diện trực quan, dễ sử dụng. Tính năng cảnh báo sớm đã giúp chúng tôi phát hiện và xử lý kịp thời nhiều vấn đề tiềm ẩn.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Lê Văn C",
    role: "Chủ Hợp tác xã Nông nghiệp Tân Tiến",
    rating: 5,
    quote:
      "Khả năng phân tích dữ liệu và đưa ra đề xuất của ứng dụng thực sự ấn tượng. Đã giúp chúng tôi tiết kiệm 30% chi phí vận hành.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
]

const appFaqs = [
  {
    question: "Ứng dụng có hoạt động khi không có kết nối internet không?",
    answer:
      "Ứng dụng SmartFarm vẫn có thể hoạt động ở chế độ ngoại tuyến với các tính năng cơ bản. Tuy nhiên, để đồng bộ dữ liệu mới nhất và sử dụng đầy đủ các tính năng như điều khiển từ xa và nhận cảnh báo, bạn cần kết nối internet.",
  },
  {
    question: "Làm thế nào để kết nối ứng dụng với hệ thống cảm biến tại nông trại?",
    answer:
      "Sau khi cài đặt ứng dụng, bạn cần đăng nhập và thêm thiết bị mới trong phần 'Quản lý thiết bị'. Ứng dụng sẽ hướng dẫn bạn quét mã QR trên thiết bị hoặc kết nối qua Bluetooth để hoàn tất quá trình thiết lập.",
  },
  {
    question: "Ứng dụng có hỗ trợ nhiều người dùng quản lý cùng một nông trại không?",
    answer:
      "Có, SmartFarm hỗ trợ chế độ đa người dùng. Chủ tài khoản có thể mời thêm người dùng khác và phân quyền quản lý cho từng người. Điều này rất hữu ích cho các trang trại lớn có nhiều nhân viên phụ trách các khu vực khác nhau.",
  },
  {
    question: "Dữ liệu của tôi có được bảo mật không?",
    answer:
      "Chúng tôi áp dụng các biện pháp bảo mật cao nhất để bảo vệ dữ liệu của bạn. Tất cả dữ liệu được mã hóa khi truyền và lưu trữ. Chúng tôi không chia sẻ thông tin của bạn với bất kỳ bên thứ ba nào mà không có sự đồng ý của bạn.",
  },
]


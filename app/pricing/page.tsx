import Link from "next/link"
import { ArrowRight, Check, X, Leaf, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header  from "../../components/header"
import Footer from "@/components/footer"

export default function PricingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-16 md:py-24 lg:py-32">
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                <Leaf className="mr-1 h-4 w-4" />
                Bảng giá theo thiết bị
              </div>
              <h1 className="mt-3 text-3xl font-bold tracking-tighter text-green-950 sm:text-4xl md:text-5xl">
                Chọn thiết bị phù hợp cho nông trại của bạn
              </h1>
              <p className="mt-4 text-gray-600 md:text-xl">
                SmartFarm cung cấp đa dạng thiết bị thông minh giúp tối ưu năng suất và tiết kiệm chi phí
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Device Categories */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="sensors" className="mx-auto">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-xl grid-cols-3">
                  <TabsTrigger value="sensors">Cảm biến</TabsTrigger>
                  <TabsTrigger value="controllers">Bộ điều khiển</TabsTrigger>
                  <TabsTrigger value="packages">Bộ thiết bị</TabsTrigger>
                </TabsList>
              </div>

              {/* Sensors Tab */}
              <TabsContent value="sensors">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                  {sensors.map((device, index) => (
                    <DeviceCard key={index} device={device} />
                  ))}
                </div>
              </TabsContent>

              {/* Controllers Tab */}
              <TabsContent value="controllers">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                  {controllers.map((device, index) => (
                    <DeviceCard key={index} device={device} />
                  ))}
                </div>
              </TabsContent>

              {/* Packages Tab */}
              <TabsContent value="packages">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                  {packages.map((device, index) => (
                    <DeviceCard key={index} device={device} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Software Subscription */}
        <section className="w-full bg-gradient-to-b from-white to-green-50 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-10">
              <div className="inline-flex items-center rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                <Leaf className="mr-1 h-4 w-4" />
                Phần mềm quản lý
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tighter text-green-950 sm:text-4xl">
                Phần mềm điều khiển & giám sát
              </h2>
              <p className="mt-4 text-gray-600 md:text-lg">
                Kết nối tất cả thiết bị trong một nền tảng thông minh, dễ sử dụng
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {softwarePlans.map((plan, index) => (
                <Card key={index} className={`flex flex-col ${plan.highlighted ? "border-green-600 shadow-lg" : ""}`}>
                  {plan.highlighted && (
                    <div className="bg-green-600 py-2 text-center text-sm font-medium text-white">
                      Được lựa chọn nhiều nhất
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="mb-6 flex items-baseline">
                      <span className="text-3xl font-bold text-green-950">{plan.price}</span>
                      <span className="ml-1 text-gray-600">/tháng</span>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          {feature.included ? (
                            <Check className="h-5 w-5 shrink-0 text-green-600" />
                          ) : (
                            <X className="h-5 w-5 shrink-0 text-gray-400" />
                          )}
                          <span className={`text-sm ${feature.included ? "text-gray-600" : "text-gray-400"}`}>
                            {feature.text}
                            {feature.tooltip && (
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger className="ml-1">
                                    <HelpCircle className="h-3 w-3 text-gray-400" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="max-w-xs text-xs">{feature.tooltip}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={`w-full ${plan.highlighted ? "bg-green-600 hover:bg-green-700" : ""}`}
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      <Link href="/contact" className="w-full">
                        {plan.buttonText}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Solutions */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                <Leaf className="mr-1 h-4 w-4" />
                Giải pháp tùy chỉnh
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tighter text-green-950 sm:text-4xl">
                Cần giải pháp đặc thù cho nông trại của bạn?
              </h2>
              <p className="mt-4 text-gray-600 md:text-lg">
                Chúng tôi cung cấp tư vấn thiết kế và triển khai hệ thống tự động hóa hoàn chỉnh
              </p>
            </div>

            <div className="mt-12 rounded-xl border bg-white p-8 shadow-lg">
              <div className="grid gap-10 md:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold text-green-950">Giải pháp tùy chỉnh</h3>
                  <p className="text-gray-600">
                    Dành cho những nông trại có nhu cầu đặc biệt hoặc cần tích hợp với hệ thống hiện có.
                  </p>
                  <ul className="space-y-3">
                    {customSolutionFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Link href="/contact" className="inline-flex items-center">
                        Liên hệ tư vấn
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="rounded-lg bg-green-50 p-6">
                    <h4 className="text-lg font-semibold text-green-950">Khảo sát hiện trạng</h4>
                    <p className="mt-2 text-gray-600">
                      Chúng tôi sẽ tiến hành khảo sát nông trại và đề xuất giải pháp kỹ thuật phù hợp.
                    </p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-6">
                    <h4 className="text-lg font-semibold text-green-950">Thiết kế hệ thống</h4>
                    <p className="mt-2 text-gray-600">
                      Đội ngũ kỹ sư sẽ thiết kế hệ thống đáp ứng yêu cầu cụ thể của từng loại cây trồng.
                    </p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-6">
                    <h4 className="text-lg font-semibold text-green-950">Lắp đặt và bảo trì</h4>
                    <p className="mt-2 text-gray-600">
                      Triển khai lắp đặt chuyên nghiệp và cung cấp dịch vụ bảo trì định kỳ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full bg-gradient-to-b from-green-50 to-white py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                <Leaf className="mr-1 h-4 w-4" />
                Câu hỏi thường gặp
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tighter text-green-950 sm:text-4xl">
                Thông tin về thiết bị và thanh toán
              </h2>
              <p className="mt-4 text-gray-600 md:text-lg">
                Giải đáp những câu hỏi phổ biến về các thiết bị và phương thức thanh toán
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-4xl space-y-4">
              {deviceFaqs.map((faq, index) => (
                <div key={index} className="rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-green-950">{faq.question}</h3>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-green-900 py-12 text-white md:py-24">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Bắt đầu tối ưu hóa nông trại của bạn ngay hôm nay
              </h2>
              <p className="max-w-[600px] text-green-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Liên hệ với chúng tôi để được tư vấn và báo giá chi tiết
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-end">
              <Button size="lg" className="bg-white text-green-900 hover:bg-green-50">
                <Link href="/devices">Xem thiết bị</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white bg-dark text-white hover:bg-green-800">
                <Link href="/contact">Liên hệ tư vấn</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}

// Device Card Component
function DeviceCard({ device }: any) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="relative">
        <div className="aspect-[4/3] w-full bg-gray-100 flex items-center justify-center">
          <img
            src={device.image || "/placeholder.svg?height=300&width=400"}
            alt={device.name}
            className="object-cover w-full h-full"
          />
        </div>
        {device.tag && <Badge className="absolute top-2 right-2 bg-green-600">{device.tag}</Badge>}
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{device.name}</CardTitle>
        <CardDescription>{device.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex items-baseline mb-4">
          <span className="text-2xl font-bold text-green-950">{device.price}</span>
          {device.originalPrice && (
            <span className="ml-2 text-sm line-through text-gray-500">{device.originalPrice}</span>
          )}
        </div>
        <ul className="space-y-2 text-sm">
          {device.features.map((feature: any, index: any) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col w-full gap-2">
          <Button className="w-full bg-green-600 hover:bg-green-400">Mua ngay</Button>
          <Button variant="outline" className="w-full">
            Thêm vào giỏ hàng
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

// Data
const sensors = [
  {
    name: "Cảm biến nhiệt độ và độ ẩm đất",
    description: "Đo lường chính xác nhiệt độ và độ ẩm đất ở độ sâu 10-30cm",
    price: "1.000₫",
    tag: "Bán chạy",
    features: [
      "Độ chính xác cao ±0.5°C, ±2% RH",
    ],
    image: "/logo.webp",
  },
  {
    name: "Cảm biến độ ẩm không khí",
    description: "Theo dõi độ ẩm không khí trong nhà kính hoặc khu vực canh tác",
    price: "1.000₫",
    features: ["Độ chính xác ±2% RH", "Cảnh báo khi vượt ngưỡng"],
    image: "/logo.webp",
  },
  {
    name: "Cảm biến ánh sáng PAR",
    description: "Đo bức xạ quang hợp tác dụng (PAR) cho cây trồng",
    price: "1.000₫",
    features: [
      "Dải đo 0-2500 μmol m⁻² s⁻¹",
    ],
    image: "/logo.webp",
  },
  {
    name: "Cảm biến pH đất",
    description: "Đo độ pH của đất chính xác và nhanh chóng",
    price: "1.000₫",
    features: ["Dải đo 3.5-9.0 pH", "Độ chính xác ±0.1 pH", "Đầu dò bền chống ăn mòn", "Dễ dàng hiệu chuẩn"],
    image: "/logo.webp",
  },
  {
    name: "Cảm biến mực nước",
    description: "Theo dõi mực nước trong bể chứa và hệ thống tưới tiêu",
    price: "1.000₫",
    features: ["Đo chính xác ±1mm", "Chống nước hoàn toàn IP68", "Cảnh báo khi mực nước thấp", "Dễ dàng lắp đặt"],
    image: "/logo.webp",
  },
  {
    name: "Cảm biến CO₂",
    description: "Đo nồng độ CO₂ trong nhà kính và khu vực trồng trọt",
    price: "1.000₫",
    originalPrice: "1.000₫",
    tag: "Giảm giá",
    features: ["Dải đo 0-5000ppm", "Tự hiệu chuẩn", "Độ chính xác cao"],
    image: "/logo.webp",
  },
]

const controllers = [
  {
    name: "Bộ điều khiển tưới thông minh",
    description: "Điều khiển hệ thống tưới tự động theo lịch hoặc cảm biến",
    price: "2.000₫",
    tag: "Mới",
    features: [
      "Điều khiển 4 khu vực độc lập",
      "Lập lịch tưới thông minh",
      "Tích hợp cảm biến mưa",
      "Điều khiển qua điện thoại",
    ],
    image: "/logo.webp",
  },
  {
    name: "Bộ điều khiển hệ thống bơm nước",
    description: "Quản lý bơm nước tự động theo nhu cầu và mực nước",
    price: "1.000₫",
    features: ["Bảo vệ bơm chạy khô", "Điều khiển từ xa qua app", "Tích hợp cảm biến mực nước", "Lập lịch hoạt động"],
    image: "/logo.webp",
  },
  {
    name: "Bộ điều khiển nhiệt độ và độ ẩm nhà kính",
    description: "Quản lý môi trường trong nhà kính tự động duy trì điều kiện tối ưu",
    price: "1.000₫",
    features: [
      "Điều khiển nhiệt độ chính xác ±0.5°C",
      "Quản lý quạt thông gió tự động",
      "Điều khiển hệ thống phun sương",
      "Cài đặt lịch trình theo mùa vụ",
    ],
    image: "/logo.webp",
  },
  {
    name: "Bộ điều khiển ánh sáng nhân tạo",
    description: "Quản lý hệ thống chiếu sáng bổ sung cho cây trồng",
    price: "1.000₫",
    features: [
      "Điều chỉnh cường độ ánh sáng",
      "Lập lịch đèn tự động",
      "Tích hợp cảm biến ánh sáng",
      "Tiết kiệm năng lượng",
    ],
    image: "/logo.webp",
  },
  {
    name: "Bộ điều khiển phân bón tự động",
    description: "Tự động pha trộn và cung cấp phân bón theo nhu cầu",
    price: "1.000₫",
    features: [
      "Bơm định lượng chính xác",
      "Lập trình công thức phân bón",
      "Tương thích nhiều loại phân bón",
      "Kết nối với hệ thống tưới",
    ],
    image: "/logo.webp",
  },
  {
    name: "Bộ điều khiển trung tâm Gateway",
    description: "Kết nối và quản lý tất cả thiết bị trong một hệ thống",
    price: "1.000₫",
    tag: "Thiết yếu",
    features: [
      "Kết nối lên đến 100 thiết bị",
      "Tầm xa lên đến 2km",
      "Lưu trữ dữ liệu 30 ngày",
      "Kết nối WiFi/4G/Ethernet",
    ],
    image: "/logo.webp",

  },
]

const packages = [
  {
    name: "Bộ khởi đầu nông trại thông minh",
    description: "Bộ thiết bị cơ bản cho việc bắt đầu quản lý nông trại thông minh",
    price: "1.000₫",
    tag: "Dành cho người mới",
    features: [
      "1 Gateway điều khiển trung tâm",
      "2 Cảm biến nhiệt độ và độ ẩm đất",
      "1 Cảm biến độ ẩm không khí",
      "1 Bộ điều khiển tưới 2 kênh",
    ],
    image: "/logo.webp",
  },
  {
    name: "Bộ quản lý nhà kính thông minh",
    description: "Giải pháp toàn diện để quản lý môi trường trong nhà kính",
    price: "1.000₫",
    tag: "Bán chạy",
    features: [
      "1 Gateway điều khiển trung tâm",
      "4 Cảm biến nhiệt độ và độ ẩm đất",
      "2 Cảm biến độ ẩm không khí",
      "1 Bộ điều khiển nhiệt độ và độ ẩm",
      "1 Bộ điều khiển tưới 4 kênh",
    ],
    image: "/logo.webp",
  },
  {
    name: "Bộ quản lý trang trại chuyên nghiệp",
    description: "Giải pháp đầy đủ cho trang trại quy mô lớn",
    price: "1.000₫",
    features: [
      "1 Gateway điều khiển trung tâm cao cấp",
      "10 Cảm biến nhiệt độ và độ ẩm đất",
      "4 Cảm biến độ ẩm không khí",
      "2 Cảm biến pH đất",
      "2 Bộ điều khiển tưới 4 kênh",
      "1 Bộ điều khiển phân bón tự động",
    ],
    image: "/logo.webp",
  },
]

const softwarePlans = [
  {
    name: "Cơ bản",
    price: "1.000 ₫",
    description: "Dành cho nông trại quy mô nhỏ",
    buttonText: "Chọn gói Cơ bản",
    highlighted: false,
    features: [
      {
        text: "Tối đa 5 thiết bị",
        included: true,
      },
      {
        text: "Giám sát thời gian thực",
        included: true,
      },
      {
        text: "Điều khiển thiết bị từ xa",
        included: true,
      },
      {
        text: "Cảnh báo qua ứng dụng",
        included: true,
      },
      {
        text: "Dữ liệu lưu trữ 3 tháng",
        included: true,
        tooltip: "Dữ liệu lịch sử được lưu trữ trong 3 tháng, sau đó sẽ được tổng hợp thành báo cáo.",
      },
      {
        text: "Phân tích dữ liệu nâng cao",
        included: false,
      },
      {
        text: "Tích hợp dự báo thời tiết",
        included: false,
      },
    ],
  },
  {
    name: "Nâng cao",
    price: "1.000 ₫",
    description: "Dành cho nông trại quy mô vừa",
    buttonText: "Chọn gói Nâng cao",
    highlighted: true,
    features: [
      {
        text: "Tối đa 25 thiết bị",
        included: true,
      },
      {
        text: "Giám sát thời gian thực",
        included: true,
      },
      {
        text: "Điều khiển thiết bị từ xa",
        included: true,
      },
      {
        text: "Cảnh báo qua ứng dụng & SMS",
        included: true,
      },
      {
        text: "Dữ liệu lưu trữ 12 tháng",
        included: true,
      },
      {
        text: "Phân tích dữ liệu nâng cao",
        included: true,
      },
      {
        text: "Tích hợp dự báo thời tiết",
        included: true,
      },
    ],
  },
  {
    name: "Chuyên nghiệp",
    price: "1.299.000 ₫",
    description: "Dành cho nông trại quy mô lớn",
    buttonText: "Chọn gói Chuyên nghiệp",
    highlighted: false,
    features: [
      {
        text: "Không giới hạn thiết bị",
        included: true,
      },
      {
        text: "Giám sát thời gian thực",
        included: true,
      },
      {
        text: "Điều khiển toàn diện",
        included: true,
        tooltip: "Điều khiển tất cả các thiết bị: hệ thống tưới, đèn chiếu sáng, quạt thông gió, nhiệt độ, ...",
      },
      {
        text: "Cảnh báo đa kênh",
        included: true,
      },
      {
        text: "Dữ liệu lưu trữ không giới hạn",
        included: true,
      },
      {
        text: "Phân tích dữ liệu AI",
        included: true,
      },
      {
        text: "API tích hợp hệ thống",
        included: true,
      },
    ],
  },
]

const customSolutionFeatures = [
  "Thiết kế hệ thống đặc thù theo nhu cầu của từng nông trại",
  "Tích hợp với thiết bị và hệ thống hiện có",
  "Hỗ trợ lắp đặt và vận hành chuyên nghiệp",
  "Đào tạo nhân viên sử dụng hệ thống",
  "Bảo trì định kỳ và hỗ trợ kỹ thuật 24/7",
  "Nâng cấp và mở rộng hệ thống khi cần thiết",
]

const deviceFaqs = [
  {
    question: "Các thiết bị có dễ lắp đặt không và có cần kỹ thuật viên hỗ trợ?",
    answer:
      "Các thiết bị của chúng tôi được thiết kế với tính đơn giản, dễ sử dụng. Nhiều thiết bị như cảm biến độ ẩm, nhiệt độ có thể tự lắp đặt theo hướng dẫn chi tiết. Tuy nhiên, đối với hệ thống phức tạp như bộ điều khiển tưới hay nhà kính, chúng tôi khuyến nghị sử dụng dịch vụ lắp đặt chuyên nghiệp của đội ngũ kỹ thuật.",
  },
  {
    question: "Thiết bị có hoạt động khi không có kết nối internet không?",
    answer:
      "Có, tất cả thiết bị của chúng tôi đều có khả năng hoạt động offline theo cài đặt được lập trình sẵn. Tuy nhiên, để sử dụng đầy đủ tính năng như giám sát từ xa, cảnh báo và cập nhật dữ liệu, bạn cần kết nối internet. Thiết bị Gateway trung tâm có bộ nhớ đệm để lưu trữ dữ liệu khi mất kết nối và sẽ đồng bộ khi có internet trở lại.",
  },
  {
    question: "Các thiết bị có tuổi thọ và bảo hành như thế nào?",
    answer:
      "Các thiết bị của chúng tôi được thiết kế để hoạt động trong điều kiện nông nghiệp khắc nghiệt với tuổi thọ trung bình 3-5 năm. Tất cả thiết bị đều được bảo hành 12 tháng cho các lỗi sản xuất. Ngoài ra, chúng tôi cung cấp gói bảo trì và bảo dưỡng định kỳ để kéo dài tuổi thọ thiết bị.",
  },
  {
    question: "Tôi có thể mua riêng từng thiết bị hay phải mua cả bộ?",
    answer:
      "Bạn hoàn toàn có thể mua riêng từng thiết bị theo nhu cầu cụ thể. Tuy nhiên, để hệ thống hoạt động hiệu quả, bạn cần có ít nhất một Gateway trung tâm để kết nối và quản lý các thiết bị khác. Chúng tôi cũng cung cấp các bộ thiết bị đã được tối ưu hóa cho các nhu cầu phổ biến với giá ưu đãi hơn so với mua lẻ.",
  },
  {
    question: "Làm thế nào để tôi biết thiết bị nào phù hợp với nhu cầu của mình?",
    answer:
      "Chúng tôi cung cấp dịch vụ tư vấn miễn phí để giúp bạn lựa chọn thiết bị phù hợp nhất với nông trại của mình. Bạn có thể liên hệ qua form tư vấn trên website hoặc gọi trực tiếp cho đội ngũ chăm sóc khách hàng. Chúng tôi sẽ phân tích nhu cầu cụ thể và đề xuất giải pháp tối ưu cả về hiệu quả và chi phí.",
  },
  {
    question: "Phần mềm quản lý có tương thích với mọi thiết bị không?",
    answer:
      "Phần mềm quản lý của chúng tôi được thiết kế để tương thích với tất cả các thiết bị trong hệ sinh thái SmartFarm. Ngoài ra, chúng tôi cũng hỗ trợ tích hợp với một số thiết bị của bên thứ ba thông qua các giao thức tiêu chuẩn như MQTT, HTTP API. Đối với khách hàng doanh nghiệp, chúng tôi cung cấp dịch vụ tích hợp đặc biệt với các hệ thống hiện có.",
  },
]


import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Leaf, BarChart2, Droplets, CloudRain, ThermometerSun, Database, Smartphone, Bell, Map } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function FeaturesPage() {
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
                Tính năng nổi bật
              </div>
              <h1 className="mt-3 text-3xl font-bold tracking-tighter text-green-950 sm:text-4xl md:text-5xl">
                Khám phá sức mạnh của nền tảng Smart Farming
              </h1>
              <p className="mt-4 text-gray-600 md:text-xl">
                Bộ tính năng toàn diện giúp bạn tối ưu hóa mọi khía cạnh trong quản lý nông trại
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Main Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-md bg-green-100 px-3 py-1 text-sm text-green-800">
                    <Leaf className="mr-1 h-4 w-4" />
                    Tính năng quản lý
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter text-green-950 md:text-4xl">
                    Kiểm soát toàn diện
                  </h2>
                  <p className="text-gray-600 md:text-lg">
                    Nắm bắt thông tin chi tiết từ mọi góc độ của nông trại, từ thời tiết đến tình trạng cây trồng và thiết bị
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  {coreFeatures.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-green-950">{feature.title}</h3>
                        <p className="mt-1 text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex items-center justify-center rounded-xl border bg-white p-10 shadow-lg">
                <div className="absolute -left-12 -top-12 h-64 w-64 rounded-full bg-green-200 opacity-20 blur-3xl"></div>
                <Image 
                  src="/placeholder.svg?height=400&width=500" 
                  alt="Dashboard interface"
                  width={500}
                  height={400}
                  className="relative z-10 rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="w-full bg-gradient-to-b from-white to-green-50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-md bg-green-100 px-3 py-1 text-sm text-green-800">
                <Database className="mr-1 h-4 w-4" />
                Chi tiết tính năng
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tighter text-green-950 md:text-4xl">
                Khám phá chuyên sâu
              </h2>
              <p className="mt-4 text-gray-600 md:text-lg">
                Mọi tính năng được thiết kế để tối ưu hóa hiệu quả và dễ dàng sử dụng
              </p>
            </div>

            <div className="mt-12">
              <Tabs defaultValue="monitoring" className="w-full">
                <div className="flex justify-center">
                  <TabsList className="inline-flex h-auto flex-wrap justify-center gap-2 bg-transparent p-0">
                    {tabItems.map((tab) => (
                      <TabsTrigger 
                        key={tab.value} 
                        value={tab.value}
                        className="data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-full border bg-white px-4 py-2"
                      >
                        <div className="flex items-center gap-2">
                          {tab.icon}
                          <span>{tab.label}</span>
                        </div>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                
                {tabItems.map((tab) => (
                  <TabsContent key={tab.value} value={tab.value} className="mt-8 border-none p-0">
                    <div className="grid gap-8 md:grid-cols-2">
                      <div className="flex flex-col justify-center space-y-4">
                        <h3 className="text-2xl font-bold text-green-950">{tab.title}</h3>
                        <p className="text-gray-600">{tab.description}</p>
                        <ul className="space-y-3">
                          {tab.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="pt-4">
                          <Button className="bg-green-600 hover:bg-green-700">
                            <Link href="/demo" className="inline-flex items-center">
                              Trải nghiệm demo
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="relative">
                          <div className="absolute -left-4 -top-4 h-64 w-64 rounded-full bg-green-200 opacity-30 blur-3xl"></div>
                          <Image 
                            src={`/placeholder.svg?height=400&width=500&text=${tab.label}`} 
                            alt={tab.title}
                            width={500}
                            height={400}
                            className="relative z-10 rounded-lg shadow-xl"
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Integration Features */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-md bg-green-100 px-3 py-1 text-sm text-green-800">
                <Database className="mr-1 h-4 w-4" />
                Tích hợp
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tighter text-green-950 md:text-4xl">
                Kết nối với mọi hệ thống
              </h2>
              <p className="mt-4 text-gray-600 md:text-lg">
                SmartFarm tích hợp liền mạch với nhiều thiết bị, cảm biến và phần mềm khác
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {integrations.map((integration, index) => (
                <div key={index} className="rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-700">
                    {integration.icon}
                  </div>
                  <h3 className="text-xl font-bold text-green-950">{integration.title}</h3>
                  <p className="mt-2 text-gray-600">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="w-full bg-gradient-to-b from-green-50 to-white py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-md bg-green-100 px-3 py-1 text-sm text-green-800">
                <BarChart2 className="mr-1 h-4 w-4" />
                So sánh tính năng
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tighter text-green-950 md:text-4xl">
                So sánh các gói tính năng
              </h2>
              <p className="mt-4 text-gray-600 md:text-lg">
                Chọn gói phù hợp với nhu cầu và quy mô nông trại của bạn
              </p>
            </div>

            <div className="mt-12 overflow-auto">
              <table className="w-full min-w-[640px] border-collapse">
                <thead>
                  <tr>
                    <th className="bg-green-50 p-4 text-left font-medium text-green-950">Tính năng</th>
                    <th className="bg-green-50 p-4 text-center font-medium text-green-950">Cơ bản</th>
                    <th className="bg-green-50 p-4 text-center font-medium text-green-950">Nâng cao</th>
                    <th className="bg-green-50 p-4 text-center font-medium text-green-950">Chuyên nghiệp</th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((feature, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="p-4 font-medium text-green-950">{feature.name}</td>
                      <td className="p-4 text-center">
                        {feature.basic ? (
                          <CheckCircle className="mx-auto h-5 w-5 text-green-600" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {feature.advanced ? (
                          <CheckCircle className="mx-auto h-5 w-5 text-green-600" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {feature.professional ? (
                          <CheckCircle className="mx-auto h-5 w-5 text-green-600" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-green-600 hover:bg-green-700">
                <Link href="/pricing" className="inline-flex items-center">
                  Xem chi tiết bảng giá
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-green-900 py-12 text-white md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Sẵn sàng nâng cao hiệu quả nông trại của bạn?
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
const coreFeatures = [
  {
    title: "Giám sát thời gian thực",
    description: "Theo dõi các thông số môi trường và tình trạng cây trồng theo thời gian thực 24/7.",
    icon: <BarChart2 className="h-5 w-5" />,
  },
  {
    title: "Hệ thống tưới tự động",
    description: "Tự động hóa hệ thống tưới dựa trên dữ liệu độ ẩm đất và thời tiết.",
    icon: <Droplets className="h-5 w-5" />,
  },
  {
    title: "Cảnh báo thông minh",
    description: "Nhận thông báo kịp thời về các vấn đề tiềm ẩn cần xử lý.",
    icon: <Bell className="h-5 w-5" />,
  },
  {
    title: "Phân tích dữ liệu",
    description: "Phân tích và trực quan hóa dữ liệu canh tác để đưa ra quyết định tốt hơn.",
    icon: <Database className="h-5 w-5" />,
  },
]

const tabItems = [
  {
    value: "monitoring",
    label: "Giám sát",
    icon: <BarChart2 className="h-4 w-4" />,
    title: "Giám sát thời gian thực",
    description: "Theo dõi các thông số quan trọng của nông trại bao gồm nhiệt độ, độ ẩm, ánh sáng và nhiều yếu tố khác theo thời gian thực.",
    features: [
      "Dữ liệu thời tiết (nhiệt độ, độ ẩm, lượng mưa)",
      "Độ ẩm đất theo từng khu vực canh tác",
      "Cường độ và thời gian chiếu sáng",
      "Chất lượng không khí và nồng độ CO2",
      "Theo dõi chỉ số sức khỏe cây trồng",
    ],
  },
  {
    value: "irrigation",
    label: "Tưới tiêu",
    icon: <Droplets className="h-4 w-4" />,
    title: "Hệ thống tưới thông minh",
    description: "Điều khiển hệ thống tưới tự động dựa trên dữ liệu từ cảm biến độ ẩm đất và dự báo thời tiết.",
    features: [
      "Lập lịch tưới tự động theo từng khu vực",
      "Điều chỉnh lượng nước dựa trên nhu cầu thực tế",
      "Tiết kiệm đến 40% lượng nước sử dụng",
      "Cài đặt ngưỡng độ ẩm tối ưu cho từng loại cây",
      "Quản lý nhiều khu vực tưới độc lập",
    ],
  },
  {
    value: "weather",
    label: "Thời tiết",
    icon: <CloudRain className="h-4 w-4" />,
    title: "Dự báo thời tiết chi tiết",
    description: "Cung cấp dữ liệu thời tiết chính xác và dự báo cho khu vực nông trại, giúp lập kế hoạch canh tác hiệu quả.",
    features: [
      "Dự báo thời tiết 7 ngày chi tiết",
      "Cảnh báo sớm về điều kiện thời tiết cực đoan",
      "Lịch sử dữ liệu thời tiết để phân tích xu hướng",
      "Dữ liệu vi khí hậu đặc thù cho từng khu vực",
      "Tích hợp với lịch canh tác để tối ưu hoạt động",
    ],
  },
  {
    value: "analytics",
    label: "Phân tích",
    icon: <BarChart2 className="h-4 w-4" />,
    title: "Phân tích dữ liệu nâng cao",
    description: "Tổng hợp và phân tích dữ liệu canh tác để đưa ra các đề xuất tối ưu hóa và dự báo xu hướng.",
    features: [
      "Báo cáo và biểu đồ trực quan về năng suất",
      "So sánh hiệu suất giữa các khu vực canh tác",
      "Dự đoán sản lượng dựa trên mô hình AI",
      "Phân tích chi phí và lợi nhuận",
      "Đề xuất cải thiện quy trình dựa trên dữ liệu",
    ],
  },
  {
    value: "control",
    label: "Điều khiển",
    icon: <Smartphone className="h-4 w-4" />,
    title: "Điều khiển từ xa",
    description: "Quản lý và điều khiển các thiết bị trên nông trại từ xa thông qua ứng dụng di động hoặc máy tính.",
    features: [
      "Bật/tắt thiết bị từ xa (hệ thống tưới, đèn, quạt)",
      "Điều chỉnh các thông số như nhiệt độ, độ ẩm",
      "Đặt lịch tự động cho các thiết bị",
      "Kiểm soát nhiều nông trại từ một giao diện",
      "Phân quyền cho nhiều người dùng khác nhau",
    ],
  },
]

const integrations = [
  {
    title: "Cảm biến IoT",
    description: "Tích hợp với nhiều loại cảm biến IoT để thu thập dữ liệu từ môi trường canh tác.",
    icon: <Database className="h-6 w-6" />,
  },
  {
    title: "Dịch vụ thời tiết",
    description: "Kết nối với các API dự báo thời tiết để cung cấp thông tin chính xác.",
    icon: <CloudRain className="h-6 w-6" />,
  },
  {
    title: "Hệ thống tưới",
    description: "Tương thích với nhiều loại hệ thống tưới tự động phổ biến trên thị trường.",
    icon: <Droplets className="h-6 w-6" />,
  },
  {
    title: "Phần mềm quản lý nông trại",
    description: "Tích hợp với các phần mềm quản lý nông trại khác để đồng bộ hóa dữ liệu.",
    icon: <BarChart2 className="h-6 w-6" />,
  },
  {
    title: "GIS & Bản đồ",
    description: "Kết nối với các hệ thống thông tin địa lý để tạo bản đồ chi tiết nông trại.",
    icon: <Map className="h-6 w-6" />,
  },
  {
    title: "Công cụ kế toán",
    description: "Tích hợp với phần mềm kế toán để theo dõi chi phí và doanh thu.",
    icon: <Database className="h-6 w-6" />,
  },
]

const featureComparison = [
  { name: "Giám sát cơ bản (nhiệt độ, độ ẩm)", basic: true, advanced: true, professional: true },
  { name: "Hệ thống tưới tự động", basic: true, advanced: true, professional: true },
  { name: "Điều khiển từ xa qua ứng dụng", basic: true, advanced: true, professional: true },
  { name: "Cảnh báo thông minh", basic: false, advanced: true, professional: true },
  { name: "Phân tích dữ liệu nâng cao", basic: false, advanced: true, professional: true },
  { name: "Dự báo năng suất bằng AI", basic: false, advanced: false, professional: true },
  { name: "Truy xuất nguồn gốc", basic: false, advanced: false, professional: true },
  { name: "Hỗ trợ kỹ thuật 24/7", basic: false, advanced: false, professional: true },
]

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Leaf, CloudRain, Droplets, SunMedium, Factory, Fish, Tractor, BarChart2, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SolutionsPage() {
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
                Giải pháp chuyên biệt
              </div>
              <h1 className="mt-3 text-3xl font-bold tracking-tighter text-green-950 sm:text-4xl md:text-5xl">
                Giải pháp Smart Farming cho mọi loại hình canh tác
              </h1>
              <p className="mt-4 text-gray-600 md:text-xl">
                Các giải pháp được thiết kế riêng phù hợp với từng loại hình nông nghiệp, quy mô và nhu cầu cụ thể
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Solutions Categories */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-md bg-green-100 px-3 py-1 text-sm text-green-800">
                <Leaf className="mr-1 h-4 w-4" />
                Danh mục giải pháp
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tighter text-green-950 md:text-4xl">
                Khám phá các giải pháp theo loại hình canh tác
              </h2>
              <p className="mt-4 text-gray-600 md:text-lg">
                Chúng tôi cung cấp các giải pháp chuyên biệt phù hợp với từng loại hình nông nghiệp
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {solutionCategories.map((category, index) => (
                <Link
                  key={index}
                  href={`#${category.id}`}
                  className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                >
                  <div className="aspect-[16/9] w-full overflow-hidden">
                    <div className="h-full w-full bg-green-100 flex items-center justify-center">
                      {category.icon}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-green-950">{category.title}</h3>
                    <p className="mt-2 text-gray-600">{category.description}</p>
                    <div className="mt-4 flex items-center text-green-600 group-hover:text-green-700">
                      <span className="font-medium">Tìm hiểu thêm</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Solutions */}
        <section id="smart-greenhouse" className="w-full bg-gradient-to-b from-white to-green-50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-md bg-green-100 px-3 py-1 text-sm text-green-800">
                <Leaf className="mr-1 h-4 w-4" />
                Nhà kính thông minh
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tighter text-green-950 md:text-4xl">
                Nhà kính thông minh
              </h2>
              <p className="mt-4 text-gray-600 md:text-lg">
                Giải pháp toàn diện để tối ưu hóa sản xuất trong nhà kính với kiểm soát môi trường chính xác
              </p>
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-2">
              <div className="relative flex items-center justify-center">
                <div className="absolute -left-4 -top-4 h-64 w-64 rounded-full bg-green-200 opacity-30 blur-3xl"></div>
                <Image 
                  src="/placeholder.svg?height=500&width=600&text=Smart Greenhouse" 
                  alt="Nhà kính thông minh"
                  width={600}
                  height={500}
                  className="relative z-10 rounded-lg shadow-xl"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-green-950">Kiểm soát môi trường toàn diện</h3>
                  <p className="text-gray-600">
                    Kiểm soát tự động nhiệt độ, độ ẩm, ánh sáng và CO2 để tạo môi trường tối ưu cho cây trồng phát triển, tăng năng suất và chất lượng.
                  </p>
                </div>

                <div className="space-y-4">
                  {greenhouseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                      <div>
                        <h4 className="font-semibold text-green-950">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Link href="/contact" className="inline-flex items-center">
                      Liên hệ tư vấn
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Field Solution */}
        <section id="precision-farming" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-md bg-green-100 px-3 py-1 text-sm text-green-800">
                <Tractor className="mr-1 h-4 w-4" />
                Canh tác chính xác
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tighter text-green-950 md:text-4xl">
                Giải pháp canh tác chính xác
              </h2>
              <p className="mt-4 text-gray-600 md:text-lg">
                Tối ưu hóa năng suất đồng ruộng với công nghệ canh tác chính xác
              </p>
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-green-950">Quản lý đồng ruộng thông minh</h3>
                  <p className="text-gray-600">
                    Áp dụng công nghệ canh tác chính xác để tối ưu hóa việc sử dụng tài nguyên, giảm chi phí đầu vào và tăng năng suất.
                  </p>
                </div>

                <div className="space-y-4">
                  {fieldFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                      <div>
                        <h4 className="font-semibold text-green-950">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Link href="/contact" className="inline-flex items-center">
                      Liên hệ tư vấn
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute -right-4 -top-4 h-64 w-64 rounded-full bg-green-200 opacity-30 blur-3xl"></div>
                <Image 
                  src="/placeholder.svg?height=500&width=600&text=Precision Farming" 
                  alt="Canh tác chính xác"
                  width={600}
                  height={500}
                  className="relative z-10 rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Other Solutions */}
        <section className="w-full bg-gradient-to-b from-green-50 to-white py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-md bg-green-100 px-3 py-1 text-sm text-green-800">
                <Leaf className="mr-1 h-4 w-4" />
                Giải pháp khác
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tighter text-green-950 md:text-4xl">
                Khám phá thêm các giải pháp chuyên biệt
              </h2>
              <p className="mt-4 text-gray-600 md:text-lg">
                SmartFarm cung cấp nhiều giải pháp đáp ứng nhu cầu đa dạng của ngành nông nghiệp
              </p>
            </div>

            <div className="mt-12">
              <Tabs defaultValue="livestock" className="w-full">
                <div className="flex justify-center">
                  <TabsList className="inline-flex h-auto flex-wrap justify-center gap-2 bg-transparent p-0">
                    {otherSolutions.map((solution) => (
                      <TabsTrigger 
                        key={solution.value} 
                        value={solution.value}
                        className="data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-full border bg-white px-4 py-2"
                      >
                        <div className="flex items-center gap-2">
                          {solution.icon}
                          <span>{solution.label}</span>
                        </div>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                
                {otherSolutions.map((solution) => (
                  <TabsContent key={solution.value} value={solution.value} className="mt-8 border-none p-0">
                    <div className="grid gap-8 md:grid-cols-2">
                      <div className="flex items-center justify-center">
                        <div className="relative">
                          <div className="absolute -left-4 -top-4 h-64 w-64 rounded-full bg-green-200 opacity-30 blur-3xl"></div>
                          <Image 
                            src={`/placeholder.svg?height=400&width=500&text=${solution.label}`} 
                            alt={solution.title}
                            width={500}
                            height={400}
                            className="relative z-10 rounded-lg shadow-xl"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col justify-center space-y-4">
                        <h3 className="text-2xl font-bold text-green-950">{solution.title}</h3>
                        <p className="text-gray-600">{solution.description}</p>
                        <ul className="space-y-3">
                          {solution.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="pt-4">
                          <Button className="bg-green-600 hover:bg-green-700">
                            <Link href="/contact" className="inline-flex items-center">
                              Tìm hiểu thêm
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-md bg-green-100 px-3 py-1 text-sm text-green-800">
                <BarChart2 className="mr-1 h-4 w-4" />
                Nghiên cứu điển hình
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tighter text-green-950 md:text-4xl">
                Khách hàng thành công
              </h2>
              <p className="mt-4 text-gray-600 md:text-lg">
                Tìm hiểu cách khách hàng của chúng tôi đã thành công với giải pháp SmartFarm
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((caseStudy, index) => (
                <div key={index} className="rounded-lg border bg-white shadow-sm overflow-hidden">
                  <div className="aspect-[16/9] w-full overflow-hidden bg-green-100">
                    <Image 
                      src={`/placeholder.svg?height=300&width=500&text=${caseStudy.title}`} 
                      alt={caseStudy.title}
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
                      {caseStudy.category}
                    </div>
                    <h3 className="text-xl font-bold text-green-950">{caseStudy.title}</h3>
                    <p className="mt-2 text-gray-600">{caseStudy.description}</p>
                    <p className="mt-4 font-semibold text-green-950">Kết quả:</p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                      {caseStudy.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-1">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="link" className="mt-4 p-0 text-green-600 hover:text-green-700">
                      <Link href="#" className="inline-flex items-center">
                        Đọc chi tiết
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-green-900 py-12 text-white md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Tìm giải pháp phù hợp với nông trại của bạn
                </h2>
                <p className="text-green-100 md:text-xl">
                  Chuyên gia của chúng tôi sẽ phân tích nhu cầu và đề xuất giải pháp tối ưu cho nông trại của bạn
                </p>
              </div>
              <div className="flex flex-col gap-4 lg:items-end lg:justify-center">
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button size="lg" className="bg-white text-green-900 hover:bg-green-50">
                    <Link href="/contact">Liên hệ tư vấn</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-green-800">
                    <Link href="/demo">Dùng thử miễn phí</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

// Data
const solutionCategories = [
  {
    id: "smart-greenhouse",
    title: "Nhà kính thông minh",
    description: "Giải pháp toàn diện cho nhà kính với kiểm soát môi trường tự động và tối ưu hóa năng suất.",
    icon: <SunMedium className="h-24 w-24 text-green-600" />,
  },
  {
    id: "precision-farming",
    title: "Canh tác chính xác",
    description: "Quản lý đồng ruộng thông minh với bản đồ biến thiên, tưới tiêu chính xác và giám sát từ xa.",
    icon: <Tractor className="h-24 w-24 text-green-600" />,
  },
  {
    id: "livestock",
    title: "Chăn nuôi thông minh",
    description: "Theo dõi sức khỏe vật nuôi, quản lý thức ăn và tối ưu hóa quy trình chăn nuôi.",
    icon: <Factory className="h-24 w-24 text-green-600" />,
  },
  {
    id: "aquaculture",
    title: "Thủy sản thông minh",
    description: "Giám sát và điều khiển chất lượng nước, cho ăn tự động và theo dõi sức khỏe thủy sản.",
    icon: <Fish className="h-24 w-24 text-green-600" />,
  },
  {
    id: "orchard",
    title: "Vườn cây ăn quả",
    description: "Quản lý hiệu quả vườn cây ăn quả với tưới nhỏ giọt thông minh và phòng trừ sâu bệnh.",
    icon: <Leaf className="h-24 w-24 text-green-600" />,
  },
  {
    id: "traceability",
    title: "Truy xuất nguồn gốc",
    description: "Hệ thống truy xuất nguồn gốc sản phẩm từ nông trại đến bàn ăn giúp xây dựng niềm tin với người tiêu dùng.",
    icon: <BarChart2 className="h-24 w-24 text-green-600" />,
  },
]

const greenhouseFeatures = [
  {
    title: "Kiểm soát nhiệt độ và độ ẩm",
    description: "Hệ thống cảm biến và điều khiển tự động duy trì nhiệt độ và độ ẩm ở mức tối ưu cho từng giai đoạn phát triển của cây."
  },
  {
    title: "Điều khiển ánh sáng",
    description: "Tối ưu hóa cường độ ánh sáng và thời gian chiếu sáng với đèn LED tích hợp và rèm tự động."
  },
  {
    title: "Tưới nhỏ giọt thông minh",
    description: "Hệ thống tưới nhỏ giọt tự động dựa trên độ ẩm đất thực tế, giúp tiết kiệm nước và cung cấp đủ nước cho cây."
  },
  {
    title: "Quản lý dinh dưỡng",
    description: "Cung cấp dinh dưỡng tối ưu thông qua hệ thống thủy canh hoặc tưới phân tích hợp, đảm bảo cây trồng nhận đủ dưỡng chất."
  },
  {
    title: "Kiểm soát CO2",
    description: "Duy trì nồng độ CO2 tối ưu để thúc đẩy quá trình quang hợp và tăng năng suất cây trồng."
  },
]

const fieldFeatures = [
  {
    title: "Bản đồ biến thiên",
    description: "Tạo bản đồ chi tiết về độ màu mỡ của đất, độ ẩm và các yếu tố khác để áp dụng canh tác chính xác."
  },
  {
    title: "Tưới biến thiên",
    description: "Hệ thống tưới thông minh điều chỉnh lượng nước dựa trên nhu cầu thực tế của từng khu vực đồng ruộng."
  },
  {
    title: "Giám sát từ xa",
    description: "Theo dõi tình trạng đồng ruộng từ xa với hệ thống cảm biến và camera giám sát."
  },
  {
    title: "Quản lý dịch hại",
    description: "Phát hiện sớm dịch hại và áp dụng biện pháp phòng trừ chính xác, giảm thiểu sử dụng thuốc bảo vệ thực vật."
  },
  {
    title: "Dự báo năng suất",
    description: "Phân tích dữ liệu và dự báo năng suất giúp lập kế hoạch thu hoạch và tiếp thị hiệu quả."
  },
]

const otherSolutions = [
  {
    value: "livestock",
    label: "Chăn nuôi",
    icon: <Factory className="h-4 w-4" />,
    title: "Chăn nuôi thông minh",
    description: "Giải pháp toàn diện cho trang trại chăn nuôi thông minh, giúp tối ưu hóa quy trình và nâng cao hiệu quả.",
    features: [
      "Theo dõi sức khỏe và hành vi vật nuôi theo thời gian thực",
      "Hệ thống cho ăn tự động dựa trên nhu cầu thực tế",
      "Kiểm soát môi trường chuồng trại (nhiệt độ, độ ẩm, không khí)",
      "Quản lý chu kỳ sinh sản và phát triển",
      "Cảnh báo sớm về các vấn đề sức khỏe và bệnh tật",
    ],
  },
  {
    value: "aquaculture",
    label: "Thủy sản",
    icon: <Fish className="h-4 w-4" />,
    title: "Thủy sản thông minh",
    description: "Giải pháp quản lý hiện đại cho nuôi trồng thủy sản, giúp tối ưu hóa chất lượng nước và sức khỏe sinh vật.",
    features: [
      "Giám sát liên tục các thông số chất lượng nước (pH, oxy, nhiệt độ)",
      "Hệ thống cho ăn tự động và quản lý thức ăn",
      "Điều khiển hệ thống sục khí và lọc nước",
      "Phát hiện sớm dịch bệnh thông qua phân tích dữ liệu",
      "Dự báo năng suất và lập kế hoạch thu hoạch",
    ],
  },
  {
    value: "orchard",
    label: "Vườn cây",
    icon: <Leaf className="h-4 w-4" />,
    title: "Quản lý vườn cây ăn quả",
    description: "Giải pháp tối ưu hóa năng suất và chất lượng cho vườn cây ăn quả với công nghệ tưới tiêu và giám sát thông minh.",
    features: [
      "Hệ thống tưới nhỏ giọt thông minh tiết kiệm nước",
      "Theo dõi điều kiện vi khí hậu theo mùa vụ",
      "Quản lý dinh dưỡng và phân bón chính xác",
      "Phát hiện sớm sâu bệnh và các vấn đề về cây trồng",
      "Dự báo năng suất và xác định thời điểm thu hoạch tối ưu",
    ],
  },
  {
    value: "traceability",
    label: "Truy xuất",
    icon: <BarChart2 className="h-4 w-4" />,
    title: "Truy xuất nguồn gốc",
    description: "Hệ thống truy xuất nguồn gốc toàn diện từ nông trại đến bàn ăn, đảm bảo minh bạch và niềm tin của người tiêu dùng.",
    features: [
      "Lưu trữ đầy đủ thông tin từ khâu trồng trọt đến thu hoạch",
      "Theo dõi quá trình sản xuất, đóng gói và vận chuyển",
      "Mã QR cho phép người tiêu dùng truy xuất nguồn gốc sản phẩm",
      "Chứng nhận chất lượng và tiêu chuẩn sản xuất",
      "Xây dựng thương hiệu và niềm tin với khách hàng",
    ],
  },
]

const caseStudies = [
  {
    category: "Nhà kính thông minh",
    title: "Trang trại rau Đà Lạt Farm",
    description: "Ứng dụng giải pháp nhà kính thông minh cho trang trại rau sạch quy mô 5 hecta tại Đà Lạt.",
    results: [
      "Tăng năng suất 35% so với phương pháp truyền thống",
      "Giảm 40% lượng nước sử dụng",
      "Tiết kiệm 30% chi phí nhân công",
      "Giảm 25% lượng thuốc bảo vệ thực vật sử dụng",
    ],
  },
  {
    category: "Canh tác chính xác",
    title: "Công ty Nông sản XYZ",
    description: "Áp dụng giải pháp canh tác chính xác cho đồng lúa quy mô lớn tại Đồng bằng sông Cửu Long.",
    results: [
      "Tăng năng suất lúa 20% trên cùng diện tích",
      "Giảm 30% lượng phân bón sử dụng",
      "Tiết kiệm 35% lượng nước tưới",
      "Giảm chi phí sản xuất 25%",
    ],
  },
  {
    category: "Thủy sản thông minh",
    title: "Trang trại thủy sản Nam Định",
    description: "Triển khai hệ thống giám sát và điều khiển chất lượng nước cho trại nuôi tôm công nghệ cao.",
    results: [
      "Giảm tỷ lệ tôm chết do bệnh từ 30% xuống 5%",
      "Tăng mật độ nuôi 40% nhờ kiểm soát môi trường tốt",
      "Tiết kiệm 25% chi phí thức ăn",
      "Rút ngắn thời gian nuôi từ 4 tháng xuống 3 tháng",
    ],
  },
]

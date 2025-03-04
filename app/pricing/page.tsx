import Link from "next/link"
import { ArrowRight, Check, X, Leaf, HelpCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Header from "@/components/header"
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
                Bảng giá linh hoạt
              </div>
              <h1 className="mt-3 text-3xl font-bold tracking-tighter text-green-950 sm:text-4xl md:text-5xl">
                Chọn gói phù hợp với nhu cầu của bạn
              </h1>
              <p className="mt-4 text-gray-600 md:text-xl">
                SmartFarm cung cấp nhiều lựa chọn phù hợp với mọi quy mô và loại hình nông trại
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Pricing Plans */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border bg-white p-1">
                <button className="rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white">Thanh toán tháng</button>
                <button className="rounded-full px-4 py-2 text-sm font-medium text-gray-600">Thanh toán năm (tiết kiệm 20%)</button>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`flex flex-col ${plan.highlighted ? 'border-green-600 shadow-lg' : ''}`}>
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
                          <span className={`text-sm ${feature.included ? 'text-gray-600' : 'text-gray-400'}`}>
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
                      className={`w-full ${plan.highlighted ? 'bg-green-600 hover:bg-green-700' : ''}`}
                      variant={plan.highlighted ? 'default' : 'outline'}
                    >
                      <Link href="/contact" className="w-full">
                        {plan.buttonText}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-gray-600">
                Tất cả các gói đều có hỗ trợ kỹ thuật và cập nhật miễn phí trong thời gian sử dụng.
                <br />
                Giá trên chưa bao gồm phần cứng và chi phí lắp đặt.
              </p>
            </div>
          </div>
        </section>

        {/* Custom Solutions */}
        <section className="w-full bg-gradient-to-b from-white to-green-50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                <Leaf className="mr-1 h-4 w-4" />
                Giải pháp tùy chỉnh
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tighter text-green-950 sm:text-4xl">
                Bạn cần giải pháp riêng biệt?
              </h2>
              <p className="mt-4 text-gray-600 md:text-lg">
                Chúng tôi cung cấp giải pháp tùy chỉnh hoàn toàn phù hợp với nhu cầu và quy mô nông trại của bạn
              </p>
            </div>

            <div className="mt-12 rounded-xl border bg-white p-8 shadow-lg">
              <div className="grid gap-10 md:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold text-green-950">Giải pháp doanh nghiệp</h3>
                  <p className="text-gray-600">
                    Dành cho các doanh nghiệp nông nghiệp quy mô lớn, hợp tác xã và nhóm nông dân với nhu cầu đặc biệt.
                  </p>
                  <ul className="space-y-3">
                    {enterpriseFeatures.map((feature, index) => (
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
                    <h4 className="text-lg font-semibold text-green-950">Tính giá chính xác</h4>
                    <p className="mt-2 text-gray-600">
                      Chúng tôi sẽ tiến hành khảo sát nông trại của bạn và đưa ra giải pháp với báo giá cụ thể, minh bạch.
                    </p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-6">
                    <h4 className="text-lg font-semibold text-green-950">Tư vấn chuyên sâu</h4>
                    <p className="mt-2 text-gray-600">
                      Đội ngũ chuyên gia sẽ phân tích nhu cầu và đề xuất giải pháp tối ưu về mặt kỹ thuật và chi phí.
                    </p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-6">
                    <h4 className="text-lg font-semibold text-green-950">Tích hợp hệ thống</h4>
                    <p className="mt-2 text-gray-600">
                      Chúng tôi hỗ trợ tích hợp với các hệ thống quản lý hiện có của doanh nghiệp, đảm bảo vận hành liền mạch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compare Table */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-green-950 sm:text-4xl">
                So sánh chi tiết các gói
              </h2>
              <p className="mt-4 text-gray-600 md:text-lg">
                Xem chi tiết tính năng của từng gói để chọn giải pháp phù hợp nhất
              </p>
            </div>

            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse rounded-lg">
                <thead>
                  <tr>
                    <th className="bg-green-100 p-4 text-left font-medium text-green-950">Tính năng</th>
                    <th className="bg-green-100 p-4 text-center font-medium text-green-950">Cơ bản</th>
                    <th className="bg-green-100 p-4 text-center font-medium text-green-950">Nâng cao</th>
                    <th className="bg-green-100 p-4 text-center font-medium text-green-950">Chuyên nghiệp</th>
                    <th className="bg-green-100 p-4 text-center font-medium text-green-950">Doanh nghiệp</th>
                  </tr>
                </thead>
                <tbody>
                  {compareFeatures.map((feature: any, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border border-gray-200 p-4 font-medium text-green-950">{feature.name}</td>
                      {['basic', 'advanced', 'professional', 'enterprise'].map((plan, idx) => (
                        <td key={idx} className="border border-gray-200 p-4 text-center">
                          {feature[plan] === true ? (
                            <Check className="mx-auto h-5 w-5 text-green-600" />
                          ) : feature[plan] === false ? (
                            <X className="mx-auto h-5 w-5 text-gray-400" />
                          ) : (
                            <span className="text-sm text-gray-600">{feature[plan]}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full bg-gradient-to-b from-green-50 to-white py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                <Leaf className="mr-1 h-4 w-4" />
                Câu hỏi thường gặp
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tighter text-green-950 sm:text-4xl">
                Thông tin về giá và thanh toán
              </h2>
              <p className="mt-4 text-gray-600 md:text-lg">
                Giải đáp những câu hỏi phổ biến về bảng giá và phương thức thanh toán
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-4xl space-y-4">
              {pricingFaqs.map((faq, index) => (
                <div key={index} className="rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-green-950">{faq.question}</h3>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-green-900 py-12 text-white md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Bắt đầu tối ưu hóa nông trại của bạn ngay hôm nay
              </h2>
              <p className="max-w-[600px] text-green-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Đăng ký dùng thử miễn phí 14 ngày hoặc liên hệ với chúng tôi để được tư vấn cụ thể
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-end">
              <Button size="lg" className="bg-white text-green-900 hover:bg-green-50">
                <Link href="/register">Đăng ký dùng thử</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-green-800">
                <Link href="/contact">Liên hệ tư vấn</Link>
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
const pricingPlans = [
  {
    name: "Cơ bản",
    price: "1.299.000 ₫",
    description: "Dành cho nông trại quy mô nhỏ",
    buttonText: "Chọn gói Cơ bản",
    highlighted: false,
    features: [
      {
        text: "Tối đa 5 cảm biến",
        included: true,
      },
      {
        text: "Giám sát thời gian thực",
        included: true,
      },
      {
        text: "Điều khiển tưới cơ bản",
        included: true,
      },
      {
        text: "Cảnh báo qua ứng dụng",
        included: true,
      },
      {
        text: "Dữ liệu lưu trữ 3 tháng",
        included: true,
        tooltip: "Dữ liệu lịch sử được lưu trữ trong 3 tháng, sau đó sẽ được tổng hợp thành báo cáo."
      },
      {
        text: "Phân tích dữ liệu nâng cao",
        included: false,
      },
      {
        text: "Tích hợp dự báo thời tiết",
        included: false,
      },
      {
        text: "Hỗ trợ kỹ thuật ưu tiên",
        included: false,
      },
    ],
  },
  {
    name: "Nâng cao",
    price: "2.499.000 ₫",
    description: "Dành cho nông trại quy mô vừa",
    buttonText: "Chọn gói Nâng cao",
    highlighted: true,
    features: [
      {
        text: "Tối đa 15 cảm biến",
        included: true,
      },
      {
        text: "Giám sát thời gian thực",
        included: true,
      },
      {
        text: "Điều khiển tưới nâng cao",
        included: true,
        tooltip: "Bao gồm lập lịch tự động, điều khiển theo khu vực và tối ưu hóa lượng nước."
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
      {
        text: "Hỗ trợ kỹ thuật ưu tiên",
        included: false,
      },
    ],
  },
  {
    name: "Chuyên nghiệp",
    price: "4.999.000 ₫",
    description: "Dành cho nông trại quy mô lớn",
    buttonText: "Chọn gói Chuyên nghiệp",
    highlighted: false,
    features: [
      {
        text: "Không giới hạn cảm biến",
        included: true,
      },
      {
        text: "Giám sát thời gian thực",
        included: true,
      },
      {
        text: "Điều khiển toàn diện",
        included: true,
        tooltip: "Điều khiển tất cả các thiết bị: hệ thống tưới, đèn chiếu sáng, quạt thông gió, nhiệt độ, ..."
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
        text: "Dự báo năng suất",
        included: true,
      },
      {
        text: "Hỗ trợ kỹ thuật 24/7",
        included: true,
      },
    ],
  },
]

const enterpriseFeatures = [
  "Tùy chỉnh đầy đủ theo nhu cầu của doanh nghiệp",
  "Tích hợp với các hệ thống quản lý hiện có (ERP, CRM, ...)",
  "Triển khai cho nhiều cơ sở và địa điểm khác nhau",
  "Phân quyền quản lý chi tiết cho nhiều người dùng",
  "Báo cáo và phân tích dữ liệu tùy chỉnh",
  "Hỗ trợ kỹ thuật chuyên biệt 24/7",
  "Đào tạo và hướng dẫn sử dụng cho nhân viên",
]

const compareFeatures = [
  {
    name: "Số lượng cảm biến",
    basic: "Tối đa 5",
    advanced: "Tối đa 15",
    professional: "Không giới hạn",
    enterprise: "Không giới hạn",
  },
  {
    name: "Giám sát thời gian thực",
    basic: true,
    advanced: true,
    professional: true,
    enterprise: true,
  },
  {
    name: "Hệ thống tưới tự động",
    basic: "Cơ bản",
    advanced: "Nâng cao",
    professional: "Toàn diện",
    enterprise: "Tùy chỉnh",
  },
  {
    name: "Cảnh báo",
    basic: "Ứng dụng",
    advanced: "Ứng dụng & SMS",
    professional: "Đa kênh",
    enterprise: "Tùy chỉnh",
  },
  {
    name: "Thời gian lưu trữ dữ liệu",
    basic: "3 tháng",
    advanced: "12 tháng",
    professional: "Không giới hạn",
    enterprise: "Không giới hạn",
  },
  {
    name: "Phân tích dữ liệu",
    basic: "Cơ bản",
    advanced: "Nâng cao",
    professional: "AI & Machine Learning",
    enterprise: "Tùy chỉnh",
  },
  {
    name: "Dự báo thời tiết",
    basic: false,
    advanced: true,
    professional: true,
    enterprise: true,
  },
  {
    name: "Dự báo năng suất",
    basic: false,
    advanced: false,
    professional: true,
    enterprise: true,
  },
  {
    name: "Hỗ trợ kỹ thuật",
    basic: "Giờ hành chính",
    advanced: "Giờ hành chính",
    professional: "24/7",
    enterprise: "24/7 chuyên biệt",
  },
  {
    name: "Tích hợp với phần mềm khác",
    basic: false,
    advanced: false,
    professional: "Giới hạn",
    enterprise: "Toàn diện",
  },
  {
    name: "Truy xuất nguồn gốc",
    basic: false,
    advanced: false,
    professional: true,
    enterprise: true,
  },
]

const pricingFaqs = [
  {
    question: "Các gói cước có bao gồm thiết bị phần cứng không?",
    answer: "Không, giá gói cước chỉ bao gồm phần mềm, dịch vụ đám mây và hỗ trợ kỹ thuật. Thiết bị phần cứng (cảm biến, bộ điều khiển, ...) sẽ được báo giá riêng tùy theo nhu cầu cụ thể của từng nông trại. Chúng tôi sẽ tư vấn cụ thể về thiết bị phù hợp sau khi khảo sát."
  },
  {
    question: "Tôi có thể nâng cấp hoặc hạ cấp gói của mình sau khi đăng ký không?",
    answer: "Có, bạn có thể dễ dàng nâng cấp gói của mình bất kỳ lúc nào. Khi nâng cấp, bạn sẽ chỉ thanh toán phần chênh lệch cho thời gian còn lại. Đối với hạ cấp gói, bạn có thể thực hiện vào kỳ gia hạn tiếp theo của hợp đồng."
  },
  {
    question: "Các phương thức thanh toán được chấp nhận?",
    answer: "Chúng tôi chấp nhận thanh toán qua chuyển khoản ngân hàng, thẻ tín dụng/ghi nợ, và các ví điện tử phổ biến như MoMo, ZaloPay, VNPay. Đối với khách hàng doanh nghiệp, chúng tôi có thể xuất hóa đơn VAT và thanh toán theo kỳ hạn thỏa thuận."
  },
  {
    question: "Có được dùng thử trước khi mua không?",
    answer: "Có, chúng tôi cung cấp bản dùng thử miễn phí 14 ngày cho tất cả các gói dịch vụ. Trong thời gian dùng thử, bạn sẽ được trải nghiệm đầy đủ các tính năng của gói đã chọn để đánh giá sự phù hợp trước khi quyết định mua."
  },
  {
    question: "Chi phí lắp đặt là bao nhiêu?",
    answer: "Chi phí lắp đặt phụ thuộc vào quy mô, vị trí địa lý và độ phức tạp của nông trại. Sau khi khảo sát, chúng tôi sẽ cung cấp báo giá cụ thể cho phần lắp đặt. Đối với khách hàng lựa chọn gói Chuyên nghiệp hoặc Doanh nghiệp, chúng tôi có những ưu đãi đặc biệt về chi phí lắp đặt."
  },
  {
    question: "Có hỗ trợ bảo trì và bảo dưỡng thiết bị không?",
    answer: "Có, chúng tôi cung cấp dịch vụ bảo trì và bảo dư"
  }
];
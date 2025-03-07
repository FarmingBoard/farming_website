"use client"

import { useState } from "react"
import { BarChart2, Bell, CloudRain, Droplets, Leaf, Map, Smartphone, Sun, ThermometerSun, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AppFeatures() {
  const [activeTab, setActiveTab] = useState("monitoring")

  const features = [
    {
      id: "monitoring",
      title: "Giám sát thời gian thực",
      description:
        "Theo dõi các thông số quan trọng của nông trại như nhiệt độ, độ ẩm, ánh sáng và độ ẩm đất theo thời gian thực.",
      icon: <BarChart2 className="h-6 w-6" />,
      details: [
        {
          title: "Dữ liệu thời tiết",
          description: "Cập nhật liên tục về nhiệt độ, độ ẩm, lượng mưa và tốc độ gió.",
          icon: <CloudRain className="h-5 w-5" />,
        },
        {
          title: "Độ ẩm đất",
          description: "Theo dõi độ ẩm đất theo từng khu vực canh tác.",
          icon: <Droplets className="h-5 w-5" />,
        },
        {
          title: "Ánh sáng",
          description: "Đo lường cường độ ánh sáng và thời gian chiếu sáng.",
          icon: <Sun className="h-5 w-5" />,
        },
        {
          title: "Nhiệt độ đất",
          description: "Giám sát nhiệt độ đất để đảm bảo điều kiện tối ưu cho cây trồng.",
          icon: <ThermometerSun className="h-5 w-5" />,
        },
      ],
    },
    {
      id: "control",
      title: "Điều khiển từ xa",
      description:
        "Điều khiển các thiết bị như hệ thống tưới, quạt thông gió, đèn chiếu sáng từ xa thông qua ứng dụng.",
      icon: <Smartphone className="h-6 w-6" />,
      details: [
        {
          title: "Hệ thống tưới",
          description: "Bật/tắt và lập lịch tưới tự động cho từng khu vực.",
          icon: <Droplets className="h-5 w-5" />,
        },
        {
          title: "Điều khiển ánh sáng",
          description: "Điều chỉnh thời gian và cường độ chiếu sáng cho nhà kính.",
          icon: <Sun className="h-5 w-5" />,
        },
        {
          title: "Quản lý năng lượng",
          description: "Theo dõi và tối ưu hóa mức tiêu thụ năng lượng của các thiết bị.",
          icon: <Zap className="h-5 w-5" />,
        },
        {
          title: "Lập lịch tự động",
          description: "Thiết lập lịch trình hoạt động tự động cho các thiết bị.",
          icon: <BarChart2 className="h-5 w-5" />,
        },
      ],
    },
    {
      id: "alerts",
      title: "Cảnh báo thông minh",
      description: "Nhận thông báo kịp thời về các vấn đề tiềm ẩn như hạn hán, sâu bệnh hoặc sự cố thiết bị.",
      icon: <Bell className="h-6 w-6" />,
      details: [
        {
          title: "Cảnh báo thời tiết",
          description: "Thông báo về các điều kiện thời tiết cực đoan sắp xảy ra.",
          icon: <CloudRain className="h-5 w-5" />,
        },
        {
          title: "Cảnh báo độ ẩm",
          description: "Thông báo khi độ ẩm đất quá cao hoặc quá thấp.",
          icon: <Droplets className="h-5 w-5" />,
        },
        {
          title: "Phát hiện sâu bệnh",
          description: "Cảnh báo sớm về dấu hiệu sâu bệnh dựa trên dữ liệu cảm biến.",
          icon: <Leaf className="h-5 w-5" />,
        },
        {
          title: "Sự cố thiết bị",
          description: "Thông báo khi phát hiện thiết bị hoạt động bất thường.",
          icon: <Zap className="h-5 w-5" />,
        },
      ],
    },
    {
      id: "analytics",
      title: "Phân tích dữ liệu",
      description: "Phân tích dữ liệu lịch sử để đưa ra các đề xuất tối ưu hóa và dự báo xu hướng canh tác.",
      icon: <BarChart2 className="h-6 w-6" />,
      details: [
        {
          title: "Báo cáo năng suất",
          description: "Phân tích dữ liệu năng suất theo thời gian và khu vực.",
          icon: <BarChart2 className="h-5 w-5" />,
        },
        {
          title: "Dự báo thời tiết",
          description: "Dự báo thời tiết chi tiết dựa trên dữ liệu lịch sử và hiện tại.",
          icon: <CloudRain className="h-5 w-5" />,
        },
        {
          title: "Tối ưu hóa tài nguyên",
          description: "Đề xuất cách sử dụng nước và phân bón hiệu quả nhất.",
          icon: <Droplets className="h-5 w-5" />,
        },
        {
          title: "Phân tích xu hướng",
          description: "Nhận diện xu hướng và mô hình từ dữ liệu canh tác dài hạn.",
          icon: <BarChart2 className="h-5 w-5" />,
        },
      ],
    },
    {
      id: "mapping",
      title: "Bản đồ nông trại",
      description: "Xem bản đồ chi tiết của nông trại với thông tin về từng khu vực canh tác.",
      icon: <Map className="h-6 w-6" />,
      details: [
        {
          title: "Bản đồ khu vực",
          description: "Hiển thị bản đồ chi tiết của nông trại với các khu vực canh tác.",
          icon: <Map className="h-5 w-5" />,
        },
        {
          title: "Theo dõi cây trồng",
          description: "Quản lý thông tin về loại cây trồng và lịch sử canh tác theo khu vực.",
          icon: <Leaf className="h-5 w-5" />,
        },
        {
          title: "Bản đồ nhiệt",
          description: "Hiển thị bản đồ nhiệt về độ ẩm, nhiệt độ và các thông số khác.",
          icon: <ThermometerSun className="h-5 w-5" />,
        },
        {
          title: "Định vị thiết bị",
          description: "Xem vị trí của các thiết bị cảm biến và thiết bị điều khiển trên bản đồ.",
          icon: <Smartphone className="h-5 w-5" />,
        },
      ],
    },
  ]

  const activeFeature = features.find((feature) => feature.id === activeTab)

  return (
    <div className="mt-12">
      <div className="flex flex-wrap justify-center gap-2">
        {features.map((feature) => (
          <button
            key={feature.id}
            onClick={() => setActiveTab(feature.id)}
            className={cn(
              "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeTab === feature.id ? "bg-green-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100",
            )}
          >
            {feature.icon}
            {feature.title}
          </button>
        ))}
      </div>

      <div className="mt-12">
        {activeFeature && (
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-green-950">{activeFeature.title}</h3>
              <p className="text-gray-600">{activeFeature.description}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {activeFeature.details.map((detail, index) => (
                  <div key={index} className="rounded-lg border bg-white p-4 shadow-sm">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                      {detail.icon}
                    </div>
                    <h4 className="font-medium text-green-950">{detail.title}</h4>
                    <p className="mt-1 text-sm text-gray-600">{detail.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-64 w-64 rounded-full bg-green-200 opacity-20 blur-3xl"></div>
                <div className="relative">
                  <img
                    src="./appmobile.jpg"
                    alt={`${activeFeature.title} screenshot`}
                    className="rounded-[32px] shadow-xl"
                    width={250}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  BarChart2,
  Droplets,
  Cloud,
  ThermometerSun,
  Wind,
  Calendar,
  Leaf,
  AlertCircle,
  Settings,
} from "lucide-react"
import Header from "@/components/dashboard/header"
import Sidebar from "@/components/dashboard/sidebar"

export default function DashboardPage() {
  const [weatherData, setWeatherData] = useState({
    temperature: 28,
    humidity: 65,
    rainfall: 0,
    windSpeed: 12,
    forecast: "Nắng nhẹ",
    soilMoisture: [45, 52, 48, 56],
  })

  const [alertsCount, setAlertsCount] = useState(2)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Mock data update every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setWeatherData((prev) => ({
        ...prev,
        temperature: Math.floor(26 + Math.random() * 5),
        humidity: Math.floor(60 + Math.random() * 10),
        windSpeed: Math.floor(10 + Math.random() * 5),
        soilMoisture: prev.soilMoisture.map(() => Math.floor(40 + Math.random() * 20)),
      }))
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Header setMobileMenuOpen={setIsMobileMenuOpen} alertsCount={alertsCount} />
      <div className="flex flex-1">
        <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
        <main className="flex-1 bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <Link href="/" className="mb-2 inline-flex items-center text-sm text-green-600 hover:text-green-700">
                <ArrowLeft className="mr-1 h-4 w-4" />
                Quay lại trang chủ
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Bảng điều khiển</h1>
              <p className="text-gray-600">Theo dõi và quản lý trang trại của bạn</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Báo cáo
              </Button>
              <Button className="bg-green-600 hover:bg-green-700" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                Cài đặt
              </Button>
            </div>
          </div>

          {/* Overview Cards */}
          <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Nhiệt độ</p>
                  <h3 className="text-2xl font-bold text-gray-900">{weatherData.temperature}°C</h3>
                </div>
                <div className="rounded-full bg-orange-100 p-2 text-orange-600">
                  <ThermometerSun className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-600">Dự báo: {weatherData.forecast}</p>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Độ ẩm không khí</p>
                  <h3 className="text-2xl font-bold text-gray-900">{weatherData.humidity}%</h3>
                </div>
                <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                  <Cloud className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-600">Cao hơn 5% so với hôm qua</p>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Tốc độ gió</p>
                  <h3 className="text-2xl font-bold text-gray-900">{weatherData.windSpeed} km/h</h3>
                </div>
                <div className="rounded-full bg-green-100 p-2 text-green-600">
                  <Wind className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-600">Gió nhẹ</p>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Lượng mưa</p>
                  <h3 className="text-2xl font-bold text-gray-900">{weatherData.rainfall} mm</h3>
                </div>
                <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                  <Droplets className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-600">Không mưa 3 ngày qua</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Soil Moisture */}
            <div className="col-span-1 rounded-lg border bg-white p-4 shadow-sm lg:col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Độ ẩm đất theo khu vực</h2>
                <Button variant="outline" size="sm">
                  <BarChart2 className="mr-2 h-4 w-4" />
                  Chi tiết
                </Button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="mr-2 w-24 text-sm text-gray-600">Khu vực A</span>
                  <div className="flex-1 rounded-full bg-gray-200">
                    <div
                      className="h-2.5 rounded-full bg-green-600"
                      style={{ width: `${weatherData.soilMoisture[0]}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">{weatherData.soilMoisture[0]}%</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 w-24 text-sm text-gray-600">Khu vực B</span>
                  <div className="flex-1 rounded-full bg-gray-200">
                    <div
                      className="h-2.5 rounded-full bg-green-600"
                      style={{ width: `${weatherData.soilMoisture[1]}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">{weatherData.soilMoisture[1]}%</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 w-24 text-sm text-gray-600">Khu vực C</span>
                  <div className="flex-1 rounded-full bg-gray-200">
                    <div
                      className="h-2.5 rounded-full bg-green-600"
                      style={{ width: `${weatherData.soilMoisture[2]}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">{weatherData.soilMoisture[2]}%</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 w-24 text-sm text-gray-600">Khu vực D</span>
                  <div className="flex-1 rounded-full bg-gray-200">
                    <div
                      className="h-2.5 rounded-full bg-green-600"
                      style={{ width: `${weatherData.soilMoisture[3]}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">{weatherData.soilMoisture[3]}%</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-end">
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  Kích hoạt tưới tự động
                </Button>
              </div>
            </div>

            {/* Alerts */}
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Cảnh báo</h2>
                <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                  {alertsCount} mới
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 rounded-lg border border-amber-200 bg-amber-50 p-3">
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Độ ẩm đất thấp ở Khu vực B</h3>
                    <p className="text-xs text-gray-600">Cần tăng cường tưới nước trong 24 giờ tới</p>
                    <p className="mt-1 text-xs text-gray-500">2 giờ trước</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 rounded-lg border border-red-200 bg-red-50 p-3">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Phát hiện dấu hiệu sâu bệnh</h3>
                    <p className="text-xs text-gray-600">Kiểm tra vùng lá tại Khu vực C</p>
                    <p className="mt-1 text-xs text-gray-500">5 giờ trước</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 rounded-lg border p-3">
                  <Leaf className="h-5 w-5 text-green-500" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Chỉ số sức khỏe cây trồng tốt</h3>
                    <p className="text-xs text-gray-600">Các chỉ số sinh trưởng ở mức tối ưu</p>
                    <p className="mt-1 text-xs text-gray-500">1 ngày trước</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Button variant="outline" size="sm" className="w-full">
                  Xem tất cả cảnh báo
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}


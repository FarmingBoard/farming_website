"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AppScreenshots() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current
      const scrollAmount = clientWidth * 0.8

      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })

      setTimeout(checkScrollButtons, 500)
    }
  }

  const screenshots = [
    {
      title: "Màn hình chính",
      description: "Tổng quan về tình trạng nông trại",
      image: "/placeholder.svg?height=600&width=300&text=Dashboard",
    },
    {
      title: "Theo dõi thời tiết",
      description: "Dữ liệu thời tiết chi tiết",
      image: "/placeholder.svg?height=600&width=300&text=Weather",
    },
    {
      title: "Điều khiển tưới",
      description: "Quản lý hệ thống tưới tự động",
      image: "/placeholder.svg?height=600&width=300&text=Irrigation",
    },
    {
      title: "Cảnh báo",
      description: "Thông báo và cảnh báo",
      image: "/placeholder.svg?height=600&width=300&text=Alerts",
    },
    {
      title: "Phân tích dữ liệu",
      description: "Biểu đồ và báo cáo",
      image: "/placeholder.svg?height=600&width=300&text=Analytics",
    },
    {
      title: "Bản đồ nông trại",
      description: "Bản đồ chi tiết khu vực canh tác",
      image: "/placeholder.svg?height=600&width=300&text=Map",
    },
  ]

  return (
    <div className="mt-12">
      <div className="relative">
        <div className="absolute -top-12 right-0 flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="h-8 w-8 rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Scroll left</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="h-8 w-8 rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Scroll right</span>
          </Button>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-8 pt-4 scrollbar-hide"
          onScroll={checkScrollButtons}
        >
          {screenshots.map((screenshot, index) => (
            <div key={index} className="flex min-w-[280px] flex-col items-center space-y-4">
              <div className="overflow-hidden rounded-[32px] border-8 border-gray-800 bg-gray-800 shadow-xl">
                <img
                  src={screenshot.image || "/placeholder.svg"}
                  alt={screenshot.title}
                  className="h-[500px] w-[250px] object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-green-950">{screenshot.title}</h3>
                <p className="text-sm text-gray-600">{screenshot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


"use client"

import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import {
  X,
  Home,
  BarChart2,
  Droplets,
  CloudRain,
  Calendar,
  Settings,
  HelpCircle,
  Layers,
  AlertTriangle,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const router = useRouter()
  const pathname = usePathname()

  const routes = [
    {
      href: "/dashboard",
      label: "Tổng quan",
      icon: Home,
    },
    {
      href: "/dashboard/analytics",
      label: "Phân tích",
      icon: BarChart2,
    },
    {
      href: "/dashboard/irrigation",
      label: "Tưới tiêu",
      icon: Droplets,
    },
    {
      href: "/dashboard/weather",
      label: "Thời tiết",
      icon: CloudRain,
    },
    {
      href: "/dashboard/planting",
      label: "Canh tác",
      icon: Layers,
    },
    {
      href: "/dashboard/alerts",
      label: "Cảnh báo",
      icon: AlertTriangle,
    },
    {
      href: "/dashboard/team",
      label: "Nhóm",
      icon: Users,
    },
    {
      href: "/dashboard/calendar",
      label: "Lịch",
      icon: Calendar,
    },
  ]

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setIsOpen(false)}></div>}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 flex-col border-r bg-white transition-transform duration-300 md:static md:flex md:translate-x-0",
          isOpen ? "flex translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center border-b px-4">
          <h2 className="text-lg font-bold text-green-950">Bảng điều khiển</h2>
          <Button variant="ghost" size="icon" className="ml-auto md:hidden" onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5" />
            <span className="sr-only">Đóng menu</span>
          </Button>
        </div>
        <div className="flex flex-1 flex-col gap-1 overflow-auto p-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium",
                pathname === route.href ? "bg-gray-100 text-green-700" : "text-gray-700 hover:bg-gray-50",
              )}
              onClick={() => setIsOpen(false)}
            >
              <route.icon className="h-5 w-5" />
              {route.label}
            </Link>
          ))}
        </div>
        <div className="border-t p-4">
          <div className="space-y-1">
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Settings className="h-5 w-5" />
              Cài đặt
            </Link>
            <Link
              href="/dashboard/help"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <HelpCircle className="h-5 w-5" />
              Trợ giúp
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}


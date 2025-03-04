import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import LoginForm from "@/components/login-form"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container flex flex-col items-center justify-center py-12">
        <Link href="/" className="mb-8 flex items-center text-green-600 hover:text-green-700">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại trang chủ
        </Link>
        <div className="w-full max-w-md">
          <div className="rounded-lg border bg-white p-8 shadow-lg">
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-bold text-green-950">Đăng nhập</h1>
              <p className="mt-1 text-sm text-gray-600">Đăng nhập để truy cập vào tài khoản của bạn</p>
            </div>
            <LoginForm />
            <div className="mt-6 text-center text-sm">
              <p className="text-gray-600">
                Chưa có tài khoản?{" "}
                <Link href="/register" className="font-medium text-green-600 hover:text-green-700">
                  Đăng ký ngay
                </Link>
              </p>
            </div>
            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Hoặc đăng nhập với</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="mr-2 h-4 w-4"
                >
                  <path
                    d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                    fill="#4285F4"
                  />
                  <path
                    d="M7.545,14.923l-2.539-1.885c-0.84,1.649-1.252,3.473-1.175,5.23c0.306,7.308,6.203,9.249,8.03,9.249 c2.744,0,5.323-1.198,7.104-3.288L15.949,20.6c-0.825,0.937-2.048,1.464-3.404,1.464C9.853,22.064,7.545,18.969,7.545,14.923z"
                    fill="#34A853"
                  />
                  <path
                    d="M6.545,9.377l2.539,1.885c0.317-1.737,1.973-3.262,4.461-3.262c1.416,0,2.691,0.524,3.714,1.386l3.078-3.078 C18.203,4.26,15.599,3,12.545,3C8.297,3,4.863,5.539,3.545,9.08L6.545,9.377z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M22.971,11.055c-0.124-0.621-0.306-1.228-0.537-1.818L12.545,9.377v4.143h5.445 c-0.33,0.828-0.782,1.573-1.327,2.222l3.905,3.105c1.098-1.333,2.002-2.855,2.599-4.532C23.689,13.052,23.214,11.989,22.971,11.055z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="mr-2 h-4 w-4"
                >
                  <path
                    d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"
                    fill="#000000"
                  />
                </svg>
                Apple
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


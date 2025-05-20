import Link from "next/link";
import { Globe } from "lucide-react";
export default function Footer() {
  return (
    <div className="border-t py-6 md:py-10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Globe className="h-6 w-6" />
              <span className="text-xl font-bold">One World</span>
            </Link>
            <p className="text-sm text-gray-500">
              Connecting people with work & travel opportunities across America
              since 2010.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/programs"
                  className="text-gray-500 hover:text-gray-900"
                >
                  Work & Travel
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-gray-500 hover:text-gray-900"
                >
                  Internships
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-gray-500 hover:text-gray-900"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-gray-500 hover:text-gray-900"
                >
                  Language Courses
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-500 hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about/careers"
                  className="text-gray-500 hover:text-gray-900"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/about/blog"
                  className="text-gray-500 hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about/press"
                  className="text-gray-500 hover:text-gray-900"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-500">
                123 Global Street
                <br />
                New York, NY 10001
              </li>
              <li>
                <Link
                  href="mailto:info@oneworld.com"
                  className="text-gray-500 hover:text-gray-900"
                >
                  info@oneworld.com
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+12345678"
                  className="text-gray-500 hover:text-gray-900"
                >
                  +1(234) 567-890
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            2025 One World. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-gray-500 hover:text-gray-900">
              Terms
            </Link>
            <Link href="/privacy" className="text-gray-500 hover:text-gray-900">
              Privacy
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-gray-900">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

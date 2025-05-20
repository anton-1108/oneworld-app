import { Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Header() {
  return (
    <div className="border-b ">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Globe className="h-6 w-6" />
          <span className="text-xl font-bold">One World</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:underline">
            Home
          </Link>
          <Link
            href="destinations"
            className="text-sm font-medium hover:underline"
          >
            Destinations
          </Link>
          <Link
            href="/programs"
            className="text-sm font-medium hover:underline"
          >
            Programs
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline">
            Programs
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="sign-in">
            <Button size="sm" variant="outline">
              Sign In
            </Button>
          </Link>
          <Link href="sign-up">
            <Button size="sm">Sign Up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#800020] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <Link 
        href="/" 
        className="flex items-center gap-3"
        >
          <Image 
            src="/images/logo.png" 
            alt="BankingSolutions Logo" 
            width={110}
            height={110} 
          />
        </Link>

        {/* Navigation */}

        <div className="hidden md:flex items-center gap-8">

          <Link href="/" className="text-white hover:text-yellow-300 transition">
            Home
          </Link>

          <Link href="/practice" className="text-white hover:text-yellow-300 transition">
            Practice
          </Link>

          <Link href="/bsps" className="text-white hover:text-yellow-300 transition">
            BSPS
          </Link>

          <Link href="/mock-tests" className="text-white hover:text-yellow-300 transition">
            Mock Tests
          </Link>

          <Link href="/current-affairs" className="text-white hover:text-yellow-300 transition">
            Current Affairs
          </Link>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <Link
            href="/login"
            className="text-white hover:text-yellow-300 transition"
          >
            Login
          </Link>

          <button className="bg-white text-[#800020] px-5 py-2 rounded-xl font-semibold hover:scale-105 transition">
            Get Started
          </button>

        </div>

      </div>
    </nav>
  );
}
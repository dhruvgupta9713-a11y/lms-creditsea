import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 pt-16 pb-12 border-t border-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transform rotate-45">
                <span className="text-white font-bold text-xs -rotate-45">LMS</span>
              </div>
              <span className="font-bold text-xl text-blue-500 tracking-tight">CreditSea</span>
            </Link>
            <p className="text-sm text-gray-200 font-bold mb-1 mt-6">INNOTECH CREDITSEA</p>
            <p className="text-sm text-gray-500">All rights reserved.</p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contact Us</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              SO-11, 3rd Floor, Magneto<br />
              Offizo, Magneto The Mall<br />
              Raipur, Chhattisgarh 492001
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Creditsea</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Products</h4>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-sm text-gray-400 hover:text-white transition">Personal Loans</Link></li>
              <li><Link href="/products" className="text-sm text-gray-400 hover:text-white transition">Business Loans</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Other</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition">Terms of Service</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

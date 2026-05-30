import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, User, Wallet, Flag, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import LoanCalculator from "@/components/LoanCalculator";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />


      {/* Hero Section */}
      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            {/* Left Column: Context, Headings, inputs */}
            <div className="lg:col-span-7 text-left space-y-6">
              <p className="text-blue-600 text-lg font-bold tracking-wide uppercase">
                Borrowing Made Easy with CreditSea
              </p>
              <h2 className="text-2xl text-gray-500 font-medium leading-tight">
                Facing unexpected expenses or last-minute financial needs?
              </h2>
              <h1 className="text-5xl sm:text-6xl font-black text-gray-900 leading-tight tracking-tight">
                Get Personal Loans up to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">₹2 Lakhs</span>
              </h1>

              {/* Mobile Number Input Form */}
              <div className="max-w-md relative pt-2">
                <div className="flex items-center bg-white rounded-full shadow-xl p-2 border border-gray-100 relative z-10 hover:border-blue-200 transition-colors">
                  <input
                    type="text"
                    placeholder="Enter your mobile number"
                    className="flex-grow px-6 py-3 bg-transparent outline-none text-gray-800 text-base placeholder-gray-400"
                  />
                  <Link href="/apply" className="px-6 py-3.5 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition shadow-lg text-base whitespace-nowrap">
                    Apply for Loan
                  </Link>
                </div>
              </div>

              {/* Lending Partner Badge */}
              <div className="flex items-center gap-2 text-gray-600 bg-blue-50 py-3 px-5 rounded-full inline-flex border border-blue-100">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="font-bold text-gray-800 text-sm">Meghdoot Mercantile Private Limited</span>
                <span className="text-sm">as Lending Partner</span>
              </div>
            </div>

            {/* Right Column: Hero Illustration */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              {/* Soft decorative glow behind the illustration */}
              <div className="absolute w-72 h-72 rounded-full bg-blue-100/50 filter blur-3xl -z-10"></div>
              <div className="relative w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-4">
                <Image
                  src="/loan_hero.png"
                  alt="CreditSea Personal Loan Illustration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-contain p-2 rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <div className="relative max-w-5xl mx-auto mt-16 text-left">
            <LoanCalculator />
          </div>

          {/* Eligibility Section */}
          <div className="mt-32 max-w-5xl mx-auto pb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-16 text-center">Eligibility Criteria</h2>
            
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
              {/* Card 1: Age */}
              <div className="w-full md:w-72 flex flex-col items-center">
                <div className="mb-6 text-gray-600">
                  <User className="w-14 h-14 stroke-[1.5]" />
                </div>
                <div className="w-full bg-gradient-to-b from-blue-500 to-blue-700 rounded-xl p-6 text-white shadow-lg h-36 flex flex-col justify-center items-center text-center transition hover:-translate-y-1 duration-300">
                  <h3 className="text-xl font-bold mb-2">Age</h3>
                  <p className="text-sm font-medium text-blue-50">Between 23 and 50<br/>years</p>
                </div>
              </div>

              {/* Card 2: Monthly Income */}
              <div className="w-full md:w-72 flex flex-col items-center">
                <div className="mb-6 text-gray-600">
                  <Wallet className="w-14 h-14 stroke-[1.5]" />
                </div>
                <div className="w-full bg-gradient-to-b from-blue-500 to-blue-700 rounded-xl p-6 text-white shadow-lg h-36 flex flex-col justify-center items-center text-center transition hover:-translate-y-1 duration-300">
                  <h3 className="text-xl font-bold mb-2">Monthly Income</h3>
                  <p className="text-sm font-medium text-blue-50">₹25,000 (Minimum)</p>
                </div>
              </div>

              {/* Card 3: Nationality */}
              <div className="w-full md:w-72 flex flex-col items-center">
                <div className="mb-6 text-gray-600">
                  <Flag className="w-14 h-14 stroke-[1.5]" />
                </div>
                <div className="w-full bg-gradient-to-b from-blue-500 to-blue-700 rounded-xl p-6 text-white shadow-lg h-36 flex flex-col justify-center items-center text-center transition hover:-translate-y-1 duration-300">
                  <h3 className="text-xl font-bold mb-2">Nationality</h3>
                  <p className="text-sm font-medium text-blue-50">Must be a Resident<br/>Indian Citizen</p>
                </div>
              </div>
            </div>
            
            {/* Center aligned bottom row */}
            <div className="flex justify-center">
              {/* Card 4: Work Experience */}
              <div className="w-full md:w-72 flex flex-col items-center">
                <div className="mb-6 text-gray-600">
                  <Briefcase className="w-14 h-14 stroke-[1.5]" />
                </div>
                <div className="w-full bg-gradient-to-b from-blue-500 to-blue-700 rounded-xl p-6 text-white shadow-lg h-36 flex flex-col justify-center items-center text-center transition hover:-translate-y-1 duration-300">
                  <h3 className="text-xl font-bold mb-2">Work Experience</h3>
                  <p className="text-sm font-medium text-blue-50">Salaried or<br/>Self-Employed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FAQSection />
      <Footer />
      <AIAssistant />
    </div>
  );
}

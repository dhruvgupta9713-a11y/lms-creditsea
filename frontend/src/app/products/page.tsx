"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Check, Wallet, Landmark, TrendingUp, ArrowRight } from "lucide-react";

export default function ProductsPage() {
  const products = [
    {
      title: "Personal Loan",
      description: "Get quick cash in your account for medical emergencies, travel, shopping, or school fees.",
      amount: "₹50,000 - ₹2,00,000",
      tenure: "90 - 365 Days",
      interest: "12% p.a. (Simple Interest)",
      features: [
        "Instant approval & paperless processing",
        "Disbursed directly to bank account",
        "No prepayment/foreclosure charges",
        "Salaried and Self-employed eligible",
      ],
      color: "from-blue-500 to-indigo-600",
      icon: Wallet,
    },
    {
      title: "Credit Builder Loan",
      description: "Best for first-time borrowers. Build or repair your credit history with smaller, easy-to-repay amounts.",
      amount: "₹5,000 - ₹30,000",
      tenure: "30 - 90 Days",
      interest: "10% p.a. (Simple Interest)",
      features: [
        "Low credit score requirements",
        "Reports directly to credit bureaus",
        "Helps raise credit score within 3 months",
        "Simple digital document verification",
      ],
      color: "from-teal-500 to-emerald-600",
      icon: TrendingUp,
    },
    {
      title: "Business Loan",
      description: "Boost your shop, startup, or professional service with structured working capital.",
      amount: "₹1,00000 - ₹5,00,000",
      tenure: "180 - 365 Days",
      interest: "14% p.a. (Simple Interest)",
      features: [
        "Specially designed for MSMEs",
        "No collateral required",
        "Flexible daily or monthly collections",
        "Requires active business proof",
      ],
      color: "from-purple-500 to-indigo-700",
      icon: Landmark,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Our Loan Products</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the perfect credit product designed around your financial needs and repayment capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((p, index) => {
              const Icon = p.icon;
              return (
                <div key={index} className="flex flex-col bg-white rounded-3xl border border-gray-150 shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden">
                  <div className={`bg-gradient-to-r ${p.color} p-6 text-white`}>
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold mb-1">{p.title}</h2>
                    <p className="text-white/80 text-sm leading-relaxed">{p.description}</p>
                  </div>
                  
                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div className="space-y-6 mb-8">
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Loan Range</p>
                        <p className="text-xl font-bold text-gray-900">{p.amount}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Tenure</p>
                          <p className="text-base font-bold text-gray-800">{p.tenure}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Interest Rate</p>
                          <p className="text-base font-bold text-gray-800">{p.interest}</p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Core Features</p>
                        <ul className="space-y-2.5">
                          {p.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2.5 text-sm text-gray-600">
                              <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link
                      href="/apply"
                      className="w-full py-3.5 px-4 bg-gray-900 hover:bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition duration-200"
                    >
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

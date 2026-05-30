"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Landmark, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

export default function RepayPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Repay Your Loan</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn how to pay off your active loan balance using safe and secure bank transfers.
            </p>
          </div>

          {/* Warning/Disclaimer Box */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-10 flex gap-4 items-start">
            <HelpCircle className="w-6 h-6 text-yellow-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-yellow-800 mb-1">Repayment Rule Reminder</h3>
              <p className="text-sm text-yellow-700 leading-relaxed">
                Repayments must be sent directly to our registered lending partner accounts. CreditSea representatives will never ask you to transfer funds to individual personal accounts. Always verify the bank details listed below.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left side: Account details */}
            <div className="bg-white border border-gray-150 rounded-3xl p-8 shadow-xl shadow-gray-100/50">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <Landmark className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900">Official Bank Accounts</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Beneficiary Name</p>
                  <p className="font-bold text-gray-800 text-lg">Meghdoot Mercantile Private Limited</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Bank Name</p>
                  <p className="font-bold text-gray-800 text-base">HDFC Bank Ltd</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Account Number</p>
                    <p className="font-mono font-bold text-gray-800 text-base">50200088192039</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">IFSC Code</p>
                    <p className="font-mono font-bold text-gray-800 text-base">HDFC0000021</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Account Type</p>
                  <p className="font-bold text-gray-800 text-sm">Escrow Account (Current)</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-500 font-semibold bg-gray-50 rounded-xl p-3">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Secured via bank-grade encryption</span>
              </div>
            </div>

            {/* Right side: Instructions */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">Repayment Process</h2>

              <div className="relative border-l-2 border-blue-100 pl-6 space-y-8">
                {/* Step 1 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-blue-100"></div>
                  <h3 className="font-bold text-gray-900 text-base mb-1">1. Transfer Funds</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Initiate an IMPS, NEFT, or UPI transfer from your registered bank account for the exact outstanding balance.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-blue-100"></div>
                  <h3 className="font-bold text-gray-900 text-base mb-1">2. Note the UTR Code</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Once the payment succeeds, copy the 12-digit UTR or Transaction ID from your banking app.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-blue-100"></div>
                  <h3 className="font-bold text-gray-900 text-base mb-1">3. Report Payment</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Share your UTR reference code with your CreditSea Collection Executive or email it to support@creditsea.com.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-emerald-100"></div>
                  <h3 className="font-bold text-emerald-700 text-base mb-1">4. Auto Closure</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Upon reconciliation, the Collections team posts your payment, and your loan status automatically updates to "Closed".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

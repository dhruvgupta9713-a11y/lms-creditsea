"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle, BookOpen, Calculator, DollarSign, Calendar, Percent } from "lucide-react";

export default function LoanCalculator() {
  const [amount, setAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(12);
  const [tenure, setTenure] = useState(365); // Days, as per assignment constraints
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // Calculation Logic (Using simple interest since tenure is in days)
  const P = amount;
  const R = interestRate / 100;
  const T = tenure;

  const simpleInterest = Math.round((P * R * T) / 365);
  const totalAmount = P + simpleInterest;
  
  // Approximating an EMI for UI display (Total Amount / (Days/30))
  const months = Math.max(1, Math.round(tenure / 30));
  const emi = Math.round(totalAmount / months);

  // Donut chart calculations
  const circumference = 2 * Math.PI * 50; // ~314.16
  const principalPercentage = amount / totalAmount;
  const interestPercentage = simpleInterest / totalAmount;
  const principalStroke = circumference * principalPercentage;
  const interestStroke = circumference * interestPercentage;

  const terms = {
    amount: "Principal is the actual amount you borrow from us. You pay interest only on this base amount.",
    interest: "Interest Rate is the fee charged for borrowing. We offer a low interest rate of 12% p.a.",
    tenure: "Tenure is the total time period you get to repay the loan, selected in days.",
    emi: "Equated Monthly Installment. It is the average amount you pay every month to clear your total loan.",
  };

  return (
    <div className="bg-white rounded-3xl w-full">
      <div className="bg-[#f8fbff] p-8 md:p-12 rounded-3xl border border-blue-50 shadow-md">
        <div className="text-center mb-12">
          <div className="inline-flex p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
            <Calculator className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-extrabold text-[#1c2b4d] mb-3">Beginner-Friendly Loan Calculator</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Choose your loan terms and see details instantly. Hover over the <HelpCircle className="inline w-4.5 h-4.5 text-blue-500 mb-0.5" /> icons to learn what each number means!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Sliders (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Loan Amount */}
            <div className="relative">
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg font-bold text-[#1c2b4d] flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-blue-50 text-blue-600"><DollarSign className="w-4 h-4" /></span>
                  Loan Amount
                  <button 
                    onClick={() => setActiveTooltip(activeTooltip === "amount" ? null : "amount")}
                    className="text-gray-400 hover:text-blue-600 transition"
                    title="Learn about Loan Amount"
                  >
                    <HelpCircle className="w-5 h-5" />
                  </button>
                </label>
                <div className="bg-white px-4 py-2 rounded-xl font-extrabold text-[#1c2b4d] shadow-sm border border-gray-150 flex items-center gap-2 min-w-[130px] justify-between">
                  <span>₹{amount.toLocaleString()}</span>
                </div>
              </div>
              
              {activeTooltip === "amount" && (
                <div className="mb-4 p-4 bg-blue-50 border border-blue-100 rounded-2xl text-sm text-blue-800 leading-relaxed animate-fadeIn">
                  {terms.amount}
                </div>
              )}

              <input 
                type="range" 
                min="50000" max="500000" step="5000" 
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" 
                value={amount} 
                onChange={(e) => setAmount(Number(e.target.value))} 
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1 font-semibold">
                <span>₹50K</span>
                <span>₹5 Lakhs</span>
              </div>
            </div>

            {/* Interest */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg font-bold text-[#1c2b4d] flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-purple-50 text-purple-600"><Percent className="w-4 h-4" /></span>
                  Interest Rate
                  <button 
                    onClick={() => setActiveTooltip(activeTooltip === "interest" ? null : "interest")}
                    className="text-gray-400 hover:text-purple-600 transition"
                    title="Learn about Interest Rate"
                  >
                    <HelpCircle className="w-5 h-5" />
                  </button>
                </label>
                <div className="bg-white px-4 py-2 rounded-xl font-extrabold text-[#1c2b4d] shadow-sm border border-gray-150 flex items-center gap-2 min-w-[130px] justify-between">
                  <span>{interestRate}% p.a.</span>
                </div>
              </div>

              {activeTooltip === "interest" && (
                <div className="mb-4 p-4 bg-purple-50 border border-purple-100 rounded-2xl text-sm text-purple-800 leading-relaxed animate-fadeIn">
                  {terms.interest}
                </div>
              )}

              <input 
                type="range" 
                min="8" max="24" step="0.5" 
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500" 
                value={interestRate} 
                onChange={(e) => setInterestRate(Number(e.target.value))} 
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1 font-semibold">
                <span>8%</span>
                <span>24%</span>
              </div>
            </div>

            {/* Tenure */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg font-bold text-[#1c2b4d] flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-teal-50 text-teal-600"><Calendar className="w-4 h-4" /></span>
                  Tenure (Repayment Term)
                  <button 
                    onClick={() => setActiveTooltip(activeTooltip === "tenure" ? null : "tenure")}
                    className="text-gray-400 hover:text-teal-600 transition"
                    title="Learn about Tenure"
                  >
                    <HelpCircle className="w-5 h-5" />
                  </button>
                </label>
                <div className="bg-white px-4 py-2 rounded-xl font-extrabold text-[#1c2b4d] shadow-sm border border-gray-150 flex items-center gap-2 min-w-[130px] justify-between">
                  <span>{tenure} Days ({months} Mo.)</span>
                </div>
              </div>

              {activeTooltip === "tenure" && (
                <div className="mb-4 p-4 bg-teal-50 border border-teal-100 rounded-2xl text-sm text-teal-800 leading-relaxed animate-fadeIn">
                  {terms.tenure}
                </div>
              )}

              <input 
                type="range" 
                min="30" max="365" step="1" 
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-500" 
                value={tenure} 
                onChange={(e) => setTenure(Number(e.target.value))} 
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1 font-semibold">
                <span>30 Days</span>
                <span>365 Days</span>
              </div>
            </div>

          </div>

          {/* Right Side: Circular Visualization + Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex flex-col justify-between items-center">
            
            {/* Donut Chart Display */}
            <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                {/* Gray Background Circle */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  className="stroke-gray-100 fill-none"
                  strokeWidth="10"
                />
                
                {/* Principal Segment */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  className="stroke-blue-600 fill-none transition-all duration-300"
                  strokeWidth="10"
                  strokeDasharray={`${principalStroke} ${circumference}`}
                  strokeDashoffset="0"
                  strokeLinecap="round"
                />
                
                {/* Interest Segment */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  className="stroke-purple-500 fill-none transition-all duration-300"
                  strokeWidth="10"
                  strokeDasharray={`${interestStroke} ${circumference}`}
                  strokeDashoffset={-principalStroke}
                  strokeLinecap="round"
                />
              </svg>
              
              {/* Central Information text */}
              <div className="absolute flex flex-col items-center justify-center text-center">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Approx. EMI</span>
                <span className="text-2xl font-black text-gray-900 mt-0.5">₹{emi.toLocaleString()}</span>
                <span className="text-[10px] text-gray-400 font-semibold mt-0.5">per month</span>
              </div>
            </div>

            {/* Breakdowns */}
            <div className="w-full space-y-4 mb-8">
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  <span className="text-gray-600 font-semibold text-sm">Principal Amount</span>
                </div>
                <span className="font-extrabold text-gray-900">₹{amount.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span className="text-gray-600 font-semibold text-sm flex items-center gap-1">
                    Total Interest
                    <button 
                      onClick={() => setActiveTooltip(activeTooltip === "emi" ? null : "emi")}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <HelpCircle className="w-4 h-4" />
                    </button>
                  </span>
                </div>
                <span className="font-extrabold text-purple-600">+ ₹{simpleInterest.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-gray-800 font-bold text-base">Total Amount Due</span>
                <span className="font-black text-gray-900 text-lg">₹{totalAmount.toLocaleString()}</span>
              </div>
            </div>

            {activeTooltip === "emi" && (
              <div className="mb-4 p-4 bg-gray-50 border border-gray-150 rounded-2xl text-xs text-gray-700 leading-relaxed text-left w-full animate-fadeIn">
                {terms.emi}
              </div>
            )}

            <Link href="/apply" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-blue-200">
              Apply for Loan <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Beginner Glossary Cards */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50/50 p-8 rounded-3xl border border-blue-50">
        <div className="flex items-center gap-2.5 mb-6 text-blue-800">
          <BookOpen className="w-6 h-6" />
          <h3 className="text-xl font-bold">Understanding Loan Terminology</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-white">
            <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> Principal
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              The primary sum of money borrowed. If you apply for a loan of ₹1,00,000, that starting amount is the Principal.
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-white">
            <h4 className="font-bold text-purple-900 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span> Interest Rate
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              The percentage fee the lender charges you to borrow the money. CreditSea calculates this using simple interest rules over the days your loan is active.
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-white">
            <h4 className="font-bold text-teal-900 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span> Tenure
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              The lifecycle or period of time you are given to pay the loan back. At CreditSea, you can select terms from 30 days up to 365 days.
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-white">
            <h4 className="font-bold text-[#1c2b4d] mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#1c2b4d]"></span> EMI (Installment)
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Equated Monthly Installment. To make payments manageable, we break the total repayment (Principal + Interest) down into a simple monthly amount.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

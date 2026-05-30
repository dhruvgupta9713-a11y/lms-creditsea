"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "What is CreditSea?",
      answer: "CreditSea is a digital lending platform that provides instant personal loans and credit builder loans to help manage expenses and enhance credit scores."
    },
    {
      question: "What types of loans does CreditSea offer?",
      answer: "We offer personal loans ranging from ₹50,000 to ₹5,00,000 with flexible tenures from 30 to 365 days."
    },
    {
      question: "Who is eligible to apply for a loan?",
      answer: "Indian residents between 23 and 50 years of age with a minimum monthly income of ₹25,000 (Salaried or Self-Employed) and a valid PAN card."
    },
    {
      question: "Is CreditSea a secure platform?",
      answer: "Yes, we use bank-grade encryption and advanced Business Rule Engines to securely process and evaluate all applications."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-extrabold text-[#3a415a] text-center mb-12">Frequently Asked Questions</h2>
      
      <div className="mb-4">
        <span className="text-blue-600 font-bold text-lg">General Questions</span>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className={`border rounded-lg overflow-hidden transition-all duration-200 ${openIndex === index ? 'border-blue-200 shadow-sm' : 'border-gray-200'}`}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition"
            >
              <span className={`font-semibold text-left ${openIndex === index ? 'text-blue-600' : 'text-[#3a415a]'}`}>
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-blue-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-5 bg-white border-t border-gray-100">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-blue-600 hover:bg-blue-50 transition shadow-sm">
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

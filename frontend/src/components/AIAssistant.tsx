"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, MessageCircle } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello! I am your CreditSea Assistant. How can I help solve your doubts about personal loans or eligibility today?",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const presets = [
    { label: "Am I eligible?", query: "Check my eligibility criteria" },
    { label: "What is the interest rate?", query: "What is the interest rate?" },
    { label: "What documents are required?", query: "What documents do I need to upload?" },
    { label: "Who is your lending partner?", query: "Who is your lending partner?" },
    { label: "How do I repay my loan?", query: "How do I repay my loan?" },
  ];

  const getBotResponse = (query: string): string => {
    const q = query.toLowerCase();
    
    if (q.includes("eligib") || q.includes("apply") || q.includes("age") || q.includes("salary")) {
      return "To be eligible for a CreditSea loan: \n1. Age must be between 23 and 50 years.\n2. Minimum monthly income of ₹25,000.\n3. Must be a resident Indian citizen with a valid PAN.\n4. Salaried or Self-Employed. You can click 'Apply for Loan' to start the paperless process!";
    }
    if (q.includes("interest") || q.includes("rate") || q.includes("charges") || q.includes("cost") || q.includes("fee")) {
      return "CreditSea offers transparent pricing. Our Personal Loans have an interest rate of 12% p.a. calculated as simple interest. Credit Builder loans are 10% p.a., and Business loans are 14% p.a. There are absolutely no prepayment or foreclosure fees!";
    }
    if (q.includes("document") || q.includes("slip") || q.includes("upload") || q.includes("file") || q.includes("pdf")) {
      return "We keep it simple! You only need to provide:\n1. Your PAN Card details for real-time eligibility.\n2. Your recent monthly Salary Slip (PDF, JPG, or PNG format, max size 5MB) during the upload step.";
    }
    if (q.includes("partner") || q.includes("nbfc") || q.includes("rbi") || q.includes("meghdoot") || q.includes("registered")) {
      return "Safety is our priority. CreditSea connects you with RBI-registered lending partners. Our primary lending partner is Meghdoot Mercantile Private Limited, an RBI-registered NBFC.";
    }
    if (q.includes("repay") || q.includes("payment") || q.includes("utr") || q.includes("close") || q.includes("settle")) {
      return "Repayments are secure. You can make an IMPS, NEFT, or UPI transfer directly to our escrow account (details are listed on our Repay page). Once the transfer succeeds, copy the 12-digit UTR code and share it with support to close your loan.";
    }
    
    return "I'm here to help solve any doubts you have about CreditSea! You can ask me about eligibility criteria, interest rates, documents required, lending partners, or loan repayment steps.";
  };

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    // Add User Message
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: textToSend,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    
    // Trigger Typing indicator
    setIsTyping(true);

    // Simulate bot delay
    setTimeout(() => {
      const botResponseText = getBotResponse(textToSend);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: botResponseText,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  // Scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Icon Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group relative border border-blue-500"
          aria-label="Ask AI Assistant"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
          </span>
          <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform duration-200" />
        </button>
      )}

      {/* Chat Window Popup */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[550px] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-fadeIn relative z-50">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-4 text-white flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm tracking-wide">CreditSea Support AI</h3>
                <span className="text-[10px] text-emerald-300 font-bold flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                  Online & Active
                </span>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-5 space-y-4 bg-gray-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line shadow-sm border ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white border-blue-500 rounded-br-none"
                      : "bg-white text-gray-800 border-gray-150 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-150 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
              </div>
            )}
            
            <div ref={chatEndRef} />
          </div>

          {/* Quick presets */}
          <div className="px-4 py-2 bg-white border-t border-gray-100 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-none">
            {presets.map((preset, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(preset.query)}
                className="bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100 transition shrink-0"
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* Input field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputText);
            }}
            className="p-4 bg-white border-t border-gray-100 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask a doubt about loans..."
              className="flex-grow px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm bg-gray-50 placeholder-gray-400"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button
              type="submit"
              className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition shadow-md shadow-blue-100 flex items-center justify-center shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}

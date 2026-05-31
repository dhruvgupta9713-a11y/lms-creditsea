"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/lib/api";

export default function SanctionModule() {
  const [loans, setLoans] = useState([]);

  const fetchLoans = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API_URL}/api/dashboard/sanction/loans`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLoans(res.data.loans);
    } catch (err) {
      console.error("Error fetching loans", err);
    }
  };

  useEffect(() => {
    fetchLoans();
  }, []);

  const handleAction = async (id: string, status: string) => {
    let reason = "";
    if (status === "Rejected") {
      reason = prompt("Please provide a rejection reason:") || "Not specified";
    }
    
    try {
      const token = localStorage.getItem("token");
      await axios.patch(`${API_URL}/api/dashboard/sanction/loans/${id}`, { status, rejectionReason: reason }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchLoans();
    } catch (err) {
      console.error("Error updating loan", err);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Sanction Module</h1>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">PAN</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Tenure</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Salary Slip</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {loans.map((loan: any) => (
              <tr key={loan._id}>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{loan.borrowerId?.pan}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">₹{loan.amount.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{loan.tenure} days</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {loan.borrowerId?.salarySlipUrl && (
                    <a href={`${API_URL}${loan.borrowerId.salarySlipUrl}`} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">View Slip</a>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                  <button onClick={() => handleAction(loan._id, "Approved")} className="px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200 font-medium text-sm">Approve</button>
                  <button onClick={() => handleAction(loan._id, "Rejected")} className="px-3 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200 font-medium text-sm">Reject</button>
                </td>
              </tr>
            ))}
            {loans.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">No pending loans found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

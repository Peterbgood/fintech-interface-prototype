import './style.css'  // Make sure this matches your filename exactly
import React from 'react'
import ReactDOM from 'react-dom/client'

/**
 * LedgerApp Component
 * A high-fidelity financial dashboard interface.
 */
const LedgerApp = () => {
  const transactions = [
    { id: 1, name: 'Cloud Services - AWS', date: 'Mar 28', amount: -1240.00, status: 'Completed' },
    { id: 2, name: 'Payment from Stripe', date: 'Mar 27', amount: 4500.50, status: 'Pending' },
    { id: 3, name: 'Office Lease - Knoxville', date: 'Mar 25', amount: -2100.00, status: 'Completed' },
    { id: 4, name: 'Payroll Deposit', date: 'Mar 24', amount: 8200.00, status: 'Completed' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">FiscalFlow Ledger</h1>
            <p className="text-slate-500 text-sm">Enterprise Banking Prototype v1.0</p>
          </div>
          <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm border border-green-200">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Secure Environment
          </div>
        </header>

        {/* Balance Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 transition-hover hover:shadow-md">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Available Balance</p>
            <h2 className="text-3xl font-bold">$124,500.00</h2>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Monthly Inflow</p>
            <h2 className="text-3xl font-bold text-emerald-600">+$12,240</h2>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Monthly Outflow</p>
            <h2 className="text-3xl font-bold text-rose-500">-$3,340</h2>
          </div>
        </div>

        {/* Transaction Ledger Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white">
            <h3 className="font-bold text-lg text-slate-800">Recent Activity</h3>
            <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
              Export Statement
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                  <th className="px-6 py-4">Transaction Details</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4 text-right">Amount</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {transactions.map((t) => (
                  <tr key={t.id} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-700">{t.name}</div>
                      <div className="text-[10px] text-slate-400">ID: #TXN-00{t.id}992</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">{t.date}</td>
                    <td className={`px-6 py-4 text-right font-bold ${t.amount < 0 ? 'text-rose-500' : 'text-emerald-600'}`}>
                      {t.amount < 0 ? `-$${Math.abs(t.amount).toLocaleString()}` : `+$${t.amount.toLocaleString()}`}
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-[9px] font-black uppercase tracking-widest border border-slate-200">
                        {t.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 bg-slate-50 text-center border-t border-slate-100">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">End of encrypted ledger</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Mounting Logic
 * Safely targets the 'root' div in index.html and renders the application.
 */
const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <LedgerApp />
    </React.StrictMode>
  );
} else {
  console.error("Critical Error: Could not find root element to mount the Fintech application.");
}
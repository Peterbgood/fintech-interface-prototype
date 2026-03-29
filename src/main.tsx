import './style.css'
import React, { useState } from 'react' // 1. Added useState
import ReactDOM from 'react-dom/client'

const LedgerApp = () => {
  // 2. This is the "Brain" - it remembers the current tab
  const [activeTab, setActiveTab] = useState('Ledger');

  const transactions = [
    { id: 1, name: 'Cloud Services - AWS', date: 'Mar 28', amount: -1240.00, status: 'Completed', category: 'Infrastructure' },
    { id: 2, name: 'Payment from Stripe', date: 'Mar 27', amount: 4500.50, status: 'Pending', category: 'Revenue' },
    { id: 3, name: 'Office Lease - Knoxville', date: 'Mar 25', amount: -2100.00, status: 'Completed', category: 'Rent' },
    { id: 4, name: 'Payroll Deposit', date: 'Mar 24', amount: 8200.00, status: 'Completed', category: 'Operations' },
  ];

  // 3. Define what each "Room" looks like
  const renderContent = () => {
    if (activeTab === 'Dashboard') {
      return (
        <div className="p-12 bg-indigo-50 rounded-[2rem] border-2 border-dashed border-indigo-200 text-center">
          <h2 className="text-2xl font-bold text-indigo-400">Main Analytics Dashboard</h2>
          <p className="text-indigo-300">Charts and graphs would go here in the next version.</p>
        </div>
      );
    }

    if (activeTab === 'Settings') {
      return (
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
          <h2 className="text-xl font-bold mb-4">Account Settings</h2>
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-xl">Enable Two-Factor Authentication</div>
            <div className="p-4 bg-slate-50 rounded-xl">Change Primary Currency (USD)</div>
          </div>
        </div>
      );
    }

    // Default: The Ledger Table
    return (
      <section className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex justify-between items-center">
          <h3 className="font-bold text-xl text-slate-800">Transaction History</h3>
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-indigo-600 transition-all">Download CSV</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                <th className="px-8 py-5">Merchant / Source</th>
                <th className="px-8 py-5 text-right">Amount</th>
                <th className="px-8 py-5 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {transactions.map((t) => (
                <tr key={t.id} className="hover:bg-indigo-50/30 transition-all">
                  <td className="px-8 py-6">
                    <div className="font-bold text-slate-700">{t.name}</div>
                    <div className="text-[10px] text-slate-400 font-medium italic">{t.date}</div>
                  </td>
                  <td className={`px-8 py-6 text-right font-black text-lg ${t.amount < 0 ? 'text-slate-900' : 'text-emerald-600'}`}>
                    {t.amount < 0 ? `-$${Math.abs(t.amount).toLocaleString()}` : `+$${t.amount.toLocaleString()}`}
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border ${t.status === 'Completed' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-amber-50 text-amber-700 border-amber-100'}`}>
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 flex">
      {/* Sidebar */}
      <aside className="w-20 lg:w-64 bg-white border-r border-slate-200 flex flex-col p-6 space-y-8">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-indigo-200">F</div>
          <span className="font-bold text-xl tracking-tight hidden lg:block">FiscalFlow</span>
        </div>
        <nav className="flex-1 space-y-1">
          {['Dashboard', 'Ledger', 'Settings'].map((item) => (
            <button 
              key={item} 
              onClick={() => setActiveTab(item)} // 4. This updates the "Brain"
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === item ? 'bg-indigo-50 text-indigo-700' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'}`}
            >
              <span className="hidden lg:block">{item}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 lg:p-12 overflow-y-auto">
        <header className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">{activeTab}</h1>
            <p className="text-slate-500 font-medium">Enterprise Banking Prototype</p>
          </div>
        </header>

        {/* Dynamic Content */}
        {renderContent()} 
      </main>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <LedgerApp />
    </React.StrictMode>
  );
}
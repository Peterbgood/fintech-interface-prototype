import './style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

const LedgerApp = () => {
  const transactions = [
    { id: 1, name: 'Cloud Services - AWS', date: 'Mar 28', amount: -1240.00, status: 'Completed', category: 'Infrastructure' },
    { id: 2, name: 'Payment from Stripe', date: 'Mar 27', amount: 4500.50, status: 'Pending', category: 'Revenue' },
    { id: 3, name: 'Office Lease - Knoxville', date: 'Mar 25', amount: -2100.00, status: 'Completed', category: 'Rent' },
    { id: 4, name: 'Payroll Deposit', date: 'Mar 24', amount: 8200.00, status: 'Completed', category: 'Operations' },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 flex">
      {/* 1. Slim Professional Sidebar */}
      <aside className="w-20 lg:w-64 bg-white border-r border-slate-200 hidden md:flex flex-col p-6 space-y-8">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-indigo-200">F</div>
          <span className="font-bold text-xl tracking-tight hidden lg:block">FiscalFlow</span>
        </div>
        <nav className="flex-1 space-y-1">
          {['Dashboard', 'Ledger', 'Settings', 'Security'].map((item) => (
            <button key={item} className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${item === 'Ledger' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'}`}>
              <span className="hidden lg:block">{item}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* 2. Main Content Area */}
      <main className="flex-1 p-6 lg:p-12 overflow-y-auto">
        <header className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Account Overview</h1>
            <p className="text-slate-500 font-medium">Welcome back, Peter Good</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-3">
             <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
             <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Network Secure</span>
          </div>
        </header>

        {/* 3. Hero Cards with Glass Effects */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-indigo-600 p-8 rounded-[2rem] shadow-2xl shadow-indigo-200 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-indigo-100 text-xs font-bold uppercase tracking-widest mb-2">Total Liquidity</p>
              <h2 className="text-4xl font-black italic">$124,500.00</h2>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white opacity-10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
          </div>
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200 hover:border-indigo-100 transition-all">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">30D Inflow</p>
            <h2 className="text-3xl font-bold text-emerald-600">+$12,240</h2>
          </div>
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200 hover:border-rose-100 transition-all">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">30D Outflow</p>
            <h2 className="text-3xl font-bold text-rose-500">-$3,340</h2>
          </div>
        </section>

        {/* 4. The Interactive Table */}
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
                  <th className="px-8 py-5">Category</th>
                  <th className="px-8 py-5 text-right">Amount</th>
                  <th className="px-8 py-5 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {transactions.map((t) => (
                  <tr key={t.id} className="hover:bg-indigo-50/30 transition-all cursor-default group">
                    <td className="px-8 py-6">
                      <div className="font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">{t.name}</div>
                      <div className="text-[10px] text-slate-400 font-medium italic">{t.date} • Ref: {t.id}0029X</div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{t.category}</span>
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
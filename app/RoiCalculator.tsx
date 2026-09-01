"use client";

import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler);

export default function RoiCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(5000);
  const [chartData, setChartData] = useState<any>(null);

  // Constants based on average Indian market rates (2024/2025)
  const costPerKw = 60000;
  const unitsPerKw = 120; // Avg units generated per kW per month
  const gridRate = 8; // Avg cost per unit in INR

  // Derived values
  const unitsNeeded = monthlyBill / gridRate;
  const recommendedKw = Math.max(1, Math.ceil(unitsNeeded / unitsPerKw));
  const totalCost = recommendedKw * costPerKw;

  // PM Surya Ghar Subsidy Logic (Approx)
  let subsidy = 0;
  if (recommendedKw <= 2) {
    subsidy = recommendedKw * 30000;
  } else if (recommendedKw === 3) {
    subsidy = 78000;
  } else {
    subsidy = 78000; // Max subsidy cap
  }

  const netCost = totalCost - subsidy;
  const annualSavings = monthlyBill * 12;
  const paybackYears = (netCost / annualSavings).toFixed(1);
  const lifetimeSavings = (annualSavings * 25) - netCost;

  useEffect(() => {
    const years = Array.from({ length: 25 }, (_, i) => i + 1);
    const cashFlow = [];
    let currentExpense = annualSavings;
    let cumulativeSavings = -netCost;

    for (let i = 0; i < 25; i++) {
      cumulativeSavings += currentExpense;
      cashFlow.push(cumulativeSavings);
      currentExpense *= 1.04; // 4% annual grid price inflation
    }

    setChartData({
      labels: years,
      datasets: [
        {
          label: "Cumulative Net Savings (₹)",
          data: cashFlow,
          borderColor: "#10b981",
          backgroundColor: "rgba(16, 185, 129, 0.1)",
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 6,
        },
      ],
    });
  }, [monthlyBill, netCost, annualSavings]);

  const formatINR = (num: number) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(num);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Inputs & Stats */}
      <div className="lg:col-span-5 bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl shadow-2xl">
        <h3 className="text-2xl font-bold text-white mb-6">System Designer</h3>
        
        <label className="block text-sm font-medium text-slate-400 mb-2">Current Monthly Bill: {formatINR(monthlyBill)}</label>
        <input
          type="range"
          min="1000"
          max="50000"
          step="500"
          value={monthlyBill}
          onChange={(e) => setMonthlyBill(Number(e.target.value))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 mb-10"
        />

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <div className="text-slate-400 text-sm mb-1">Recommended Size</div>
            <div className="text-2xl font-bold text-white">{recommendedKw} kW</div>
          </div>
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <div className="text-slate-400 text-sm mb-1">Gov. Subsidy</div>
            <div className="text-2xl font-bold text-emerald-400">{formatINR(subsidy)}</div>
          </div>
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <div className="text-slate-400 text-sm mb-1">Net Investment</div>
            <div className="text-2xl font-bold text-white">{formatINR(netCost)}</div>
          </div>
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <div className="text-slate-400 text-sm mb-1">Payback Period</div>
            <div className="text-2xl font-bold text-white">{paybackYears} Yrs</div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-br from-emerald-900/40 to-teal-900/40 border border-emerald-500/20 rounded-2xl">
          <div className="text-emerald-300 text-sm font-medium mb-1">25-Year Lifetime Savings</div>
          <div className="text-4xl font-extrabold text-white">{formatINR(lifetimeSavings)}</div>
        </div>
      </div>

      {/* Chart */}
      <div className="lg:col-span-7 bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl shadow-2xl flex flex-col justify-center min-h-[400px]">
        <h3 className="text-lg font-semibold text-white mb-2">Return on Investment Projection</h3>
        <p className="text-sm text-slate-400 mb-6">Accounting for 4% historical annual utility inflation.</p>
        <div className="relative h-full w-full min-h-[300px]">
          {chartData && (
            <Line
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: { grid: { color: "rgba(255,255,255,0.05)" }, ticks: { color: "#94a3b8" } },
                  x: { grid: { display: false }, ticks: { color: "#94a3b8" } },
                },
                plugins: {
                  legend: { display: false },
                  tooltip: { mode: "index", intersect: false },
                },
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
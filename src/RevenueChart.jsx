import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", revenue: 1200 },
  { month: "Feb", revenue: 2100 },
  { month: "Mar", revenue: 1800 },
  { month: "Apr", revenue: 3200 },
  { month: "May", revenue: 2800 },
  { month: "Jun", revenue: 4500 }
];

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <h3 className="font-semibold mb-5">
        Revenue Overview
      </h3>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <AreaChart data={data}>
          <XAxis dataKey="month" />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#6366f1"
            fill="#c7d2fe"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
import { useMemo, useState } from "react";
import Card from "../components/ui/Card";
import { orders } from "../helperdata";

export default function Orders() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Paid", "Pending", "Failed", "Refunded"];

  const data = useMemo(() => {
    return orders.filter((o) => {
      const matchSearch =
        `${o.id} ${o.customer} ${o.email} ${o.city}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchFilter = filter === "All" || o.status === filter;

      return matchSearch && matchFilter;
    });
  }, [search, filter]);

  const statusUI = (status) => {
    switch (status) {
      case "Paid":
        return "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100";
      case "Pending":
        return "bg-amber-50 text-amber-600 ring-1 ring-amber-100";
      case "Failed":
        return "bg-rose-50 text-rose-600 ring-1 ring-rose-100";
      case "Refunded":
        return "bg-blue-50 text-blue-600 ring-1 ring-blue-100";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const revenue = orders
    .filter((o) => o.status === "Paid")
    .reduce((a, b) => a + b.amount, 0);

  return (
    <Card>
      {/* HEADER */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Orders Overview
        </h2>
        <p className="text-sm text-gray-500">
          Real-time order tracking and payment monitoring
        </p>
      </div>

      {/* KPI STRIP */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="p-4 rounded-2xl bg-emerald-50">
          <p className="text-xs text-gray-500">Revenue</p>
          <p className="text-lg font-bold text-emerald-600">
            ₹{revenue}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-gray-50">
          <p className="text-xs text-gray-500">Total Orders</p>
          <p className="text-lg font-bold text-gray-900">
            {orders.length}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50">
          <p className="text-xs text-gray-500">Pending</p>
          <p className="text-lg font-bold text-amber-600">
            {orders.filter((o) => o.status === "Pending").length}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-rose-50">
          <p className="text-xs text-gray-500">Failed</p>
          <p className="text-lg font-bold text-rose-600">
            {orders.filter((o) => o.status === "Failed").length}
          </p>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search orders, customers, city..."
          className="px-4 py-2 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none w-full md:w-80"
        />

        <div className="flex gap-2 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-2 text-sm rounded-xl transition ${
                filter === f
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ORDER LIST */}
      <div className="space-y-3">
        {data.map((o) => (
          <div
            key={o.id}
            className="p-5 rounded-2xl bg-white shadow-sm hover:shadow-lg transition group"
          >
            {/* TOP ROW */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-gray-900 group-hover:text-indigo-600">
                  {o.id}
                </p>
                <p className="text-xs text-gray-500">
                  {o.customer} • {o.email}
                </p>
                <p className="text-xs text-gray-400">
                  {o.city} • {o.date}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${statusUI(
                    o.status
                  )}`}
                >
                  {o.status}
                </span>

                <span className="px-3 py-1 rounded-full text-xs bg-gray-50 text-gray-600">
                  {o.method}
                </span>

                <span className="px-3 py-1 rounded-full text-xs bg-gray-50 text-gray-600">
                  {o.items} items
                </span>
              </div>

              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">
                  ₹{o.amount}
                </p>
                <p className="text-xs text-gray-400">total</p>
              </div>
            </div>

            {/* ACTION ROW */}
            <div className="flex justify-end gap-4 mt-4 opacity-70 group-hover:opacity-100 transition">
              <button className="text-indigo-600 text-sm hover:underline">
                View
              </button>
              <button className="text-gray-600 text-sm hover:underline">
                Invoice
              </button>
              <button className="text-rose-600 text-sm hover:underline">
                Refund
              </button>
            </div>
          </div>
        ))}

        {data.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No matching orders found
          </div>
        )}
      </div>
    </Card>
  );
}
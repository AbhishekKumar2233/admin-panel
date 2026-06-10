import { useMemo, useState } from "react";
import Card from "../components/ui/Card";

const productsData = [
  {
    id: "PRD-1001",
    name: "Nike Air Max",
    category: "Shoes",
    price: 4999,
    stock: 24,
    status: "In Stock",
    sales: 120,
    rating: 4.5,
  },
  {
    id: "PRD-1002",
    name: "Apple Watch SE",
    category: "Electronics",
    price: 21999,
    stock: 8,
    status: "Low Stock",
    sales: 80,
    rating: 4.7,
  },
  {
    id: "PRD-1003",
    name: "Samsung Galaxy Buds",
    category: "Audio",
    price: 2999,
    stock: 0,
    status: "Out of Stock",
    sales: 200,
    rating: 4.3,
  },
  {
    id: "PRD-1004",
    name: "Puma Running Shoes",
    category: "Shoes",
    price: 3499,
    stock: 15,
    status: "In Stock",
    sales: 95,
    rating: 4.2,
  },
  {
    id: "PRD-1005",
    name: "MacBook Air M2",
    category: "Laptop",
    price: 99999,
    stock: 5,
    status: "Low Stock",
    sales: 60,
    rating: 4.8,
  },
  {
    id: "PRD-1006",
    name: "Sony Headphones",
    category: "Audio",
    price: 7999,
    stock: 30,
    status: "In Stock",
    sales: 140,
    rating: 4.6,
  },
];

export default function Products() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filters = ["All", "In Stock", "Low Stock", "Out of Stock"];

  const filtered = useMemo(() => {
    return productsData.filter((p) => {
      const matchSearch =
        `${p.name} ${p.category} ${p.id}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchFilter = filter === "All" || p.status === filter;

      return matchSearch && matchFilter;
    });
  }, [search, filter]);

  const statusUI = (status) => {
    switch (status) {
      case "In Stock":
        return "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100";
      case "Low Stock":
        return "bg-amber-50 text-amber-600 ring-1 ring-amber-100";
      case "Out of Stock":
        return "bg-rose-50 text-rose-600 ring-1 ring-rose-100";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const revenue = productsData.reduce(
    (acc, p) => acc + p.price * p.sales,
    0
  );

  return (
    <Card>
      {/* HEADER */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Product Inventory
        </h2>
        <p className="text-sm text-gray-500">
          Manage stock, pricing and sales performance
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="p-4 rounded-2xl bg-emerald-50">
          <p className="text-xs text-gray-500">In Stock</p>
          <p className="text-lg font-bold text-emerald-600">
            {productsData.filter((p) => p.status === "In Stock").length}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50">
          <p className="text-xs text-gray-500">Low Stock</p>
          <p className="text-lg font-bold text-amber-600">
            {productsData.filter((p) => p.status === "Low Stock").length}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-rose-50">
          <p className="text-xs text-gray-500">Out of Stock</p>
          <p className="text-lg font-bold text-rose-600">
            {productsData.filter((p) => p.status === "Out of Stock").length}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-gray-50">
          <p className="text-xs text-gray-500">Total Revenue</p>
          <p className="text-lg font-bold text-gray-900">
            ₹{revenue}
          </p>
        </div>
      </div>

      {/* FILTERS */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products, category, ID..."
          className="px-4 py-2 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none w-full md:w-80"
        />

        <div className="flex flex-wrap gap-2">
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

      {/* PRODUCT LIST */}
      <div className="space-y-3">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="p-5 rounded-2xl bg-white shadow-sm hover:shadow-lg transition group"
          >
            {/* TOP */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-gray-900 group-hover:text-indigo-600">
                  {p.name}
                </p>
                <p className="text-xs text-gray-500">
                  {p.id} • {p.category}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${statusUI(
                    p.status
                  )}`}
                >
                  {p.status}
                </span>

                <span className="px-3 py-1 rounded-full text-xs bg-gray-50 text-gray-600">
                  ⭐ {p.rating}
                </span>

                <span className="px-3 py-1 rounded-full text-xs bg-gray-50 text-gray-600">
                  {p.sales} sold
                </span>
              </div>

              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">
                  ₹{p.price}
                </p>
                <p className="text-xs text-gray-400">
                  Stock: {p.stock}
                </p>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex justify-end gap-4 mt-4 opacity-70 group-hover:opacity-100 transition">
              <button className="text-indigo-600 text-sm hover:underline">
                Edit
              </button>
              <button className="text-gray-600 text-sm hover:underline">
                View
              </button>
              <button className="text-rose-600 text-sm hover:underline">
                Delete
              </button>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No products found
          </div>
        )}
      </div>
    </Card>
  );
}
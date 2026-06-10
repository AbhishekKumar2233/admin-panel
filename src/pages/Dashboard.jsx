import React,{useEffect} from "react";
import Card from "../components/ui/Card";
import useData from "../hook/mockData";
import "../lib/chartSetup";
import {orders,products} from '../helperdata'

import { Line, Bar } from "react-chartjs-2";
export default function Dashboard() {
  const {users} = useData()
  const stats = {
    users: users?.length || 0,
    orders: orders?.length || 0,
    products: products?.length || 0,
    revenue:
      orders?.reduce((acc, o) => acc + (o.amount || 0), 0) || 0,
  };

  const labels = orders.map((o, i) => `O${i + 1}`);

  const revenueData = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: orders.map((o) => o.amount*Math.random()+2 || 0),
        borderColor: "#6366f1",
        backgroundColor: "rgba(99,102,241,0.15)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const orderTrendData = {
    labels,
    datasets: [
      {
        label: "Orders Trend",
        data: orders.map((o, i) => i + 1),
        backgroundColor: "#f59e0b",
      },
    ],
  };

  const userActivityData = {
    labels: users.map((u) => u.name),
    datasets: [
      {
        label: "User Activity Score",
        data: users.map((_, i) => {
          const relatedOrders = orders.filter(
            (_, idx) => idx % users.length === i
          ).length;

          return relatedOrders * 10 + Math.floor(Math.random() * 20);
        }),
        borderColor: "#10b981",
        backgroundColor: "rgba(16,185,129,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return (
    <div className="space-y-6">

      {/* HEADER (UNCHANGED) */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Dashboard Overview
        </h1>
        <p className="text-sm text-gray-500">
          Real-time system performance and business metrics
        </p>
      </div>

      {/* KPI GRID (UNCHANGED) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        <Card>
          <p className="text-xs text-gray-500">Users</p>
          <h2 className="text-2xl font-bold text-gray-900">
            {stats.users}
          </h2>
        </Card>

        <Card>
          <p className="text-xs text-gray-500">Orders</p>
          <h2 className="text-2xl font-bold text-gray-900">
            {stats.orders}
          </h2>
        </Card>

        <Card>
          <p className="text-xs text-gray-500">Products</p>
          <h2 className="text-2xl font-bold text-gray-900">
            {stats.products}
          </h2>
        </Card>

        <Card>
          <p className="text-xs text-gray-500">Revenue</p>
          <h2 className="text-2xl font-bold text-gray-900">
            ₹{stats.revenue}
          </h2>
        </Card>

      </div>

      {/* MAIN GRID (UNCHANGED STRUCTURE) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* SYSTEM OVERVIEW (UNCHANGED) */}
        <Card className="lg:col-span-2">
          <div className="mb-4">
            <h2 className="font-semibold text-gray-900">
              System Overview
            </h2>
            <p className="text-xs text-gray-500">
              Live operational metrics
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 rounded-xl bg-gray-50">
              <p className="text-xs text-gray-500">Users</p>
              <p className="text-lg font-semibold">{stats.users}</p>
            </div>

            <div className="p-3 rounded-xl bg-gray-50">
              <p className="text-xs text-gray-500">Orders</p>
              <p className="text-lg font-semibold">{stats.orders}</p>
            </div>

            <div className="p-3 rounded-xl bg-gray-50">
              <p className="text-xs text-gray-500">Products</p>
              <p className="text-lg font-semibold">
                {stats.products}
              </p>
            </div>
          </div>
        </Card>

        {/* STATUS PANEL (UNCHANGED) */}
        <Card>
          <h2 className="font-semibold text-gray-900 mb-3">
            System Status
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">API</span>
              <span className="text-emerald-600 font-medium">
                Healthy
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Database</span>
              <span className="text-emerald-600 font-medium">
                Connected
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Server</span>
              <span className="text-emerald-600 font-medium">
                Online
              </span>
            </div>
          </div>
        </Card>
      </div>
      
      {/* NEW: CHARTS ADDED WITHOUT DESIGN CHANGE */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        <Card>
          <h2 className="font-semibold mb-3">Revenue Trend</h2>
          <Line data={revenueData} />
        </Card>

        <Card>
          <h2 className="font-semibold mb-3">Order Trend</h2>
          <Bar data={orderTrendData} />
        </Card>

        <Card>
          <h2 className="font-semibold mb-3">User Activity</h2>
          <Line data={userActivityData} />
        </Card>

      </div>

      {/* ACTIVITY + INSIGHTS (UNCHANGED) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        <Card>
          <h2 className="font-semibold text-gray-900 mb-3">
            Recent Activity
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-emerald-500">●</span>
              <p className="text-gray-600">New user registered</p>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-blue-500">●</span>
              <p className="text-gray-600">Order placed</p>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-indigo-500">●</span>
              <p className="text-gray-600">Product updated</p>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-amber-500">●</span>
              <p className="text-gray-600">Backup completed</p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="font-semibold text-gray-900 mb-3">
            Insights
          </h2>

          <div className="space-y-3 text-sm text-gray-600">
            <p>📈 Revenue is directly linked to order spikes</p>
            <p>👥 User activity increases mid-range orders</p>
            <p>💰 Stable upward growth across dataset</p>
          </div>
        </Card>
      </div>

    </div>
  );
}
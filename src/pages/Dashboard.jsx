import Card from "../components/ui/Card";
import { users, orders, products } from "../mockData";

export default function Dashboard() {
  const stats = {
    users: users?.length || 0,
    orders: orders?.length || 0,
    products: products?.length || 0,
    revenue:
      orders?.reduce((acc, o) => acc + (o.amount || 0), 0) || 0,
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Dashboard Overview
        </h1>
        <p className="text-sm text-gray-500">
          Real-time system performance and business metrics
        </p>
      </div>

      {/* KPI GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        <Card>
          <p className="text-xs text-gray-500">Users</p>
          <h2 className="text-2xl font-bold text-gray-900">
            {stats.users}
          </h2>
          <p className="text-xs text-emerald-600 mt-1">
            ▲ +12% growth
          </p>
        </Card>

        <Card>
          <p className="text-xs text-gray-500">Orders</p>
          <h2 className="text-2xl font-bold text-gray-900">
            {stats.orders}
          </h2>
          <p className="text-xs text-blue-600 mt-1">
            ▲ +8% this week
          </p>
        </Card>

        <Card>
          <p className="text-xs text-gray-500">Products</p>
          <h2 className="text-2xl font-bold text-gray-900">
            {stats.products}
          </h2>
          <p className="text-xs text-indigo-600 mt-1">
            Stable inventory
          </p>
        </Card>

        <Card>
          <p className="text-xs text-gray-500">Revenue</p>
          <h2 className="text-2xl font-bold text-gray-900">
            ₹{stats.revenue}
          </h2>
          <p className="text-xs text-emerald-600 mt-1">
            ▲ +15% this month
          </p>
        </Card>

      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* SYSTEM OVERVIEW */}
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
              <p className="text-lg font-semibold">
                {stats.users}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-gray-50">
              <p className="text-xs text-gray-500">Orders</p>
              <p className="text-lg font-semibold">
                {stats.orders}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-gray-50">
              <p className="text-xs text-gray-500">Products</p>
              <p className="text-lg font-semibold">
                {stats.products}
              </p>
            </div>
          </div>
        </Card>

        {/* STATUS PANEL */}
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

      {/* ACTIVITY + INSIGHTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* ACTIVITY FEED */}
        <Card>
          <h2 className="font-semibold text-gray-900 mb-3">
            Recent Activity
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-emerald-500">●</span>
              <p className="text-gray-600">
                New user registered
              </p>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-blue-500">●</span>
              <p className="text-gray-600">
                Order #1024 placed
              </p>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-indigo-500">●</span>
              <p className="text-gray-600">
                Product updated
              </p>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-amber-500">●</span>
              <p className="text-gray-600">
                Backup completed
              </p>
            </div>
          </div>
        </Card>

        {/* INSIGHTS */}
        <Card>
          <h2 className="font-semibold text-gray-900 mb-3">
            Insights
          </h2>

          <div className="space-y-3 text-sm text-gray-600">
            <p>
              📈 Orders are growing steadily compared to last week.
            </p>
            <p>
              👥 User acquisition rate is stable.
            </p>
            <p>
              💰 Revenue is trending upward from paid orders.
            </p>
          </div>
        </Card>

      </div>
    </div>
  );
}
import Card from "../components/ui/Card";

export default function Analytics() {
  return (
    <div className="space-y-4">
      {/* KPI CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <p className="text-xs text-gray-500">Revenue</p>
          <h2 className="text-xl font-bold text-emerald-600">
            ₹1,24,500
          </h2>
          <p className="text-xs text-gray-400">+12% this month</p>
        </Card>

        <Card>
          <p className="text-xs text-gray-500">Users</p>
          <h2 className="text-xl font-bold text-blue-600">8,420</h2>
          <p className="text-xs text-gray-400">+8% growth</p>
        </Card>

        <Card>
          <p className="text-xs text-gray-500">Orders</p>
          <h2 className="text-xl font-bold text-purple-600">1,230</h2>
          <p className="text-xs text-gray-400">+5% this week</p>
        </Card>

        <Card>
          <p className="text-xs text-gray-500">Conversion</p>
          <h2 className="text-xl font-bold text-amber-600">3.8%</h2>
          <p className="text-xs text-gray-400">+0.4% increase</p>
        </Card>
      </div>

      {/* MAIN CHARTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Revenue Chart */}
        <Card>
          <div className="mb-3">
            <h2 className="font-semibold text-gray-900">
              Revenue Overview
            </h2>
            <p className="text-xs text-gray-500">
              Monthly earnings performance
            </p>
          </div>

          <div className="h-64 rounded-xl bg-gradient-to-br from-emerald-50 to-white flex items-center justify-center">
            <p className="text-gray-400 text-sm">
              📈 Revenue Chart Placeholder
            </p>
          </div>
        </Card>

        {/* User Growth */}
        <Card>
          <div className="mb-3">
            <h2 className="font-semibold text-gray-900">
              User Growth
            </h2>
            <p className="text-xs text-gray-500">
              Active users over time
            </p>
          </div>

          <div className="h-64 rounded-xl bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
            <p className="text-gray-400 text-sm">
              📊 User Growth Chart Placeholder
            </p>
          </div>
        </Card>
      </div>

      {/* LOWER SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <h3 className="font-semibold text-gray-900 mb-2">
            Top Products
          </h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• Nike Air Max</p>
            <p>• Apple Watch SE</p>
            <p>• MacBook Air</p>
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-gray-900 mb-2">
            Traffic Sources
          </h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• Google - 45%</p>
            <p>• Direct - 30%</p>
            <p>• Social - 25%</p>
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-gray-900 mb-2">
            Recent Activity
          </h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• New user registered</p>
            <p>• Order #1004 placed</p>
            <p>• Product updated</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
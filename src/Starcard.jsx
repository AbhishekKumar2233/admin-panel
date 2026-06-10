export default function StatCard({
  title,
  value,
  change,
  icon
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between">
        <div>
          <p className="text-gray-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

          <p className="text-green-500 mt-2">
            {change}
          </p>
        </div>

        <div>{icon}</div>
      </div>
    </div>
  );
}
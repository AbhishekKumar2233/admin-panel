const activities = [
  "John upgraded to Pro Plan",
  "New order received",
  "Product stock updated",
  "Payment successful",
  "New team member invited"
];

export default function ActivityFeed() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <h3 className="font-semibold mb-4">
        Recent Activity
      </h3>

      <div className="space-y-4">
        {activities.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-3"
          >
            <div className="w-3 h-3 rounded-full bg-indigo-500 mt-2" />

            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
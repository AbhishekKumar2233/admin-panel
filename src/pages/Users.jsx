import { useMemo, useState } from "react";
import Card from "../components/ui/Card";
import useData from "../hook/mockData";

const dummyUsers = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "amit@example.com",
    role: "Admin",
    status: "Active",
    lastActive: "2 min ago",
    location: "Delhi",
  },
  {
    id: 2,
    name: "Neha Verma",
    email: "neha@example.com",
    role: "Editor",
    status: "Active",
    lastActive: "10 min ago",
    location: "Mumbai",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    email: "rahul@example.com",
    role: "User",
    status: "Inactive",
    lastActive: "2 days ago",
    location: "Bangalore",
  },
  {
    id: 4,
    name: "Sara Khan",
    email: "sara@example.com",
    role: "User",
    status: "Active",
    lastActive: "1 hour ago",
    location: "Lucknow",
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "vikram@example.com",
    role: "Moderator",
    status: "Inactive",
    lastActive: "5 days ago",
    location: "Pune",
  },
  {
    id: 6,
    name: "Priya Nair",
    email: "priya@example.com",
    role: "User",
    status: "Active",
    lastActive: "Just now",
    location: "Kochi",
  },
];

export default function Users() {
  const {users} = useData()
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  const roles = ["All", "Admin", "Editor", "User", "Moderator"];
  const filtered = useMemo(() => {
    return users.filter((u) => {
      const matchSearch =
        `${u.name} ${u.email} ${u.location}`
          .toLowerCase()
          .includes(search.toLowerCase());


      return matchSearch;
    });
  }, [search,users]);

  const activeCount = users.filter(u => u.status === true).length;
  const inactiveCount = users.length - activeCount;

  const statusStyle = (status) =>
    status === true
      ? "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100"
      : "bg-rose-50 text-rose-600 ring-1 ring-rose-100";

  const roleStyle = (role) => {
    switch (role) {
      case "Admin":
        return "bg-purple-50 text-purple-600 ring-1 ring-purple-100";
      case "Editor":
        return "bg-blue-50 text-blue-600 ring-1 ring-blue-100";
      case "Moderator":
        return "bg-amber-50 text-amber-600 ring-1 ring-amber-100";
      default:
        return "bg-gray-50 text-gray-600 ring-1 ring-gray-100";
    }
  };

  const timeAgo = (date) => {
  const now = new Date().getTime();
  const past = new Date(date).getTime();

  const diff = now - past; // difference in milliseconds

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes} min ago`;
  if (hours < 24) return `${hours} hr ago`;
  return `${days} days ago`;
};

  const initials = (name) =>
    name.split(" ").map(n => n[0]).join("").toUpperCase();

  return (
    <div className="space-y-4">

      {/* HEADER CARD */}
      <Card>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              User Directory
            </h2>
            <p className="text-sm text-gray-500">
              Manage users, roles, permissions, and activity
            </p>
          </div>

          <div className="flex gap-2 flex-col md:flex-row">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search users..."
              className="px-4 py-2 text-sm rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none w-full md:w-72"
            />

            {/* <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="px-3 py-2 text-sm rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              {roles.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select> */}
          </div>
        </div>

        {/* MINI KPI ROW */}
        <div className="grid grid-cols-2 gap-3 mt-5">
          <div className="p-3 rounded-xl bg-emerald-50">
            <p className="text-xs text-gray-500">Active Users</p>
            <p className="text-lg font-semibold text-emerald-600">
              {activeCount}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-rose-50">
            <p className="text-xs text-gray-500">Inactive Users</p>
            <p className="text-lg font-semibold text-rose-600">
              {inactiveCount}
            </p>
          </div>
        </div>
      </Card>

      {/* LIST */}
      <div className="space-y-3">

        {filtered.map((user) => (
          <Card key={user.id} className="hover:shadow-md transition">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

              {/* LEFT */}
              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center font-semibold shadow">
                  {initials(user.name)}
                </div>

                <div>
                  <p className="font-medium text-gray-900">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {user.email}
                  </p>
                  <p className="text-xs text-gray-400">
                    📍 {user.location}
                  </p>
                </div>

              </div>

              {/* MIDDLE */}
              <div className="flex gap-2 flex-wrap">
                <span className={`px-3 py-1 rounded-full text-xs ${roleStyle(user.role)}`}>
                  {user.role}
                </span>

                <span className={`px-3 py-1 rounded-full text-xs ${statusStyle(user.status)}`}>
                  {user.status===true?'Active':'Inactive'}
                </span>
              </div>

              {/* RIGHT */}
              <div className="text-right">
                <p className="text-xs text-gray-400">Last active</p>
                <p className="text-sm text-gray-600">
                  {timeAgo(user.lastActive)}
                </p>

                {/* <div className="flex gap-3 justify-end mt-2 text-sm">
                  <button className="text-indigo-600 hover:underline">
                    Edit
                  </button>
                  <button className="text-rose-600 hover:underline">
                    Remove
                  </button>
                </div> */}
              </div>

            </div>

          </Card>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No users found
          </div>
        )}

      </div>
    </div>
  );
}
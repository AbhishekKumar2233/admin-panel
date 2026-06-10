import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Package,
  BarChart3,
  Settings,
  UserCircle
} from "lucide-react";

const items = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Users", path: "/users", icon: Users },
  { name: "Orders", path: "/orders", icon: ShoppingCart },
  { name: "Products", path: "/products", icon: Package },
  { name: "Analytics", path: "/analytics", icon: BarChart3 },
  { name: "Settings", path: "/settings", icon: Settings },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 
      bg-gradient-to-b from-slate-950 to-slate-900 
      text-white flex flex-col border-r border-white/10">

      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <h1 className="text-xl font-bold tracking-wide">
          Admin Panel
        </h1>
        <p className="text-xs text-gray-400 mt-1">
          Control Center 2026
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all relative
                ${active
                  ? "bg-indigo-500/20 text-white"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
            >

              {/* Active Indicator Bar */}
              <span
                className={`absolute left-0 top-2 bottom-2 w-1 rounded-full transition-all
                  ${active ? "bg-indigo-500" : "bg-transparent group-hover:bg-indigo-400/50"}`}
              />

              <Icon size={18} />

              <span className="text-sm font-medium">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Footer Profile */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition">
          <UserCircle size={32} className="text-indigo-400" />

          <div className="flex flex-col">
            <span className="text-sm font-medium">
              Admin User
            </span>
            <span className="text-xs text-gray-400">
              admin@neo.com
            </span>
          </div>
        </div>
      </div>

    </aside>
  );
}
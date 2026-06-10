import { Search, Bell, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header
      className="h-16 px-6 flex items-center justify-between
      bg-gradient-to-r from-slate-950 to-slate-900
      border-b border-white/10 backdrop-blur-xl"
    >
      {/* Left: Search */}
      <div className="flex items-center gap-3 w-96">
        <div className="relative w-full">
          <Search
            size={18}
            className="absolute left-3 top-2.5 text-gray-400"
          />

          <input
            placeholder="Search anything..."
            className="w-full bg-white/5 border border-white/10
            pl-10 pr-4 py-2 rounded-xl
            text-sm text-white
            placeholder:text-gray-500
            outline-none
            focus:border-indigo-500 focus:bg-white/10 transition"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">

        {/* Notifications */}
        <button className="relative p-2 rounded-xl bg-white/5 hover:bg-white/10 transition">
          <Bell size={18} className="text-gray-300" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-white/10" />

        {/* Profile */}
        <div className="flex items-center gap-3 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 transition cursor-pointer">

          <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-sm font-bold">
            A
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-sm text-white">
              Admin
            </span>
            <span className="text-xs text-gray-400">
              admin@neo.com
            </span>
          </div>

          <ChevronDown size={16} className="text-gray-400" />
        </div>

      </div>
    </header>
  );
}
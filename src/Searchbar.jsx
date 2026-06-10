import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative">
      <Search
        size={18}
        className="absolute left-3 top-3"
      />

      <input
        placeholder="Search users..."
        className="pl-10 pr-4 py-2 border rounded-lg w-full"
      />
    </div>
  );
}
import StatusBadge from "./StatusBadge";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@test.com",
    status: "Completed"
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@test.com",
    status: "Pending"
  },
  {
    id: 3,
    name: "Alex Brown",
    email: "alex@test.com",
    status: "Cancelled"
  }
];

export default function UsersTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-50">
          <tr>
            <th className="p-4 text-left">
              Name
            </th>
            <th className="p-4 text-left">
              Email
            </th>
            <th className="p-4 text-left">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-t"
            >
              <td className="p-4">
                {user.name}
              </td>

              <td className="p-4">
                {user.email}
              </td>

              <td className="p-4">
                <StatusBadge
                  status={user.status}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
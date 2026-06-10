import { useEffect, useState } from "react";
import { getUsers, getOrders, getProducts } from "../api/api";

const useData = () => {
const [users, setUsers] = useState([]);

useEffect(() => {
  async function loadData() {
    const u = await getUsers();
    setUsers(u);
  }

  loadData();
}, []);

return {users}
}
export default useData
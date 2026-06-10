const BASE_URL = "https://6a29c809f59cb8f65f1d9b34.mockapi.io";

/* ---------------- USERS ---------------- */
export const getUsers = async () => {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

export const updateUser = async (id, data) => {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

/* ---------------- PRODUCTS ---------------- */
export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

/* ---------------- ORDERS ---------------- */
export const getOrders = async () => {
  const res = await fetch(`${BASE_URL}/orders`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};
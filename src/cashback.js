import axios from "axios";
import { useState, useEffect } from "react";

export default function Cashback() {
  let [user, setUser] = useState(null);
  let [amount, setAmount] = useState(0);

  useEffect(() => {
    axios.get("https://server-2x0d.onrender.com/data").then((res) => {
      let lastUser = res.data[res.data.length - 1];
      setUser(lastUser);
    });
  }, []);

  function handleCashback(e) {
    e.preventDefault();
    if (!user) return;

    let updatedUser = { ...user, amount: user.amount - Number(amount) };
    axios.put(`https://server-2x0d.onrender.com/update/${user._id}`, updatedUser).then(() => {
      setUser(updatedUser);
    });
  }

  return (
    <>
      <h1>Cashback</h1>
      {user && (
        <>
          <form onSubmit={handleCashback}>
            <input type="number" onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
            <button type="submit">Cashback</button>
          </form>
          <h2>Balance: {user.amount}</h2>
        </>
      )}
    </>
  );
}

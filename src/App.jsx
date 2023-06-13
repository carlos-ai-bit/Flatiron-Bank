import React from "react";
import { ViewTable } from "./Components/ViewTable";
import { useState, useEffect } from "react";
import "./App.css";
import { form } from "./Components/Form";
function App() {
  const [transactions, settransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/transactions").then((res) => res.json());
    then((data) => settransactions(data));
  }, []);
  console.log(transactions);
  return (
    <>
      <ViewTable transactions={transactions} />
    </>
  );
}

export default App;

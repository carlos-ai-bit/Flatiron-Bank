import {useState, useEffect} from 'react'
import './App.css'
import ViewTable from "./Components/ViewTable";
import {Form} from "./Components/Form"
function App() {
  const [transactions, setTransactions] =useState([])

  useEffect(() => {
    //fetch data
    fetch('http://localhost:8001/transactions')
    .then(response => response.json())
    .then(data => setTransactions(data))
  },[])

  return (
    <>
  <Form/>
      <ViewTable transactions={transactions} />
    </>
  );
  }

export default App;
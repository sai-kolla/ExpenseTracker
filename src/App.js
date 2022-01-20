import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prevState) => {
      return [
        expense,
        ...prevState
      ]
    });
  }

  return (
    <div>
      <NewExpense onSaveExpense={addExpense}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

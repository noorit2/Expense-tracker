import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import './ExpensesList';
import ExpensesList from "./ExpensesList";
import ChartExpenses from './ChartExpenses';
function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2022");
  function selectHandler(filteryear) {
    setSelectedYear(filteryear);
    console.log(filteryear);
  }
const filteredExpenses=props.items.filter(expense => {return expense.date.getFullYear() == selectedYear;}); //filter return an array of items that fullfill the condition
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onYearSelect={selectHandler} />
        <ChartExpenses expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;

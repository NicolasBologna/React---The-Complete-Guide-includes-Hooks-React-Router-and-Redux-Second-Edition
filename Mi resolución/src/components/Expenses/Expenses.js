import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filter, setFilter] = useState(new Date().getFullYear());

  const changeFilterHandler = (newFilter) => {
    setFilter(newFilter);
    console.log(filter);
  };

  const filteredExpenses = props.items.filter(
    (x) => x.date.getFullYear().toString() === filter
  );


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={changeFilterHandler}
          selected={filter}
        ></ExpensesFilter>
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;

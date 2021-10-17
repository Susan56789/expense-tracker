import React,{useContext} from "react";
import '../App.css';
import { GlobalContext } from "../context/GlobalState";


const IncomeExpenses = () =>{
    const {transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction =>{
        return(transaction.amount);
    });

const income = amounts
  .filter( item => item > 0)
  .reduce((acc, item) => (acc +=item),0)
  .toFixed(2);

  const expense =(
      amounts
      .filter(item => item<0)
      .reduce((acc, item) => (acc +=item),0)*-1
  ).toFixed(2);

    return (
<div className="expenses-container">
    <div>
 <h4>Income</h4>  
 <p id="money-plus" >{income}</p> 
</div>

<div>
    <h4>Expense</h4>
    <p id="money-minus">{expense}</p>
</div>
</div>
    );
}

export default IncomeExpenses;
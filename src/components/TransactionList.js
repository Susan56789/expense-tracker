import React,{useContext} from "react";
import '../App.css';
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";


const TransactionList = () =>{
const {transactions} = useContext(GlobalContext);

    return(
<div className="transactions">
<h3>History</h3>
<ul id='list'>
    {transactions.map(transaction =>{
        return(<Transaction key={transaction.id} transaction={transaction}/>);
    })}

</ul>
</div>

    );
}

export default TransactionList;
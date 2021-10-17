import React,{useContext} from "react";
import '../App.css';
import { GlobalContext } from "../context/GlobalState";


export const Transaction =({transaction}) =>{
const sign = transaction.amount < 0 ? '-' : '+';

const {deleteTransaction} = useContext(GlobalContext);

return(

    <div className="transaction">
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
{transaction.type}  <span>{sign} Ksh. {Math.abs(transaction.amount)} </span> 
<button onClick={() => deleteTransaction(transaction.id)}
 className="delete-btn">X</button>
</li>
    </div>
);

}
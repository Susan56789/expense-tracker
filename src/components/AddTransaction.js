import React,{useState, useContext} from "react";
import '../App.css';
import { GlobalContext } from "../context/GlobalState";


const AddTransactions = () =>{
const [type, setType] = useState(' ');
const [amount, setAmount] = useState(0);

const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e =>{
        e.preventDefault();

        const newTransaction = {
         id:   Math.floor(Math.random()*1000000),
         type,
         amount:+amount
        }
        addTransaction(newTransaction);
    }
    
    return(
<div>
    <h3>Add new transactions</h3>
    <form id="form" onSubmit={onSubmit}>
<div className="form-control">
<label htmlFor='type'>Transaction type:</label>
    <input type='type' value={type} onChange={(e) => setType(e.target.value)} placeholder="Enter text ..." />
</div>
<div className="form-control">
    <label htmlFor='amount'>Amount:
    <br/>
    (negative - expense, positive - Income)
    </label>
    <input type='number'  value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount ..."/>
</div><br/>
<button className="btn">Add Transaction</button>
    </form>
</div>
    );
}

export default AddTransactions;
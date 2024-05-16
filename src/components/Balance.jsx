import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Pie from './Pie'
export default function Balance(){
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
  
    const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
  
    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ).toFixed(2);

  const balance=income-expense
  
    return(
        <div className="balance">
            <h3>Income:<span className="income_color">£{income}</span></h3>
            <h3>Balance:<span className="income_color">£{balance}</span></h3>
            <h3>Expense:<span className="expense_Color">£{expense}</span></h3>
           
        </div>
    )
}
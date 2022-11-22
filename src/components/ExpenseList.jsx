import React from 'react'
import Item from './ExpenseItem'
import {MdDelete} from 'react-icons/md'

const ExpenseList = ({expenses, clearAllExpenses, clearSingleExpense}) => {
return (
<>
   <ul className='list'>
    {expenses.map((expense)=> {
    return(
    <Item key={expense.id} amount={expense.amount} charge={expense.charge} id={expense.id} 
    clearSingleExpense={clearSingleExpense}
    />)})}
   </ul>
   {expenses.length > 0 && <button className='btn' onClick={clearAllExpenses}>
    clear expenses
    <MdDelete className='btn-icon'/> 
    </button>}
</>
  )}

export default ExpenseList
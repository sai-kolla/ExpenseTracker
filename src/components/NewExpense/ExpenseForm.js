import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [expenseTitle, setExpenseTitle] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
    const [expenseDate, setExpenseDate] = useState('');

    const titleChangeHandler = (e) => {
        setExpenseTitle(e.target.value);
    }

    const amountChangeHandler = (e) => {
        setExpenseAmount(e.target.value);
    }

    const dateChangeHandler = (e) => {
        setExpenseDate(e.target.value);
    }

    const addExpenseHandler = (e) => {
        e.preventDefault()
        const expenseInfo = {
            title: expenseTitle,
            amount: +expenseAmount,
            date: new Date(expenseDate)
        }
        props.onAddExpense(expenseInfo);
        setExpenseTitle('');
        setExpenseAmount('');
        setExpenseDate('');
    }

    return (
        <form onSubmit={addExpenseHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" name="" id="" value={expenseTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" value={expenseAmount} step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" value={expenseDate} max="2024-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
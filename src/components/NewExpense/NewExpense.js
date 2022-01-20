import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [showExpenseForm, setShowExpenseForm] = useState(false);

    const expenseData = (expenseInfo) => {
        const expense = {
            ...expenseInfo,
            id: Math.random().toString()
        };
        props.onSaveExpense(expense);
        setShowExpenseForm(false);
    }

    const onCancelHandler = () => setShowExpenseForm(false);

    return (
        <div className="new-expense">
            {!showExpenseForm && <button onClick={() => setShowExpenseForm(true)}>Add New Expense</button>}
            {showExpenseForm && <ExpenseForm onCancel={onCancelHandler} onAddExpense={expenseData} />}
        </div>
    )
}

export default NewExpense;
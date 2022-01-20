import Card from '../Common/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState(0);
    const items = props.expenses.filter(i => filteredYear > 0 ? i.date.getFullYear() === filteredYear : i);

    return (
        <Card className="expenses">
            <ExpensesFilter selectedFilter={filteredYear} currentFillter={(val) => setFilteredYear(parseInt(val))} />
            <ExpensesChart expenses={items}/>
            <ExpensesList items={items} />
        </Card>
    )
}

export default Expenses;
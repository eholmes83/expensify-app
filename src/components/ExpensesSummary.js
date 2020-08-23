import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import expenseTotals from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'

export const ExpensesSummary = ({ expenseCount, expensesTotals }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
  const formattedExpensesTotal = numeral(expensesTotals / 100).format('$0,0.00')
  return (
    <div>
      <h1>Viewing { expenseCount } { expenseWord } totalling { formattedExpensesTotal }</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return {
    expenseCount: visibleExpenses.length,
    expensesTotals: expenseTotals(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
// import moment from 'moment'
import expenses from '../fixtures/expenses'
import selectExpensesTotal from '../../selectors/expenses-total.js'

test('should return 0 if no expenses', () => {
  const result = selectExpensesTotal([])
  expect(result).toBe(0)

})

test('should correctly add up a single expense', () => {
  const result = selectExpensesTotal([expenses[2]])
  expect(result).toEqual(4500)
})

test('should correctly add up multiple expenses', () => {
  const result = selectExpensesTotal(expenses)
  expect(result).toEqual(114195)
})
import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpense'
import expenses from '../fixtures/expenses'

let history, wrapper, editExpense, removeExpense

beforeEach(() => {
  history = { push: jest.fn() }
  editExpense = jest.fn()
  removeExpense = jest.fn()
  wrapper = shallow(
    <EditExpensePage 
      editExpense={editExpense} 
      removeExpense={removeExpense} 
      history={history}
      expense={expenses[0]} />)
})

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot()
})

// should handle editExpense
test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
})

// should handle removeExpense
test('should handle removeExpense', () => {
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[0].id })
})
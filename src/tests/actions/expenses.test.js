import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: 'abcd' })

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abcd'
   })
})

test('should setup edit expense action object', () => {
  const action = editExpense('abc123', { amount: 3400 })

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: {
      amount: 3400
    }
  })
})

test('should setup add expense action object with provided values', () => {
  const action = addExpense({
    description: 'lunch',
    amount: 100,
    createdAt: -1000,
    note: ''
  })

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: 'lunch',
      createdAt: -1000,
      note: '',
      id: expect.any(String),
      amount: 100
    }
  })
})

test('should setup add expense action object with default values', () => {
  const action = addExpense()

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      amount: 0,
      note: '',
      createdAt: 0,
      id: expect.any(String)
    }
  })
})
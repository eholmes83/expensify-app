import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'

let sortByAmount, sortByDate, setTextFilter, setStartDate, setEndDate, wrapper

beforeEach(() => {
  sortByDate = jest.fn()
  sortByAmount = jest.fn()
  setEndDate = jest.fn()
  setStartDate = jest.fn()
  setTextFilter = jest.fn()
  wrapper = shallow(
    <ExpenseListFilters 
      filters={filters}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate} 
    />
  )
})

test('should render ExpenseListFilters', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt data', () => {
  wrapper.setProps({ filters: altFilters })
  expect(wrapper).toMatchSnapshot()
})

// should handle text change
test('should handle text change', () => {
  const value = 'blah'
  wrapper.find('input').simulate('change', {
      target: { value }
  })
  expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

// should sort by amount
test('should sort by amount', () => {
  const value = 'amount'
  wrapper.find('select').simulate('change', {
    target: { value }
  })
  expect(sortByAmount).toHaveBeenCalled()
})

// should sort by date
test('should sort by date', () => {
  const value = 'date'
  wrapper.find('select').simulate('change', {
    target: { value }
  })
  expect(sortByDate).toHaveBeenCalled()
})

// test('should sort by date', () => {
//   const value = 'date'
//   wrapper.setProps({ filters: altFilters })
//   wrapper.find('select').simulate('change', {
//     target: { value }
//   })
//   expect(sortByDate).toHaveBeenCalled()
// })


// should handle date changes
test('should handle date changes', () => {
  const startDate = moment(0).add(4, 'years')
  const endDate = moment(0).add(8, 'years')
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate })
  expect(setStartDate).toHaveBeenLastCalledWith(startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

// should handle date focus changes
test('should handle date changes', () => {
  const calendarFocused = 'endDate'
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused)
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})
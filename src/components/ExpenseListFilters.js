import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates' 
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'

export class ExpenseListFilters extends React.Component {
    
  state = {
    calendarFocused: null
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  } 

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value)
  }

  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate()
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount()}
    }

  render() {
    return (
      <div className='content-container'>
        <div className='input-group'>
          <div className='input-group__item'>
            <input
              className='text-input'
              type='text'
              value={this.props.filters.text}
              onChange={this.onTextChange} 
              placeholder='Search expenses'
            />
        </div>
        <div className='input-group__item'>
          <select
              className='select'
              type='text'
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}>
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
          </select>
        </div>
        <div className='input-group__item'>
          <DateRangePicker 
            startDate={this.props.filters.startDate}
            startDateId={'startDateId'}
            endDate={this.props.filters.endDate} 
            endDateId={'endDateId'}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            showClearDates={true}
        />
        </div>
      </div> 
    </div>
      )
    }
  }

const mapStateToProps = (state) => ({
    filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)

import { useRef  } from 'react';
import { Button } from '../../ui'
import classes from "./EventSearch.module.css";

const EventSearch = ({ onSearch }) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const submitHandler = (event) => {
    event.preventDefault()
    onSearch(yearInput.current.value, monthInput.current.value)
  }

  const yearInput = useRef()
  const monthInput = useRef()

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.controls}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInput}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.controls}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInput}>
            {months.map((month, index) => (
              <option value={index + 1} key={month}>{month}</option>
            ))}
          </select>
        </div>
      </div>
      <Button>Search Event</Button>
    </form>
  )
}

export default EventSearch

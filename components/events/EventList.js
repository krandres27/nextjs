import { EventItem } from './index'
import classes from './EventList.module.css'

const EventList = ({ events }) => {
  return (
    events.map(event => (
      <ul className={classes.list} key={event.id}>
        <EventItem event={event} />
      </ul>
    ))
  )
}

export default EventList

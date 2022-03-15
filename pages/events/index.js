import { getAllEvents } from '../../feed'
import { EventList } from '../../components/events'

const Events = () => {
  const events = getAllEvents()
  return <div>
    <EventList events={events} />
  </div>
}

export default Events

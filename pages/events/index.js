import { useRouter } from 'next/router'
import { getAllEvents } from '../../feed'
import { EventList } from '../../components/events'
import EventSearch from '../../components/EventSearch'

const Events = () => {
  const router = useRouter()
  const events = getAllEvents()

  const searchHandler = (year, month) => {
    console.log(year, 'aaa')
    router.push(`/events/${year}/${month}`)
  }
  
  return (
    <div>
      <EventSearch onSearch={searchHandler}/>
      <EventList events={events} />
    </div>
  );
}

export default Events

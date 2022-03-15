import { useRouter } from 'next/router'
import { getEventById } from '../../feed'
import EventContent from '../../components/event-detail/eventContent'
import EventSummary from '../../components/event-detail/EventSummary'
import EventLogistics from '../../components/event-detail/EventLogistics'

const EventDetail = () => {
  const router = useRouter();
  const { query: { eventId }} = router
  const event = getEventById(eventId)

  if (!event) {
    return (<p>No Event found!</p>)
  }

  return <>
    <EventSummary title={event.title} />
    <EventLogistics event={event} />
    <EventContent>{event.description}</EventContent>
  </>
}

export default EventDetail

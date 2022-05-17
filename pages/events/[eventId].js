import { getEventById, getAllEvents } from '../../helpers/api-util'
import EventContent from '../../components/event-detail/eventContent'
import EventSummary from '../../components/event-detail/EventSummary'
import EventLogistics from '../../components/event-detail/EventLogistics'

const EventDetail = ({ event }) => {
  if (!event) {
    return <p>Loading...</p>
  }

  return <>
    <EventSummary title={event.title} />
    <EventLogistics event={event} />
    <EventContent>{event.description}</EventContent>
  </>
}

export default EventDetail;

export async function getStaticProps(context) {
  const { params: { eventId }} = context;
  const event = await getEventById(eventId);

  if (!event) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      event
    },
    revalidate: 30
  }
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const pathsWithParams = events.map(event => ({ params: { eventId: event.id }}));

  return {
    paths: pathsWithParams,
    fallback: true 
  }
}

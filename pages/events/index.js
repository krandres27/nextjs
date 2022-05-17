import { useRouter } from 'next/router';
import { getAllEvents } from '../../helpers/api-util';
import { EventList } from '../../components/events';
import EventSearch from '../../components/EventSearch';

const Events = ({ events }) => {
  const router = useRouter();

  const searchHandler = (year, month) => {
    router.push(`/events/${year}/${month}`)
  }
  
  return (
    <div>
      <EventSearch onSearch={searchHandler}/>
      <EventList events={events} />
    </div>
  );
}

export default Events;

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events
    },
    revalidate: 60,
  }
}

import { getFilteredEvents } from '../../helpers/api-util';
import { EventList } from "../../components/events";

const FilteredEvents = ({ events }) => {
  if (false) {
    return <p>Loading ...</p>
  }

  return <div>
    <EventList events={events} />
  </div>
}

export default FilteredEvents;

export async function getServerSideProps(context) {
  const { params: { eventSlug } } = context;
  let [year, month] = eventSlug 
  const events = await getFilteredEvents({ year, month });

  if (!events.length) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      events
    }
  }
}

import { useRouter } from "next/router"
import { getFilteredEvents } from '../../feed'
import { EventList } from "../../components/events"

const FilteredEvents = () => {
  const router = useRouter()

  if (!router.query?.eventSlug) {
    return <p>Loading ...</p>
  }

  let [year, month] = router?.query?.eventSlug
  year -= 0
  month -= 0
  
  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
    ) {
      return <p>Please adjust your filters</p>;
    }
    
  const events = getFilteredEvents({ year, month })

  if (!events.length) {
    return <p>No events found</p>
  }

  return <div>
    <EventList events={events} />
  </div>
}

export default FilteredEvents

export async function getAllEvents() {
  let events = await (await fetch('https://nextjs-app-b6c53-default-rtdb.firebaseio.com/events.json')).json();
  const eventsArray = [];

  for (const key in events) {
    eventsArray.push({
      id: key,
      ...events[key]
    });
  }

  return eventsArray;
 }

export const getFeaturedEvents = async () => {
  const events = await getAllEvents();
  return events.filter((event) => event.isFeatured);
}

export const getEventById = async (id) => {
  const events = await getAllEvents();
  return events.find((event) => event.id === id);
}

export const getFilteredEvents = async (dateFilter) => {
  let { year, month } = dateFilter
  const events = await getAllEvents();
  
  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date)
    return eventDate.getFullYear() === parseInt(year) && eventDate.getMonth() === parseInt(month) - 1
  });
  
  return filteredEvents
}

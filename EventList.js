import React, { useEffect, useState } from 'react';
import API from '../api';

function EventList({ searchQuery }) {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const res = await API.get('/events');
    setEvents(res.data);
  };

  const deleteEvent = async (id) => {
    await API.delete(`/events/${id}`);
    fetchEvents();
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <h3>All Events</h3>
      {events
        .filter(e => e.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .map(event => (
        <div key={event._id}>
          <h4>{event.title}</h4>
          <p>{event.description}</p>
          <img src={`http://localhost:5000/${event.image}`} alt="" width="150" />
          <button onClick={() => deleteEvent(event._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default EventList;

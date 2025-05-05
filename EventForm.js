import React, { useState } from 'react';
import API from '../api';

function EventForm({ refreshEvents }) {
  const [form, setForm] = useState({ title: '', description: '', type: '' });
  const [image, setImage] = useState(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', form.title);
    data.append('description', form.description);
    data.append('type', form.type);
    data.append('image', image);

    try {
      await API.post('/events', data);
      refreshEvents();
      setForm({ title: '', description: '', type: '' });
      setImage(null);
    } catch {
      alert('Error adding event');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Event</h3>
      <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
      <input placeholder="Type" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Add Event</button>
    </form>
  );
}

export default EventForm;



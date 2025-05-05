import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './component/Register';
import Login from './component/Login';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import SearchBar from './components/SearchBar';
function App() {
  const [search, setSearch] = useState('');
   const [refreshFlag, setRefreshFlag] = useState(false);
    const refreshEvents = () => {
      setRefreshFlag(prev => !prev);
    };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <>
            <SearchBar setSearch={setSearch} />
            <EventForm refreshEvents={() => {}} />
            <EventList searchQuery={search} />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}
<Route path="*" element={<h2>404 - Page Not Found</h2>} />
export default App;



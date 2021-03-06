import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BiCalendar } from 'react-icons/bi';
import Search from './components/Search';
import { Container } from 'react-bootstrap';
import AddAppointment from './components/AddAppointment';
import AppointmentList from './components/AppointmentList';
import {useState, useEffect, useCallback} from 'react';

function App() {
  let [appointmentList, setAppointmentList] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("petName");
  let [orderBy, setOrderBy] = useState("asc");

  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => setAppointmentList(data));
  }, []);

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  const sortAppointments = (a, b) => {
    let order = (orderBy ===  'asc') ? 1 : -1;
    return (
      (a[sortBy].toLowerCase() < b[sortBy].toLowerCase()) ? (-1 * order) : (1 * order)
    );
  };

  const filteredAppointments = appointmentList.filter(item => {
    return (
      item.petName.toLowerCase().includes(query.toLowerCase()) ||
      item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
      item.aptNotes.toLowerCase().includes(query.toLowerCase())
    );
  }).sort(sortAppointments);

  const lastId = () => {
    return appointmentList.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max, 0);
  };

  return (
    <div className="App">
      <Container fluid>
        <h1 className="mt-3 mb-3">
          <BiCalendar className="header-icon" /> Your Appointments
        </h1>
        <AddAppointment lastId={lastId} 
                          onSendAppointment={(newApt) => setAppointmentList([...appointmentList, newApt])} />
        <Search query={query} 
                onQueryChange={(newValue) => setQuery(newValue)} 
                orderBy={orderBy}
                onOrderByChange={(newSort) => setOrderBy(newSort)}
                sortBy={sortBy}
                onSortByChange={(newSort) => setSortBy(newSort)} />
        <AppointmentList appointmentList={filteredAppointments} 
                          setAppointmentList={setAppointmentList} />
      </Container>
    </div>
  );
}

export default App;

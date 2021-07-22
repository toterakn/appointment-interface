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
  
  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => setAppointmentList(data));
  }, []);

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return (
    <div className="App">
      <Container fluid>
        <h1 className="mt-3 mb-3">
          <BiCalendar className="header-icon" /> Your Appointments
        </h1>
        <AddAppointment />
        <Search />
        <AppointmentList appointmentList={appointmentList} />
      </Container>
    </div>
  );
}

export default App;

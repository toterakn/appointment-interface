import { Container, Row, Button } from "react-bootstrap";
import { BiTrash } from "react-icons/bi";

const grey = {"color":"grey"};

const Appointment = ({appointment, deleteAppointment}) => {
    return(
        <Container>
            <Row style={grey} className="mt-1">{appointment.aptDate} {appointment.aptTime}</Row>
            <br />
             <Row className="text-left mb-2">
                <h4>
                    <span className="blue">{appointment.petName}</span>
                    <Button className="pull-right" variant="danger" 
                        onClick={() => deleteAppointment(appointment.id)}> <BiTrash /> </Button>
                </h4>
                <div><b>Owner: </b>{appointment.ownerName}</div>
                <div>{appointment.aptNotes}</div>
            </Row>
        </Container>
    );
};

export default Appointment;
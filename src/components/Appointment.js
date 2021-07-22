import { Container, Row, Button } from "react-bootstrap";
import { BiTrash } from "react-icons/bi";

const grey = {"color":"grey"};

const Appointment = ({appointment}) => {
    return(
        <Container>
            <Row style={grey} className="mt-1">{appointment.aptDate} {appointment.aptTime}</Row>
            <br />
             <Row className="text-left mb-2">
                <h4>
                    <span className="blue">{appointment.petName}</span>
                    <Button className="pull-right" variant="danger"> <BiTrash /> </Button>
                </h4>
                <div><b>Owner: </b>{appointment.ownerName}</div>
                <div>{appointment.aptNotes}</div>
            </Row>
        </Container>
    );
};

export default Appointment;
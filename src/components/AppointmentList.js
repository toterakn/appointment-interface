import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Appointment from "./Appointment";

const paddingRight={"padding-right":0};

const AppointmentList = ({appointmentList}) => {
    return(
        <Container>
             <Row className="justify-content-center">
                <ListGroup style={paddingRight}>
                    {appointmentList.map( (app, key) =>
                        <ListGroup.Item key={key}> 
                            <Appointment appointment={app} />
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Row>
        </Container>
    );
};

export default AppointmentList;
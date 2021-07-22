import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { useState } from 'react';
import { BiChevronDown, BiChevronRight, BiCalendar } from "react-icons/bi";

const AddAppointment = () => {
    let [toggleForm, setToggleForm] = useState(false);

    return(
        <Container className="well">
            <Row className="well-header" onClick={() => setToggleForm(!toggleForm)}>
                <h4 className="mt-1">
                    {toggleForm ? <BiChevronDown /> : <BiChevronRight />}
                    <BiCalendar /> Add Appointment
                </h4>
            </Row>

            { toggleForm ?
                <Row className="justify-content-center">
                    <Col>
                        <Form className="mb-3 mt-3">
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column xs="12" sm="12" md="4" lg="4" xl="4" className="text-right"> Owner Name </Form.Label>
                                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                    <Form.Control type="text" placeholder="Enter name" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                            <Form.Label column xs="12" sm="12" md="4" lg="4" xl="4" className="text-right"> Pet Name </Form.Label>
                            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                    <Form.Control type="text" placeholder="Enter name" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column xs="12" sm="12" md="4" lg="4" xl="4" className="text-right"> Apt Date</Form.Label>
                                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                    <Form.Control type="date" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                            <Form.Label column xs="12" sm="12" md="4" lg="4" xl="4" className="text-right"> Apt Time</Form.Label>
                                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                    <Form.Control type="time" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                            <Form.Label column xs="12" sm="12" md="4" lg="4" xl="4" className="text-right"> Apt Notes</Form.Label>
                                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                    <Form.Control as="textarea" placeholder="Enter detailed comments..."/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Col>
                                    <Button variant="primary">Submit</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                : <></>
            }
        </Container>
    );
};

export default AddAppointment;
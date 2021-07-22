import { Form, Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";

const DropDown = () => {
    return (
        <DropdownButton id="dropdown-basic-button" title="Sort By">
            <Dropdown.Item href="#/action-1">Pet Name</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Ownder Name</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Date</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Asc</Dropdown.Item>
            <Dropdown.Item href="#/action-5">Desc</Dropdown.Item>
        </DropdownButton>
    );
};

const Search = () => {
    return(
        <Container>
            <Row className="justify-content-center well">
                <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
                    <Form>
                        <Form.Group as={Row} className="mb-3 mt-3">
                            <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
                                <Form.Label htmlFor="query"> 
                                    <BiSearch />
                                </Form.Label>
                            </Col>
                            <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
                                <Form.Control type="text" 
                                    name="query" id="query" value="" />
                            </Col>
                            <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
                                <DropDown />
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Search;
import { Form, Container, Row, Col, Dropdown } from "react-bootstrap";
import { BiSearch, BiCheck } from "react-icons/bi";

const DropDown = ({sortBy, onSortByChange, orderBy, onOrderByChange}) => {
    return (
        <Dropdown autoClose="outside">
            <Dropdown.Toggle id="dropdown-autoclose-outside">
                Sort By
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => onSortByChange('petName')}>
                    Pet Name 
                    {(sortBy === 'petName') ? <BiCheck /> : <></>} 
                </Dropdown.Item>
                <Dropdown.Item onClick={() => onSortByChange('ownerName')}>
                    Ownder Name
                    {(sortBy === 'ownerName') ? <BiCheck /> : <></>} 
                </Dropdown.Item>
                <Dropdown.Item onClick={() => onSortByChange('aptDate')}>
                    Date
                    {(sortBy === 'date') ? <BiCheck /> : <></>} 
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => onOrderByChange('asc')}>
                    Asc
                    {(orderBy === 'asc') ? <BiCheck /> : <></>} 
                </Dropdown.Item>
                <Dropdown.Item onClick={() => onOrderByChange('desc')}>
                    Desc
                    {(orderBy === 'desc') ? <BiCheck /> : <></>} 
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

const Search = ({query, onQueryChange, sortBy, onSortByChange, orderBy, onOrderByChange}) => {
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
                                    name="query" id="query" value={query}
                                    onChange={(event) => {onQueryChange(event.target.value)}} />
                            </Col>
                            <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
                                <DropDown sortBy={sortBy}
                                            onSortByChange={(newSort) => onSortByChange(newSort)}
                                            orderBy={orderBy}
                                            onOrderByChange={(newOrder) => onOrderByChange(newOrder)} />
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Search;
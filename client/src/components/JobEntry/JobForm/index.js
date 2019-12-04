import React from 'react';
import { Form, Col } from "react-bootstrap";
import "./index.css";

class JobForm extends React.Component {
    constructor() {
        super();
        this.state = {
            date: "",
            time: "",
            helper: "",
            address: "",
            duration: "",
            materials: "",
            description: "",
            cost: ""
        };
    }
    render() {
        return (
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder="ex. 10-05-2019" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="time" id="time-select" name="time"
                        min="09:00" max="18:00" required />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Helper: </Form.Label>
                    <Form.Control type="text" placeholder="ex. John Smith" />
                </Form.Group>
                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Approximate duration</Form.Label>
                    <Form.Control as="select">
                        <option>less than 2 hours</option>
                        <option>2-3 hours</option>
                        <option>3-5 hours</option>
                        <option>1 day</option>
                        <option> more than 1 day</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Extra materials needed:</Form.Label>
                    <Form.Control as="select" multiple>
                        <option>Hydrojetter</option>
                        <option>Chain Saw</option>
                        <option>N/A</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Decription</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Est. Cost to Customer: </Form.Label>
                    <Form.Control type="number" placeholder="ex. 1,500" />
                </Form.Group>
            </Form>
        );
    }
}

export default JobForm;
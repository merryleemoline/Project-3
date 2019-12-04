import React from "react";
import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";

class InvNavBut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                 <ButtonGroup>
                            <DropdownButton as={ButtonGroup} title="Invoices" id="bg-nested-dropdown" variant="primary" size="lg" block="true">
                                <Dropdown.Item eventKey="1">View Invoice</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Create Invoice</Dropdown.Item>
                            </DropdownButton>
                        </ButtonGroup>
            </div>
        )}}

export default InvNavBut;
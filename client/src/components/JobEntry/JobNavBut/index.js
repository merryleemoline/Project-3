import React from "react";
import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import "./style.css";


class JobNavBut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <ButtonGroup>
                            <DropdownButton as={ButtonGroup} className="font-effect-3d-float" title="Job Entries" id="bg-nested-dropdown" variant="primary" size="lg" block="true">
                                <Dropdown.Item className="dropdown"eventKey="1">View Job Entry</Dropdown.Item>
                                <Dropdown.Item className="dropdown"eventKey="2">Create Job Entry</Dropdown.Item>
                            </DropdownButton>
                        </ButtonGroup>
            </div>
        )}}

export default JobNavBut;
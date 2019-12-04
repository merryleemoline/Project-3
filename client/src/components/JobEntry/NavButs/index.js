import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";


class NavButs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
            <Button variant="primary" id="button1" className="font-effect-3d-float" size="lg" block="true" href="/view-jobs">
              View Jobs
            </Button>
            <br></br><br></br>
            <Button variant="secondary" id="button2" className="font-effect-3d-float" size="lg" block="true" href="/create-jobs">
              Enter New Job
            </Button>
          </div>
        )}}

export default NavButs;
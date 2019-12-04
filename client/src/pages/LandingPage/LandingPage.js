import React from "react";
import { Nav } from "react-bootstrap";
import InvNavBut from "../../components/Invoice/InvNavBut";
import JobNavBut from "../../components/JobEntry/JobNavBut";
import "./style.css";

class LandingPage extends React.Component {
    render() {
        return (
            <div className="vertical-center">
                <div className="container1">
                 <h1 className="font-effect-3d-float">Top Notch Plumbing</h1>
                    <p className="font-effect-3d-float">Get started by clicking one of the buttons below.
                        </p>
                        </div>
                        <div className="container2">
                <Nav justify variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home"><JobNavBut /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1"><InvNavBut /></Nav.Link>
                    </Nav.Item>
                </Nav>
                </div>
            </div>
        );
    }
}

export default LandingPage;


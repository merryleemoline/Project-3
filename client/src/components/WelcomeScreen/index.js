import React from "react";
import JobNavBut from "../JobEntry/NavButs";
import "./style.css";

class WelcomeScreen extends React.Component {
    render() {
        return (
            <div className="vertical-center">
                <div className="container1">
                 <h1 className="font-effect-3d-float">Top Notch Plumbing</h1>
                    <p className="font-effect-3d-float">Welcome! Get started by clicking one of the buttons to the right.
                        </p>
                        </div>
                        <div className="container2">
                <JobNavBut/>
                </div>
            </div>
        );
    }
}

export default WelcomeScreen;


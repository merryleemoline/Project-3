import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./pages/LandingPage/LandingPage";


class App extends React.Component {
  render() {
    return (
      <div className="App">
          <LandingPage />
      </div>
    );
  }
}

export default App;

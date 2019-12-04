import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import JobForm from "./components/JobEntry/JobForm";


class App extends React.Component {
  render() {
    return (
      <div>
          <JobForm />
      </div>
    );
  }
}

export default App;

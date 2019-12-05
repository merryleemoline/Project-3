import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/JobEntry/DeleteBtn";
import API from "../utils/API";
import {Container, Row, Col, Jumbotron} from "react-bootstrap";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/JobEntry/List";
import { Input, TextArea, FormBtn } from "../components/JobEntry/Form";

function Jobs() {
  const [jobs, setJobs] = useState([])
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadJobs()
  }, [])

  function loadJobs() {
    API.getJobs()
      .then(res => 
        setJobs(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteJob(id) {
    API.deleteJob(id)
      .then(res => loadJobs())
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.date && formObject.name) {
      API.saveJob({
        date: formObject.date,
        time: formObject.time,
        name: formObject.name,
        plumber: formObject.plumber,
        helper: formObject.helper,
        address: formObject.address,
        duration: formObject.duration,
        materials: formObject.materials,
        description: formObject.description,
        cost: formObject.cost

      })
        .then(res => loadJobs())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>New Job!</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="date"
                placeholder="Date..."
              />
              <Input
                onChange={handleInputChange}
                name="time"
                placeholder="Time..."
              />
              <Input
                onChange={handleInputChange}
                name="name"
                placeholder="Name..."
              />
              <Input
                onChange={handleInputChange}
                name="plumber"
                placeholder="Plumber..."
              />
              <Input
                onChange={handleInputChange}
                name="helper"
                placeholder="Helper..."
              />
              <Input
                onChange={handleInputChange}
                name="address"
                placeholder="Address..."
              />
               <Input
                onChange={handleInputChange}
                name="duration"
                placeholder="Duration..."
              />
               <Input
                onChange={handleInputChange}
                name="materials"
                placeholder="Materials..."
              />
              <TextArea
                onChange={handleInputChange}
                name="description"
                placeholder="Description of work to be done..."
              />
               <Input
                onChange={handleInputChange}
                name="cost"
                placeholder="Cost to Customer..."
              />
              <FormBtn
                disabled={!(formObject.date && formObject.name)}
                onClick={handleFormSubmit}
              >
                Submit Job
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Active Jobs</h1>
            </Jumbotron>
            {jobs.length ? (
              <List>
                {jobs.map(job => (
                  <ListItem key={job._id}>
                    <Link to={"/jobs/" + job._id}>
                      <strong>
                        {job.name} on {job.date} at {job.address}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteJob(job._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Jobs;

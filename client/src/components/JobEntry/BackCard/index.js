import React, { useEffect, useState } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import API from "../../../utils/API";

function FrontCard(props) {
    const [job, setJob] = useState({})

    useEffect(() => {
        API.getJob(props.match.params.id)
            .then(res => setJob(res.data))
            .catch(err => console.log(err));
    }, [])


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{job.date} , {job.time}</Card.Title>
                <Card.Text>
                    <ListGroup>
                        <ListGroup.Item>Customer:  {job.name}</ListGroup.Item>
                        <ListGroup.Item>Head Plumber:  {job.plumber}</ListGroup.Item>
                        <ListGroup.Item>Assisted by:  {job.helper}</ListGroup.Item>
                        <ListGroup.Item>Address:  {job.address}</ListGroup.Item>
                        <ListGroup.Item>Est. Duration:  {job.duration}</ListGroup.Item>
                        <ListGroup.Item>Materials Needed:  {job.materials}</ListGroup.Item>
                        <ListGroup.Item>Description:  {job.description}</ListGroup.Item>
                        <ListGroup.Item>Est. Cost to Customer:  ${job.cost}</ListGroup.Item>
                    </ListGroup>
                </Card.Text>
                <Button variant="primary">Get Directions</Button>
            </Card.Body>
        </Card>
    )
}


export default FrontCard;
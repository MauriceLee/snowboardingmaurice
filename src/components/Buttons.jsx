import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Buttons.css';

export default class Buttons extends Component {
    render() {
        return (
            <Container>
                <Row className="row no-gutters">
                    <Col xs="12" md="4">
                        <Link to="/">
                            <Button variant="outline-primary" block>Home</Button>
                        </Link>
                    </Col>
                    <Col xs="12" md="4">
                        <Link to="/Equipment">
                            <Button variant="outline-primary" block>Equipment</Button>
                        </Link>
                    </Col>
                    <Col xs="12" md="4">
                        <Link to="/Todolist">
                            <Button variant="outline-primary" block>Todolist</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}
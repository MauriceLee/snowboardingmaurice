import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import './Jbt.css';

export default class Jbt extends Component {
    render() {
        return (
            <Container>
                <Jumbotron fluid>
                    <h1>SnowBoarding For Life</h1>
                    <p>
                        <br />
                        I am a engineer from taiwan.
                        <br />
                        Named Maurice.
                        <br />
                        Someone likes snowboarding very much.
                        <br />
                        Hope one day I can go to Niseko in Japan Hokkaido.
                        <br />
                        So I build this website and a Todolist program to help me to get my dream.
                    </p>
                </Jumbotron>
            </Container>
        )
    }
}

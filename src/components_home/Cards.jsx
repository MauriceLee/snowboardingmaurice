import React, { Component } from 'react';
import { Container, CardGroup, Card, Button } from 'react-bootstrap';
import WeatherApi from './WeatherApi';
import './Cards.css';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';

export default class Cards extends Component {
    render() {
        return (
            <Container>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                        <Card.Title className="cardtitle" >About Niseko United</Card.Title>
                        <Card.Text>
                            Niseko United is comprised of four resorts on the one mountain, Niseko Annupuri (1,308m).
                            <br /><br />
                            100km south of Sapporo, Niseko Annupuri is a part of the Niseko-Shakotan-Otaru Kaigan Quasi-National Park and is the most eastern park of the Niseko Volcanic Group.
                            <br /><br />
                            Seasonal winds from the Eurasian continent pick up moisture over the warm currents of the Sea of Japan to from snow clouds and in turn some of the driest, lightest powder in the world.
                            <br /><br />
                            With its rich variety of terrain and beautiful winter woods, Niseko offers an unforgettable experience for all levels of skier/snowborder.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="text-center">
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                        <Card.Title className="cardtitle">Current Weather</Card.Title>
                        <WeatherApi></WeatherApi>
                        <Card.Title className="cardtitle"><br /><br />Website Link</Card.Title>
                        <Button href="http://www.niseko.ne.jp" variant="primary" size="lg">Push Me</Button>
                        </Card.Body>
                    </Card>
                    <Card className="text-center">
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                        <Card.Title className="cardtitle">Niseko United PV 2018</Card.Title>
                        <iframe title="NISEKO UNITED PV 2018" src="https://www.youtube.com/embed/G_qFhknHEiY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        )
    }
}
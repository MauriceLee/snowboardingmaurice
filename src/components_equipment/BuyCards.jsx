import React, { Component } from 'react';
import { Container, Card, Button, Badge, Row, Col } from 'react-bootstrap';
import './BuyCards.css';

export default class BuyCards extends Component {
    render() {
        return (
            <Container>
                <Row>
                {this.props.products.map(product => (
                    <Col xs="12" md="4" key={product.id}>
                        <Card>
                            <Card.Img variant="top" src={product.img} />
                            <Card.Body>
                                <Card.Title>
                                    <h2>
                                        {product.title}
                                    </h2>
                                </Card.Title>
                                <Card.Subtitle>
                                    <h5>
                                        {
                                            product.discount
                                            ? <Badge variant="danger">特價：{product.price} NTD</Badge>
                                            : <Badge variant="success">售價：{product.price} NTD</Badge>
                                        }
                                    </h5>
                                </Card.Subtitle>
                                <Card.Text>
                                    {product.describe}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button 
                                    disabled={this.props.cart.find(item => item.id === product.id)}
                                    variant="outline-info"
                                    onClick={() => this.props.addToCart(product)}
                                >Buy</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
                </Row>
            </Container>
        )
    }
}
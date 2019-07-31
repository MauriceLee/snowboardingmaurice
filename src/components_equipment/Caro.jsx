import React, { Component } from 'react';
import { Container, Jumbotron, Carousel, Button, Modal, Table, Alert } from 'react-bootstrap';
import './Caro.css';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';

export default class Caro extends Component {
    constructor() {
        super()
        this.onHide = this.onHide.bind(this)
    }
    onHide() {
        this.props.onHide()
    }
    checkout(totalPrice) {
        alert(`Has been deducted ${totalPrice} dollars from your credit card`)
    }
    render() {
        const { modal, cart } = this.props
        const totalPrice = cart.reduce((acc, item) => (acc += item.price), 0)
        localStorage.setItem("cart",JSON.stringify(this.props.cart))
        return (
            <Container>
                <Jumbotron>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={img1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Snowboard</h3>
                                <p>Your best and important friend for snowboarding.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={img2}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Clothes</h3>
                                <p>Keep your body warm and protect your body.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={img3}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Goggles</h3>
                                <p>Protect your eyes and let you see clearly.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <Button variant="info" onClick={this.onHide}>Cart ({cart.length})</Button>
                </Jumbotron>
                <Modal show={modal} onHide={this.onHide}>
                    <Modal.Header onHide={this.onHide}>Cart</Modal.Header>
                    <Modal.Body>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Item</th>
                                    {/* <th>Quantity</th> */}
                                    <th>Price</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((item, index) => (
                                        <tr>
                                            <th>{index + 1}</th>
                                            <td>{item.title}</td>
                                            <td>{item.price} NTD</td>
                                            <td><Button variant="danger" onClick={() => this.props.deleteCartItem(index)}>Delete</Button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                        <Alert variant="success" className="text-right">
                            Total price：{totalPrice} NTD        
                        </Alert> 
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            disabled={cart.length === 0}
                            variant="info"
                            onClick={() => this.checkout(totalPrice)}
                        >Checkout</Button>
                        <Button variant="secondary" onClick={this.onHide}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        )
    }
}
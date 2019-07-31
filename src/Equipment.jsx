import React, { Component } from 'react';
import Caro from './components_equipment/Caro';
import BuyCards from './components_equipment/BuyCards'
import ProductJson from './components_equipment/Product.json';

export default class Equipment extends Component {
    constructor() {
        super()
        this.state = {
            modal: false,
            products: ProductJson,
            cart: JSON.parse(localStorage.getItem("cart")) || [],
        }
    }
    onHide() {
        this.setState({
            modal: !this.state.modal
        });
    }
    addToCart(product) {
        this.state.cart.push(product)
        this.setState({
            cart: this.state.cart
        })
    }
    deleteCartItem(index) {
        this.state.cart.splice(index, 1)
        this.setState({
            cart: this.state.cart
        })
    }
    render() {
        return (
            <div>
                <Caro
                    modal = {this.state.modal}
                    cart = {this.state.cart}
                    onHide = {() => this.onHide()}
                    deleteCartItem = {index => this.deleteCartItem(index)}
                />
                <BuyCards
                    products = {this.state.products}
                    cart = {this.state.cart}
                    addToCart = {product => this.addToCart(product)}
                />
            </div>
        )
    }
}

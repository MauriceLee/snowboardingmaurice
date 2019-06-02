import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './WeatherApi.css';

export default class WeatherApi extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			weather: []
		};
	}

	componentDidMount() {
		fetch("https://api.openweathermap.org/data/2.5/forecast?q=Niseko,JP&APPID=c674981b3e07e38b9b49ac5b4b480167&units=metric")
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					isLoaded: true,
					weather: result
				});
			},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
		)
	}

	render() {
		const { error, isLoaded, weather } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<Table>
					<tr>
						<td>Country</td>
						<td>{weather.city.country}</td>
					</tr>
					<tr>
						<td>city</td>
						<td>{weather.city.name}</td>
					</tr>
					<tr>
						<td>weather</td>
						<td>{weather.list[0].weather[0].main}</td>
					</tr>
					<tr>
						<td>Temperature</td>
						<td>{weather.list[0].main.temp}</td>
					</tr>
				</Table>
			);
		}
	}
}
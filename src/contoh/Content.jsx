import React, { Component } from 'react';
import axios from 'axios';


class Content extends Component{
	constructor(){
		super();
		this.state = {
			data: [
				{
					"id": 1,
					"name": "Junifar",
					"age": "25"
				},
				{
					"id": 2,
					"name": "Hidayat",
					"age": "29"
				}
			],
			items:[]
		}

		axios.get('http://192.168.0.113:7000/data_test.php').then(res => {this.setState({ items: res.data })});
	}
	render(){
		return(
			<div>
				<h2>Apa Kabar</h2>
				<table>
	               <tbody>
	                  {this.state.items.map((person, i) => <TableRow key = {i}
	                     data = {person} />)}
	               </tbody>
	            </table>
			</div>
		);
	}
}	

class TableRow extends Component{
	render(){
		return (
			<tr>
	            <td>{this.props.data.id}</td>
	            <td>{this.props.data.name}</td>
	            <td>{this.props.data.age}</td>
	         </tr>
		);
	}
}

export default Content;
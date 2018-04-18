import React, { Component } from 'react';


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
			]
		}
	}
	render(){
		return(
			<div>
				<h2>Apa Kabar</h2>
				<table>
	               <tbody>
	                  {this.state.data.map((person, i) => <TableRow key = {i} 
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
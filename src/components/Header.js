import { Component } from 'react';

class Header extends Component{
	
	render(){
		let data = this.props.list;
		let showData = [];
		for (let i =0; i < data.length; i++){
			showData.push(<a key= {data[i].id}>{data[i].name}</a> );

		}
		return(
		<header>
			<h1 >{this.props.title}</h1>
			{showData}
		</header>
		)
	}
	
}

export default Header;
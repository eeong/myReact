import { Component } from 'react';

class TOC extends Component{
	
	render(){

		let data = this.props.list;
		let showData = [];
		for (let i =0; i < data.length; i++){
			showData.push(<li><a key= {data[i].id} href="#">{data[i].name}</a></li> );

		}

		return(
			<header>
				
				<ul>
					{showData}
				</ul>
			</header>
			)
		}
		
	}
	


export default TOC;
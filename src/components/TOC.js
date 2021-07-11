import { Component } from 'react';

class TOC extends Component{
	
	render(){

		let data = this.props.list;
		let showData = [];
		for (let i =0; i < data.length; i++){
			showData.push(<li key= {data[i].id}>
				<a key= {data[i].id} 
				href={"/content/"+data[i].id}
				data-id = {data[i].id}
				onClick={function(id, e){
					e.preventDefault();
					this.props.onChangePage(id);
				}.bind(this, data[i].id)}>
					{data[i].name}
				</a></li> );

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
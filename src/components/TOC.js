import { Component } from 'react';

class TOC extends Component{
	shouldComponentUpdate(nextProps, nextState) {
		let bol = false;
		if(this.props !== nextProps){
			bol = true;
		}
		return bol;
	}
	
	render(){

		let data = this.props.list;
		let showData = [];
		for (let i =0; i < data.length; i++){
			showData.push(<li key= {data[i].id}>
				<a key= {data[i].id} 
				href={"/content/"+data[i].id}
				data-id = {data[i].id}
				onClick={function(e){
					e.preventDefault();
					this.props.onChangePage(e.target.dataset.id);
				}.bind(this)}>
					{data[i].title}
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
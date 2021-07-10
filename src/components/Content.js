import { Component } from 'react';

class Content extends Component{
	
	render(){
	
		let lists = this.props.lists;
		let showContents = [];
		for(let i = 0; i < lists.length; i++){
			showContents.push(<h2 key={lists[i].id}>{lists[i].desc}</h2> );
		}
		return(
			<div>
				
				<h2>{this.props.title}</h2>
				<h4>{this.props.desc}</h4>
			</div>
		)
	
	
}
}
export default Content;
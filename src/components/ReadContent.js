import { Component } from 'react';

class ReadContent extends Component{
	
	render(){
	
		
		return(
			<div>
				<h2>{this.props.title}</h2>
				<h4>{this.props.desc}</h4>
			</div>
		)
	
	
}
}
export default ReadContent;
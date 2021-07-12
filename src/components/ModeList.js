import { Component } from 'react';

class ModeList extends Component{
	
	render(){

		return(
			
				
				<ul>
					<li><a href="/content/create" onClick={
						function(e){
							e.preventDefault();
							this.props.onChangeMode("create");
						}.bind(this)
					}>create</a></li>
					<li><a href="/content/update" onClick={
						function(e){
							e.preventDefault();
							this.props.onChangeMode("update");
						}.bind(this)
					}>update</a></li>
					<button onClick={
						function(e){
							e.preventDefault();
							this.props.onChangeMode("delete");
						}.bind(this)
					}>delete</button>
				</ul>
			
			)
		}
		
	}
	


export default ModeList;
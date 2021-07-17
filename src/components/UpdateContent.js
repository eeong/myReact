import { Component } from 'react';

class UpdateContent extends Component{
	
	render(){
	
		return(
			<div>
				<h2>Create content!</h2>				
				<form onSubmit={function(e){
					e.preventDefault();
					this.props.onSubmitPage(
						e.target.title.value,
						e.target.desc.value
					)
				}.bind(this)}
				method="post"
				>
					<div>
						<input type="text" placeholder="title" name="title"/>
					</div>	
					<div>
						<textarea placeholder="desc" name="desc"/>
					</div>	
					<div>
						<input type="submit" ></input>
					</div>
				</form>
			</div>
		)
	
	
}
}
export default UpdateContent;
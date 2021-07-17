import { Component } from 'react';

class UpdateContent extends Component{
	
	render(){
	
		return(
			<div>
				<h2>Update content!</h2>				
							
				<form onSubmit={function(e){
					e.preventDefault();
					this.props.onUpdatePage(
						e.target.title.value,
						e.target.desc.value
					)
				}.bind(this)}
				method="post"
				>
					<div>
						<input type="text" name="title" defaultValue={this.props.data.title}></input>
					</div>	
					<div>
						<textarea name="desc" defaultValue={this.props.data.desc}></textarea>
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
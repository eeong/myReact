import { Component } from 'react';

class UpdateContent extends Component{
	constructor(props){
		super(props);
		this.state={
			id: this.props.data.id,
			title:this.props.data.title,
			desc:this.props.data.desc,

		}
		this.inputFormHandler = this.inputFormHandler.bind(this);
	}

	inputFormHandler(e){
		this.setState({[e.target.name]: e.target.value})
	}

	render(){
	
		return(
			<div>
				<h2>Update content!</h2>				
							
				<form action="/create_process"
				onSubmit={function(e){
					e.preventDefault();
					this.props.onUpdatePage(
						this.state.title,
						this.state.desc,
						this.state.id,
					)
				}.bind(this)}
				method="post"
				>
					<input type="hidden" name="id" value={this.state.id} />
					<div>
						<input type="text" name="title" value={this.state.title} onChange={this.inputFormHandler}
						></input>
					</div>	
					<div>
						<textarea name="desc" value={this.state.desc} onChange={this.inputFormHandler
						}></textarea>
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
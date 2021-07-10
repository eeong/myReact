import { Component } from 'react';

class Header extends Component{
	
	render(){
		
		return(
		<header>
			<h1><a href="#">{this.props.title}</a></h1>
			<h2>World Wide Web!</h2>
			
		</header>
		)
	}
	
}

export default Header;
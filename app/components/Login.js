
const React = require('react')
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}

		this.handleNameChange     = this.handleNameChange.bind(this)
		this.handleEmailChange    = this.handleEmailChange.bind(this)
		this.handlePasswordChange = this.handlePasswordChange.bind(this)
		this.handleSubmit         = this.handleSubmit.bind(this)
	}

	handleNameChange(e) {

	}
	handleEmailChange(e) {
		
	}
	handlePasswordChange(e) {
		
	}
	handleSubmit(e) {
		e.peventDefault();
	}
	render() {
		return (
			<div>
			    <h2>Login</h2>
			    <form onSubmit={this.handleSubmit}>
			    	<label>
			    		Name:
			    		<input type="text" /*value={this.state.value}*/ onChange={this.handleNameChange}/>
			    	</label>
			    	<label>
			    		Email:
			    		<input type="text" /*value={this.state.value}*/ onChange={this.handleEmailChange}/>
			    	</label>
			    	<label>
			    		Password:
			    		<input type="text" /*value={this.state.value}*/ onChange={this.handlePasswordChange}/>
			    	</label>
			    	<input type="submit" value="Submit" />
			    </form>
			</div>
		)
	}
}

module.exports = Login;
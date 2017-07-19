const React = require('react')
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

class Main extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="main-container">
				<h1>Hello World!</h1>
			</div>
		)
	}
}

module.exports = Main;
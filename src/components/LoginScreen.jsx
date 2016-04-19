import {Component, PropTypes} from 'react'
import {Row, Col, Glyphicon, Grid, PageHeader, Navbar, NavItem, Nav} from 'react-bootstrap';
import {connect} from 'react-redux'

class LoginScreen extends Component{
	render() {
		const { errorMessage, isAuthenticated } = this.props
		return !isAuthenticated ? (
			<Grid>
			<Row>
			<input type='text' ref='username' className="form-control" placeholder='Username'/>
			<input type='password' ref='password' className="form-control" placeholder='Password'/>
			<button onClick={(event) => this.handleLogin(event)} className="btn btn-primary">
			Login
			</button>
			{errorMessage &&
				<p>{errorMessage}</p>
			}
			</Row>
			</Grid>
			) : (<Grid>
					<Row>
						<button onClick={(event) => this.handleLogout(event)} className="btn btn-primary">Logout</button>
					</Row>
				</Grid>)
	}

	handleLogin(event){
		const username = this.refs.username
		const password = this.refs.password
		const creds = {username: username.value.trim(), password: password.value.trim()}
		this.props.onLoginClick(creds)
	}

	handleLogout(event){
		this.props.onLogoutClick()
	}

}

function mapStateToProps(state){

	const {auth} = state
	const {errorMessage, isAuthenticated} = auth

	return {isAuthenticated,
			errorMessage}
}


LoginScreen.propTypes = {
	onLoginClick: PropTypes.func.isRequired,
	onLoginClick: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string
}

export default connect(mapStateToProps)(LoginScreen)
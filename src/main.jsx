
import {Component, PropTypes} from 'react';
import {Row, Col, Glyphicon, Grid, PageHeader, Navbar, NavItem, Nav} from 'react-bootstrap';
import LoginScreen from './components/LoginScreen.jsx'
import {loginUser, logoutUser} from './actions/auth.js'
import {connect} from 'react-redux'
import githubIcon from './images/GitHub-Mark-32px.png';

class App extends Component {

	constructor(props){
		super(props)
	}

	componentWillMount(){

	}

	render(){
		const { dispatch, quote, isAuthenticated, errorMessage } = this.props
		return 	<Grid>
		<Row>
			<PageHeader>
				<Col sm={3}>
				:^)
				</Col>
				<Col smOffset={9}>
					<a href="mailto:jacob.norlinandersson@gmail.com"><Glyphicon glyph="envelope"/></a>
					<a  href="http://github.com/JacobNorlin"><img src={githubIcon}/></a>
				</Col>
			</PageHeader>
		</Row>
		<Row>
		<b>kek {isAuthenticated}</b>
			<Col sm={11}>
				<Navbar>
					<Nav>
						<NavItem eventKey={1} href="/">Personal</NavItem>
						<NavItem eventKey={2} href="/repo">Repo</NavItem>
						<NavItem eventKey={4} href="/blog">Blog</NavItem>
					</Nav>
				</Navbar>
			</Col>
			<Col smOffset={11} sm={1}>
				<LoginScreen path="/login" errorMessage={errorMessage} onLoginClick={ creds => dispatch(loginUser(creds))} onLogoutClick={() => dispatch(logoutUser())} />
			</Col>
		</Row>
		{this.props.children}
	</Grid>
	}
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
}

// These props come from the application's
// state when it is started
function mapStateToProps(state) {

  const { quotes, auth } = state
  const { quote, authenticated } = quotes
  const { isAuthenticated, errorMessage } = auth

  return {
    quote,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(App)
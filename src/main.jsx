import {Component, PropTypes} from 'react';
import {Row, Col, Glyphicon, Grid, PageHeader, Navbar, NavItem, Nav} from 'react-bootstrap';
import LoginScreen from './components/LoginScreen.jsx'
import {loginUser, logoutUser} from './actions/auth.js'
import {connect} from 'react-redux'
import githubIcon from './images/GitHub-Mark-32px.png';

class App extends Component {

    componentWillMount() {

    }

    render() {
        const { dispatch, isAuthenticated, errorMessage } = this.props
        return <Grid>
            <Row>
                <PageHeader>
                    <Col sm={3}>
                        :^)
                    </Col>
                    <Col smOffset={9}>
                        <a href="mailto:jacob.norlinandersson@gmail.com"><Glyphicon glyph="envelope"/></a>
                        <a href="http://github.com/JacobNorlin"><img src={githubIcon}/></a>
                    </Col>
                </PageHeader>
            </Row>
            <Row>
                <Col sm={8}>
                    <Navbar>
                        <Nav>
                            <NavItem eventKey={1} href="/">Personal</NavItem>
                            <NavItem eventKey={2} href="#/repo">Repo</NavItem>
                            <NavItem eventKey={4} href="#/blog">Blog</NavItem>
                        </Nav>
                    </Navbar>
                </Col>
                <Col sm={2}>
                    <LoginScreen path="/login" errorMessage={errorMessage}
                                 onLoginClick={ creds => dispatch(loginUser(creds))}
                                 onLogoutClick={() => dispatch(logoutUser())}/>
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

function mapStateToProps(state) {
    const { auth } = state
    const { isAuthenticated, errorMessage } = auth

    return {
        isAuthenticated,
        errorMessage
    }
}

export default connect(mapStateToProps)(App)
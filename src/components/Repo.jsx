"use strict";
import {Component, PropTypes} from 'react'
import {Grid, Row, Col, Navbar, Nav, NavItem, PageHeader} from 'react-bootstrap';
import RepoList from './RepoList.jsx';
import {connect} from 'react-redux'
import {searchRepo, removeElem, addElem, updateElemPreview} from '../actions/repo.js'

class Repo extends Component {

    fetchElems() {
        const {dispatch, user} = this.props
        const {tags=""} = this.props.location.query
        dispatch(searchRepo({username:user.username, id: user.id, tags}))
    }

    componentWillMount() {
        this.fetchElems()
    }

    componentDidUpdate(){
        this.fetchElems()
    }


    render() {
        const {isAuthenticated} = this.props
        console.log(this.props)
        return <Grid>
            <Row>
                <PageHeader className="subHeader">
                    Repo
                </PageHeader>
                <Col md={6}>
                    <p>
                        A repository of videos and stuff I found interesting. Will compile stuff I watch here and try to
                        summarize what I saw in an attempt to actually learn or remember something. Optimally I should add
                        one thing a day.
                    </p>
                    {
                        isAuthenticated &&
                        <a href="#/repo/new">New Entry</a>
                    }
                </Col>
            </Row>
            <Row>

                <Col sm={6}>
                    <PageHeader className="subHeader">
                    </PageHeader>
                    <RepoList/>
                </Col>
            </Row>
        </Grid>
    }



}

Repo.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const {auth} = state
    const {isAuthenticated, user} = auth
    return {
        isAuthenticated,
        user
    }
}

export default connect(mapStateToProps)(Repo)
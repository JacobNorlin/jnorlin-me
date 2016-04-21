"use strict";
import {Component, PropTypes} from 'react'
import {Grid, Row, Col, Navbar, Nav, NavItem, PageHeader} from 'react-bootstrap';
import RepoList from './RepoList.jsx';
import {connect} from 'react-redux'
import {fetchElems, removeElem, addElem, updateElemPreview} from '../actions/repo.js'

class Repo extends Component {

    componentWillMount() {
        const {dispatch} = this.props

        dispatch(fetchElems({username: 'test'}))
    }

    render() {
        const {elems, isAuthenticated, dispatch} = this.props
        console.log(this.props)
        return <Grid>
            <Row>
                <PageHeader className="subHeader">
                    Repo
                </PageHeader>
                <p>
                    A repository of videos and stuff I found interesting. Will compile stuff I watch here and try to
                    summarize what I saw in an attempt to actually learn or remember something. Optimally I should add
                    one thing a day.
                </p>
            </Row>
            <Row>
                {
                    isAuthenticated &&
                    <a href="#/repo/new">New Entry</a>
                }
                <Col sm={6}>
                    <PageHeader className="subHeader">
                        elements
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
    console.log(state)
    const {auth} = state
    const {isAuthenticated} = auth
    return {
        isAuthenticated
    }
}

export default connect(mapStateToProps)(Repo)
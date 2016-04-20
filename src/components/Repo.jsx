"use strict";
import {Component, PropTypes} from 'react'
import {Grid, Row, Col, Navbar, Nav, NavItem, PageHeader} from 'react-bootstrap';
import RepoList from './RepoList.jsx';
import {connect} from 'react-redux'
import {fetchElems, removeElem, addElem} from '../actions/repo.js'

class Repo extends Component {

    componentWillMount() {
        const {dispatch} = this.props

        dispatch(fetchElems({username: 'test'}))
    }

    render() {
        const {elems, isAuthenticated} = this.props
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
                <Col sm={6}>
                    <PageHeader className="subHeader">
                        videos
                    </PageHeader>
                    <RepoList elements={JSON.parse(elems)}/>
                </Col>
                <Col smOffset={6}>
                    <PageHeader className="subHeader">
                        texts
                    </PageHeader>
                </Col>
            </Row>
        </Grid>
    }
}

Repo.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    elems: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const {auth, repoApiCall} = state
    const {isAuthenticated} = auth
    const {elems} = repoApiCall
    return {
        isAuthenticated,
        elems
    }
}

export default connect(mapStateToProps)(Repo)
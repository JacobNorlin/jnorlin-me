"use strict";
import {Component, PropTypes} from 'react';
import _ from 'lodash';
import ProjectElem from './ProjectElem.jsx';
import ExperienceElem from './ExperienceElem.jsx';
import RepoElement from './RepoElement.jsx';
import {removeElem, updateElemPreview} from '../actions/repo.js'
import {connect} from 'react-redux'

class RepoList extends Component {


    render() {
        const {elems, isAuthenticated, dispatch} = this.props
        let elements = JSON.parse(elems)
        return <div>{elements.map(element => {
            const {id, link, title, summary, type} = element
            return (<RepoElement onEditClick={() => {dispatch(updateElemPreview(element))}} onRemoveClick={() => {dispatch(removeElem(element))}} id={id} type={type} link={link} title={title} summary={summary} isAuthenticated={isAuthenticated}/>)
        })
        }
        </div>

    }


}
RepoList.propTypes = {
    elems: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}

function mapStateToProps(state){
    const {auth, repoApiCall} = state
    const {isAuthenticated} = auth
    const {elems} = repoApiCall

    return {
        isAuthenticated,
        elems
    }
}

export default connect(mapStateToProps)(RepoList)
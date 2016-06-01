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
        const {searchResult, isAuthenticated, dispatch} = this.props
        let elements = JSON.parse(searchResult).reverse()
        return <div>{elements.map(element => {
            return (<RepoElement onEditClick={() => {dispatch(updateElemPreview(element))}} onRemoveClick={() => {dispatch(removeElem(element))}} elem={element} isAuthenticated={isAuthenticated}/>)
        })
        }
        </div>

    }


}
RepoList.propTypes = {
    searchResult: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}

function mapStateToProps(state){
    const {auth, repoApiCall} = state
    const {isAuthenticated} = auth
    const {searchResult} = repoApiCall

    return {
        isAuthenticated,
        searchResult
    }
}

export default connect(mapStateToProps)(RepoList)
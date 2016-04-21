"use strict"
import {Component, PropTypes} from 'react';

export default class RepoElement extends Component {
    render() {
        const {title, link, summary, type, isAuthenticated, onEditClick, onRemoveClick, id} = this.props
        const elem = {title, link, summary, type, id}
        console.log(this.props)
        return <div>
            <a href={link}><h2 className="subHeader">{title}</h2></a>
            <small>{type}</small>
            {(isAuthenticated && (onEditClick !== undefined) && (onRemoveClick !== undefined)) &&
            (<div>
                <a href="#/repo/new" onClick={onEditClick}>Edit post</a>
                <a href="#/repo" onClick={onRemoveClick}> Remove post</a>
            </div>)}
            <div className="elemContainer">
                <h4 className="subHeader">Summary</h4>
                <p>{summary}</p>
            </div>
        </div>
    }

}

RepoElement.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    link: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onEditClick: PropTypes.func,
    onRemoveClick: PropTypes.func
}
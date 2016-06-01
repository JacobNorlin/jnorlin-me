"use strict"
import {Component, PropTypes} from 'react';
import Tag from './Tag.jsx'

export default class RepoElement extends Component {
    render() {
        const {elem, isAuthenticated, onEditClick, onRemoveClick} = this.props
        const {title, link, summary, tags} = elem
        console.log(tags)
        const tagList = tags.split(" ")
        return <div>
            <a href={link}><h2 className="subHeader">{title}</h2></a>
            <small>
                {
                    tagList.map(tag => {
                        return <Tag tag={tag} type="repo"/>
                    })
                }
            </small>
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
    elem: PropTypes.object.isRequired,
    onEditClick: PropTypes.func,
    onRemoveClick: PropTypes.func
}
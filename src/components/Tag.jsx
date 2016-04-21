
import {Component, PropTypes} from 'react'

export default class Tag extends Component{

    render(){
        const {tag} = this.props
        return (
            <a href={"#/search/"+tag}>#{tag} </a>
        )
    }

}
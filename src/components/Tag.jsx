
import {Component, PropTypes} from 'react'

export default class Tag extends Component{

    render(){
        const {tag, type} = this.props
        return (
            <a href={"#/"+type+"/?tags="+tag}>#{tag} </a>
        )
    }

}
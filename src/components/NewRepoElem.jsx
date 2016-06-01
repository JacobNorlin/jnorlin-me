import {Component, PropTypes} from 'react'
import {Grid, Row, Col, Button, PageHeader, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'
import {connect} from 'react-redux'
import RepoElement from './RepoElement.jsx'
import {updateElemPreview, addElem} from '../actions/repo.js'

class NewRepoElem extends Component {

    render() {
        const {isAuthenticated, elem, postError} = this.props
        const {id, link, title, summary, tags} = elem
        const tagString = tags
        return isAuthenticated && (
            <Grid>
                <Col sm={8}>
                    <PageHeader className="subHeader">Preview</PageHeader>
                    <Row>
                        <RepoElement elem={elem} isAuthenticated={isAuthenticated}/>
                    </Row>
                    <PageHeader className="subHeader">New</PageHeader>
                    <Row>
                        <Col sm={3}>
                            <div className="input-group">
                                <input ref="title" type="text" defaultValue={title} className="form-control" placeholder="Title" onChange={(event) => this.handleOnChange(event)}/>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="input-group">
                                <input ref="tags" type="text" defaultValue={tagString} className="form-control" placeholder="Tags" onChange={(event) => this.handleOnChange(event)}/>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div    className="input-group">
                                <input ref="link" type="text" defaultValue={link} className="form-control" placeholder="Link" onChange={(event) => this.handleOnChange(event)}/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <b className="subHeader">Summary</b>
                            <form className="form-inline" role="form">
                                <div className="form-group">
                                    <textarea defaultValue={summary} rows={10} cols={75} ref="summary" onChange={(event) => this.handleOnChange(event)}/>
                                </div>
                            </form>
                        </Col>
                    </Row>
                    <Button type="submit" onClick={(event) => {this.handleSubmit(event)}}>Submit</Button>
                    <Button type="submit" href="#/repo">Back</Button>
                    {
                        postError.length > 0 ? "Please add "+postError : ""
                    }
                </Col>
            </Grid>
        )
    }

    handleOnChange(event) {
        const summary = this.refs.summary.value.trim()
        const title = this.refs.title.value.trim()
        const link = this.refs.link.value.trim()
        const tags = this.refs.tags.value

        const {dispatch} = this.props
        dispatch(updateElemPreview({tags, link, title, summary}))
    }

    handleSubmit(event) {
        const {dispatch, elem} = this.props
        dispatch(addElem(elem))
    }

    componentWillUnmount() {
        const {dispatch} = this.props
        dispatch(updateElemPreview({summary: "", title:"", link:"", type:"", id:-1, tags:"" }))
    }


}

NewRepoElem.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    elem: PropTypes.object.isRequired,
    postError: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    const {auth, repoApiCall} = state
    const {isAuthenticated} = auth
    const {elem, postError} = repoApiCall
    return {
        isAuthenticated,
        elem,
        postError
    }
}

export default connect(mapStateToProps)(NewRepoElem)
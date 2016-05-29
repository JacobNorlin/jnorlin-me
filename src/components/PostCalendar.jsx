import {Component, PropTypes} from 'react';
import {connect} from 'react-redux'

import {Row, Col, Glyphicon, Grid, PageHeader, Navbar, NavItem, Nav} from 'react-bootstrap';
import {fetchPostDates, searchBlog} from '../actions/blog'
import moment from 'moment'
import 'moment-range'


export default class PostCalendar extends Component {
    componentWillMount() {

    }

    render() {

        const {searchResult} = this.props


        const month = dateString => {
            return moment(dateString).format("MMMM")
        }

        const year = dateString => {
            return moment(dateString).format("Y")
        }

        const postsInMonth = posts => {
            return posts.map(p => {
                return <Row><a>{p.title}</a></Row>
            })
        }

        const postsInYear = posts => {
            return Object.keys(posts).map(m => {
                return <Row>
                    <b className="subHeader">{m}</b>
                    {
                        postsInMonth(posts[m])
                    }
                </Row>
            })
        }

        const constructDates = (posts) => {
            const calendar = posts.reduce((acc, p) => {
                const m = month(p.createdAt)
                const y = year(p.createdAt)
                acc[y] === undefined ? acc[y] = {} : acc
                acc[y][m] === undefined ? (acc[y][m] = [p]) : acc[y][m].push(p)
                return acc
            }, {})
            return calendar
        }

        const calendar = constructDates(JSON.parse(searchResult).reverse())

        return <Grid>
            <h2 className="subHeader">Posts</h2>
            {
                Object.keys(calendar).reverse().map(y => {
                    return <Row>
                        <h3 className="subHeader">{y}</h3>
                        {
                            postsInYear(calendar[y])
                        }
                    </Row>
                })
            }
        </Grid>
    }
}

PostCalendar.propTypes = {
    dispatch: PropTypes.func.isRequired,
    searchResult: PropTypes.string.isRequired
}

function mapStateToProps(state) {
    const {blogApiCall, auth} = state
    const {searchResult} = blogApiCall
    const {user} = auth

    return {
        searchResult,
        user
    }
}

export default connect(mapStateToProps)(PostCalendar)
import React, { useEffect } from 'react'
import { getCategories } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ChildCategories from './ChildCategories'

const CategoryList = props => {
    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div className="allcats">
            {props.categories.map(cat => (
                <div>
                    <h3 className="title"><Link to={`/${cat.slug}`}>{cat.name}</Link></h3>
                    <div className="cat"><ChildCategories list={cat.child_categories} /></div>
                </div>
            ))}
        </div>
    )
}

function mapStateToProps(appState) {
    return {
        categories: appState.categories
    }
}

export default connect(mapStateToProps)(CategoryList) 

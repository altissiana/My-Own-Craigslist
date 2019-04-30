import store from '../store'
import axios from 'axios'

export function getCategories() {
    axios.get('/api/categories').then(resp => {
        store.dispatch({
            type: 'GET_CATEGORIES',
            payload: resp.data
        })
    })
}
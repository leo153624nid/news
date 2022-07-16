/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
import { actions } from './redux/actions/actionCreator'
import './App.css'

const App: React.FC = () => {
    const store = useSelector((state) => state)
    const dispatch = useDispatch()

    const handleGetNews = () => {
        dispatch(actions.getLatestNews())
    }

    return (
        <div className="App">
            <button type="button" onClick={handleGetNews}>
                get news
            </button>
        </div>
    )
}

export default App

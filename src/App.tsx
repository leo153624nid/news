/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { useAppSelector, useAppDispatch } from './redux/hooks/hooks'
import { actions } from './redux/actions/actionCreator'
import './App.css'

const App: React.FC = () => {
    const store = useAppSelector((state) => state)
    const dispatch = useAppDispatch()

    const handleGetNews = () => {
        dispatch(actions.getLatestNews())
    }

    return (
        <div className="App">
            <button type="button" onClick={handleGetNews}>
                Get News
            </button>
        </div>
    )
}

export default App

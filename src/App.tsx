/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { useAppSelector, useAppDispatch } from './redux/hooks/hooks'
import { actions } from './redux/actions/actionCreator'
import './App.css'
import News from './components/News/News'

const App: React.FC = () => {
    const latestNews = useAppSelector((store) => store?.news?.latestNews || [])
    const popularNews = useAppSelector(
        (store) => store?.news?.popularNews || []
    )
    const { latestNewsError, popularNewsError } = useAppSelector(
        (store) => store?.errors || {}
    )
    const dispatch = useAppDispatch()

    const handleGetNews = () => {
        dispatch(actions.getNews())
    }

    return (
        <div className="App">
            <button type="button" onClick={handleGetNews}>
                Get News
            </button>
            <News
                news={latestNews}
                label="Latest News"
                error={latestNewsError}
            />
            <News
                news={popularNews}
                label="Popular News"
                error={popularNewsError}
            />
        </div>
    )
}

export default App

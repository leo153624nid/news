/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { Route } from 'react-router-dom'
// import { useAppSelector, useAppDispatch } from './redux/hooks/hooks'
// import { actions } from './redux/actions/actionCreator'
import './App.css'
// import News from './components/News/News'
import Home from './pages/Home/Home'
import LatestNews from './pages/LatestNews/LatestNews'
import PopularNews from './pages/PopularNews/PopularNews'

const App: React.FC = () => {
    return (
        <>
            <Header />

            <Route path="/" element={<Home />} />

            <Route path="/latest-news" element={<LatestNews />} />

            <Route path="/popular-news" element={<PopularNews />} />

            <Footer />
        </>
    )
}

// const App: React.FC = () => {
//     const latestNews = useAppSelector((store) => store?.news?.latestNews || [])
//     const popularNews = useAppSelector(
//         (store) => store?.news?.popularNews || []
//     )
//     const { latestNewsError, popularNewsError } = useAppSelector(
//         (store) => store?.errors || {}
//     )
//     const dispatch = useAppDispatch()

//     const handleGetNews = () => {
//         dispatch(actions.getNews())
//     }

//     return (
//         <div className="App">
//             <button type="button" onClick={handleGetNews}>
//                 Get News
//             </button>
//             <News
//                 news={latestNews}
//                 label="Latest News"
//                 error={latestNewsError}
//             />
//             <News
//                 news={popularNews}
//                 label="Popular News"
//                 error={popularNewsError}
//             />
//         </div>
//     )
// }

export default App

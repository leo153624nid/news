import { useSelector, useDispatch } from 'react-redux'
import { getLatestNews } from './redux/actions/actionCreator'
import './App.css'

const App = () => {
    const store = useSelector((store) => store)
    const dispatch = useDispatch()

    const handleGetNews = () => {
        dispatch(getLatestNews())
    }

    return (
        <div className="App">
            <button onClick={handleGetNews}>get news</button>
        </div>
    )
}

export default App

import { useSelector, useDispatch } from 'react-redux'
import { getPopularNews } from './redux/actions/actionCreator'
import './App.css'

const App = () => {
    const store = useSelector((store) => store)
    const dispatch = useDispatch()
    console.log(store)

    const handleGetNews = () => {
        dispatch(getPopularNews())
    }

    return (
        <div className="App">
            <button onClick={handleGetNews}>get news</button>
        </div>
    )
}

export default App

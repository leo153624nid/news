import { useSelector, useDispatch } from 'react-redux'
import { getPopularNews } from './redux/actions/actionCreator'
import './App.css'

const App = () => {
    const store = useSelector((store) => store)
    const dispatch = useDispatch()
    console.log(store)

    return <div className="App">hello world</div>
}

export default App

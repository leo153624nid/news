import { useSelector } from 'react-redux'
import './App.css'

const App = () => {
    const store = useSelector((store) => store)
    console.log(store)
    return <div className="App">hello world</div>
}

export default App

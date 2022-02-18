import {useDispatch, useSelector} from "react-redux";

function App() {
    const store = useSelector(store => store)
    const dispatch = useDispatch()
    console.log(store)

    return (
        <div className="App">
            <p>Saga completing tutorial</p>
            <button onClick={() => dispatch({type: 'LOAD_DATA'})}>Click it</button>
        </div>
    );
}

export default App;

import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import MyComponent from "./components/MyComponent";
import { decreaseCounter, increaseCounter } from "./redux/action/counterAction";

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="app-container">
      <MyComponent></MyComponent>
      <div>
        Count ={count}
        <button onClick={() => dispatch(increaseCounter())}>Increase</button>
        <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
      </div>
    </div>
  );
};

export default App;

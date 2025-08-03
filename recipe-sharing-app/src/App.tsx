
import { useCounterStore } from "./store";
import "./App.css"

const App = () => {
    const { count } = useCounterStore(state => state    );

    return <OtherComponent count={count} />;
}

const OtherComponent = ({ count }: { count: number }) => {
    const incrementAsync = useCounterStore(state => state.incrementAsync);
    const decrement = useCounterStore(state => state.decrement);
    const reset = useCounterStore(state => state.reset);
    const hero = useCounterStore(state => state.hero);
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={incrementAsync}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={hero}>Hero</button>
        </div>
    );
}

export default App;
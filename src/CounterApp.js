// Child component 1: 只负责展示数据
import {useState} from "react";

function Display({ count }) {
    return <h2>当前计数: {count}</h2>;
}

// Child component 2: 只负责改变数据（但它不拥有数据）
function Button({ onIncrement }) {
    return (
        <button onClick={onIncrement}>
            CounterApp-点击我 +1
        </button>
    );
}

// Parent component: 拥有和管理 state
function CounterApp() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <Display count={count} />
            <Button onIncrement={handleIncrement} />
        </div>
    );
}

export default CounterApp;
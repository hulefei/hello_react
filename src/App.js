import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';
import CustomButton from './CustomButton';
import Greeting from "./Greeting";
import Counter from "./Counter";
import FetchData from "./FetchData";
import CounterApp from "./CounterApp"; // 引入自定义按钮组件

function App() {
    const [clickCount, setClickCount] = useState(0);

    const handlePrimaryClick = () => {
        setClickCount(prevCount => prevCount + 1);
        alert('主按钮被点击了！');
    };

    const handleSecondaryClick = () => {
        alert('次要按钮被点击了！');
    };

    return (
        <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
            <div>
                <CustomButton text="主按钮" onClick={handlePrimaryClick} type="primary"/>
                <CustomButton text="次要按钮" onClick={handleSecondaryClick} type="secondary"/>
                <p>点击次数: {clickCount}</p>
            </div>
            <div>
                <Greeting name="Gemini"/>
                <Greeting name="Python"/>
            </div>
            <div>
                <Counter />
            </div>
            <div>
                <FetchData />
            </div>
            <div><CounterApp /></div>
        </div>
    );
}

export default App;

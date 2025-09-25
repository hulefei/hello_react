import React, { useState } from 'react'; // ①

function Counter() {
    // ② 使用 useState 定义状态变量 `count` 及其更新函数 `setCount`
    const [count, setCount] = useState(0);

    // ③ 定义一个函数来处理点击事件
    const handleClick = () => {
        setCount(count + 1); // ④ 必须使用更新函数来改变状态
    };

    return (
        <div>
            <p>你点击了 {count} 次</p>
            <button onClick={handleClick}>
                点击我
            </button>
        </div>
    );
}

export default Counter;
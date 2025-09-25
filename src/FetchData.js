import React, { useState, useEffect } from 'react';

function FetchData() {
    const [data, setData] = useState(null); // ① 状态用来存储从网络获取的数据

    // ② 使用 useEffect 来执行副作用
    useEffect(() => {
        // ③ 在这里放置需要执行的副作用代码
        fetch('https://v1.hitokoto.cn') // 假设这个 API 存在
            .then(response => response.json())
            .then(data => setData(data));
    }, []); // ④ 空数组作为依赖项，表示只在组件第一次渲染时执行一次

    if (!data) {
        return <div>加载中...</div>;
    }

    return (
        <div>
            <h1>数据已加载</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default FetchData;
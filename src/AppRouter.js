import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from "./App";

// 两个简单的页面组件
// const Home = () => <h1>欢迎来到首页!</h1>;
const Home = () => <App />;
const About = () => <h1>这是关于我们页面。</h1>;

function AppRouter() {
    return (
        <BrowserRouter>
            {/* 导航栏使用 Link 组件 */}
            <nav>
                <Link to="/">首页</Link> | <Link to="/about">关于我们</Link>
            </nav>
            <hr />
            {/* Routes 容器定义了所有可能的路由 */}
            <Routes>
                <Route path="/" element={<Home />} />   {/* 路径 / 显示 Home 组件 */}
                <Route path="/about" element={<About />} /> {/* 路径 /about 显示 About 组件 */}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
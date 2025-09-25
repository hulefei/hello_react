import React from 'react';
import './CustomButton.css'; // 引入样式文件

// CustomButton 组件接收 props (如 text, onClick, type 等)
const CustomButton = ({ text, onClick, type = 'primary', disabled = false }) => {
  // 根据 type prop 应用不同的 CSS 类
  const buttonClass = `custom-button custom-button--${type}`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {/* 按钮内部显示的文本 */}
      {text}
    </button>
  );
};

export default CustomButton;
import React from 'react';

interface ButtonProps<T> {
  onClick: (value: T) => void;
  value: T;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps<any>> = ({ onClick, value, children }) => {
  return (
    <button onClick={() => onClick(value)}>
      {children}
    </button>
  );
};

export default Button;

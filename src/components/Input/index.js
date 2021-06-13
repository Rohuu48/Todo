import React from 'react';

const InputBox = ({ onChange, className, placeholder }) => {
  return (
    <input
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default InputBox;

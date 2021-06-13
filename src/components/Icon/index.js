import React from 'react';

const Icon = ({ name, className, ...otherProps }) => {
  return <i {...otherProps} className={`${name} ${className}`}></i>;
};

export default Icon;

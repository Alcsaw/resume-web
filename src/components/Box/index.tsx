import React from 'react';

import './styles.css';

interface BoxProps {
  label: string;
};

const Box: React.FC<BoxProps> = ({ children, label }) => {
  return (
    <div className="box">
      <strong>{label}</strong>
      {children}
    </div>
  );
}

export default Box;
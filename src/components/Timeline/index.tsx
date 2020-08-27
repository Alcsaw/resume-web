import React from 'react';

import './styles.css';

interface TimelineProps {
  lineColor?: string;
};

const Timeline: React.FC<TimelineProps> = ({ lineColor, children }) => {

  return (
    <div className="timeline--wrapper">
      <div className="timeline"
        style={{ color: `${lineColor}` }}
      >
        {children}
      </div>
    </div>
  );
}

export default Timeline;

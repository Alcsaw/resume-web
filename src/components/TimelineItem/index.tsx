import React, { Fragment } from 'react';

import './styles.css';

interface TimelineItemProps {
  dateText: string;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ dateText, children }) => {
  //const dateText = "08/2008 – 11/2008";

  return (
    <div
      className='entry'
    >
      <Fragment>
        <div className="title">
          <div>
            <span className="timeline-item-date">
              <time
                className="timeline-item-dateinner"
                title={dateText}
              >
                {dateText}
              </time>
            </span>
          </div>
        </div>
        <div className="body">
          <div className="body-container ">
            {children}
          </div>
        </div>
      </Fragment>
    </div>
  );
}

export default TimelineItem;
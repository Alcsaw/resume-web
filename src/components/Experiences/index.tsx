import React from 'react';

import Box from '../Box';
import Timeline from '../Timeline';
import TimelineItem from '../TimelineItem';

const Experiences: React.FC = () => {
  return (
    <Box label="Experiências">

      <Timeline lineColor="#8257E5">
        <TimelineItem
          dateText="07/2020 – Present"
        >
          <h3>Data Engineer</h3>
          <h4>Compasso UOL</h4>
          <p>
            Development of ELT pipelines for processing big data using cloud computing.
          </p>
        </TimelineItem>

        <TimelineItem dateText="11/2017 – 07/2020">
          <h3>Web Developer and Moodle Administration</h3>
          <h4>UNISC</h4>
          <p>
            Moodle administration, development and maintenance of custom code of Moodle, in addition to synchronization routines with third party services.
          </p>
        </TimelineItem>

        <TimelineItem dateText="04/2016 – 11/2017">
          <h3>Moodle Technical Support</h3>
          <h4>UNISC</h4>
          <p>
            Technical Support for customers (face-to-face and remote) and training workshops for Moodle tools, assisting students, teachers and staff.
          </p>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}

export default Experiences;

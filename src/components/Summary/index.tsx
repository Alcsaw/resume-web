import React from 'react';

import Box from '../Box';
import './styles.css';

const Summary: React.FC = () => {

  const summary = `Lifelong learner passionate about solving problems, mainly using technology.
  I have proactivity and autonomy, which allows me to self-organize my work routine, realizing what needs to be done and having a resolution initiative.
  This attitude, together with a systemic and organizational vision makes me an innate leader, being a point of reference for teammates, whom I am happy to be able to help.`

  return (
    <Box label="Summary">
      <p className="summary-text">{summary}</p>
    </Box>
  );
}

export default Summary;

import React from 'react';

import Box from '../Box';

import './styles.css';

const Education: React.FC = () => {

  const certificationName = "Bachelor of computer science";
  const issuerName = "Unisc";
  const issuerLink = "unisc.br";
  const certificationGrade = "GPA: 9.05";

  return (
    <Box label="Education">
      <ul className="certifications-list">
        <li className="certification-item">
          <div className="item-name">
            <span className="certification-name">{certificationName}</span>
            <a className="link" href={issuerLink}>{issuerName}</a>
          </div>
          <div className="certification-grade">{certificationGrade}</div>
        </li>
      </ul>
    </Box>
  );
}

export default Education;

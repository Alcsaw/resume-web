import React from 'react';

import Box from '../Box';

import './styles.css';

const Projects: React.FC = () => {

  const projects = [
    {
      name: 'Proffy (Next Level Week 2)',
      link: 'https://github.com/Alcsaw/next-level-week-2'
    },
    {
      name: 'Ecoleta (Next Level Week 1)',
      link: 'https://github.com/Alcsaw/next-level-week-1'
    },
    {
      name: 'Python Automation Scripts',
      link: 'https://github.com/Alcsaw/Python-automate-scripts'
    },
  ];

  return (
    <Box label="Projects">
      <ul className="projects-list">
        {projects.map((project) => {
          return (
            <li className="project-item" key={project.name} >
              <a className="link" href={project.link}>{project.name}</a>
            </li>
          )
        })}
      </ul>
    </Box>
  );
}

export default Projects;

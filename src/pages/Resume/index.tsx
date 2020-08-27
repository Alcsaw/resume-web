import React from 'react';

import Header from '../../components/Header';
import Description from '../../components/Description';
import Experiences from '../../components/Experiences';
import Education from '../../components/Education';
import Projects from '../../components/Projects';

import './styles.css';

export default function Resume() {
  return (
    <div id="page-resume" className="container">
      <Header />
      <Description />
      <Experiences />
      <Education />
      <Projects />

      <p className="footer-note">Design and code made with <span role="img" aria-label="love">❤️</span> by <a href="https://github.com/Alcsaw/resume-web">Alcsaw</a></p>
    </div>

  );
}
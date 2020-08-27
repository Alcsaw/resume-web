import React from 'react';

import Header from '../../components/Header';
import Description from '../../components/Description';
import Experiences from '../../components/Experiences';

import './styles.css';

export default function Resume() {
  return (
    <div id="page-resume" className="container">
      <Header />
      <Description />
      <Experiences />
    </div>

  );
}
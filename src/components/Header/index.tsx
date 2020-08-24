import React from 'react';

import './styles.css';

const Header: React.FC = () => {
  const avatar_url = 'https://avatars0.githubusercontent.com/u/20111371?s=460&u=11f9cd15c1dd06cc423fc8ecb831dced3c3c30c2&v=4';
  const name = 'Augusto Schnorr';
  const techs = ['JavaScript', 'Node.js', 'ReactJS', 'React Native', 'Expo']

  return <header>
    <img src={avatar_url} alt={name} />
    <div className="user-info">
      <strong>{name}</strong>
      <ul className="tech-list">
        {techs.map(tech => <li className="tech-tag" key={tech}>{tech}</li>)}
      </ul>
    </div>
  </header>;
}

export default Header;

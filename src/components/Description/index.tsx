import React from 'react';

import './styles.css';

const Description: React.FC = () => {

  const description = `Lifelong learner apaixonado por resolver problemas, principalmente utilizando tecnologia.
  Trabalhei por 3 anos com administração de sistemas e desenvolvimento web e, atualmente, trabalho com transformação digital com computação em nuvem, desenvolvendo processos ELT e migração de serviços.`

  return (
    <div className="description">
      <strong>Resumo</strong>
      <p className="description-text">{description}</p>
    </div>
  );
}

export default Description;

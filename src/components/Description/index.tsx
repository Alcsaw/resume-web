import React from 'react';

import Box from '../Box';
import './styles.css';

const Description: React.FC = () => {

  const description_ptbr = `Lifelong learner apaixonado por resolver problemas, principalmente utilizando tecnologia.
  Tenho proatividade e autonomia, o que me possibilita a autoorganizar a rotina de trabalho, ao perceber o que precisa ser feito e ter iniciativa de resolução.
  Essa atitude, junto de a uma visão sistêmica e organizacional me torna um líder inato, sendo um ponto de referência para colegas de equipe, a quem eu tenho prazer em conseguir ajudar.`

  const description = `Lifelong learner passionate about solving problems, mainly using technology.
  I have proactivity and autonomy, which allows me to self-organize my work routine, realizing what needs to be done and having a resolution initiative.
  This attitude, together with a systemic and organizational vision makes me an innate leader, being a point of reference for teammates, whom I am happy to be able to help.`

  return (
    <Box label="Resumo">
      <p className="description-text">{description_ptbr}</p>
    </Box>
  );
}

export default Description;

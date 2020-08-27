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
          <h3>Engenheiro de dados</h3>
          <h4>Compasso UOL</h4>
          <p>
            Desenvolvimento de pipelines ELT para o processamento de big data utilizando computação em nuvem.
          </p>
        </TimelineItem>

        <TimelineItem dateText="11/2017 – 07/2020">
          <h3>Desenvolvedor Web e Administrador Moodle</h3>
          <h4>UNISC</h4>
          <p>
            Administração de AVA Moodle, desenvolvimento e manutenção de código customizado para o Moodle, além de rotinas de sincronização com serviços de terceiros.
          </p>
        </TimelineItem>

        <TimelineItem dateText="04/2016 – 11/2017">
          <h3>Suporte Técnico para Moodle</h3>
          <h4>UNISC</h4>
          <p>
            Suporte técnico para usuários (presencial e remotamente) e oficinas de capacitação sobre as ferramentas do Moodle, auxiliando estudantes, professores e funcionários.
          </p>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}

export default Experiences;

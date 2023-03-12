import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 200, text: 'Students'},
  { number: 10, text: 'Coordinators', },
  { number: 30, text: 'Projects', },
  { number: 2, text: 'Start Ups', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Stats</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;

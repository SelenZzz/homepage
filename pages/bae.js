import { Container, Box, Heading, useColorModeValue } from '@chakra-ui/react';
import Layout from '../components/layouts/article';

import { useState, useEffect } from 'react';

const getDays = (date) => {
  return date / 1000 / 60 / 60 / 24;
};

const Bae = () => {
  const [curDate, setCurDate] = useState(new Date());

  const depart = new Date('2022-06-09');
  const arrival = new Date('2022-07-15');
  const daysAtAll = new Date(arrival - depart);
  const daysLeft = new Date(arrival - curDate);
  const progress = daysLeft / daysAtAll;

  useEffect(() => {
    setInterval(countDown, 500);
  }, []);

  const countDown = () => {
    setCurDate(new Date());
  };

  const meterStyle = {
    fill: 'none',
    strokeWidth: '10px',
    strokeLinecap: 'round',
    transform: 'rotate(-90deg)',
    transformOrigin: '50% 50%',
    strokeDasharray: 360,
    strokeDashoffset: +progress * 360 + 360,
    stroke: useColorModeValue('#AED6BC', '#82AC90'),
    animation: 'progress 1s ease-out',
  };

  const meterBgStyle = {
    fill: 'none',
    strokeWidth: '10px',
    stroke: '#dfdfdf',
  };

  const svgStyle = { width: '114px', height: '114px', margin: '1em' };

  return (
    <Layout>
      <Container maxW="100%">
        <Box borderRadius="lg" p={3} mb={6} align="center">
          <Heading as="h2" variant="bae-title">
            машба приедет через:
          </Heading>
          <div>{getDays(daysLeft).toFixed(6)} дней</div>
          <svg style={svgStyle}>
            <circle style={meterBgStyle} cx="57" cy="57" r="52" />
            <circle style={meterStyle} cx="57" cy="57" r="52" />
          </svg>
        </Box>
      </Container>
    </Layout>
  );
};

export default Bae;

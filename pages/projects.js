import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import thumbYouTube from '../public/images/projects/youtube_eyecatch.png';
import thumbSite from '../public/images/projects/site_eyecatch.png';

const Projects = () => (
  <Container>
    <Heading as="h3" fontSize={20} mb={4}>
      Проекты
    </Heading>

    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
        <WorkGridItem id="youtube" title="YouTube" thumbnail={thumbYouTube}>
          Мой ютуб канал
        </WorkGridItem>
      </Section>

      <Section>
        <WorkGridItem id="site" title="Site" thumbnail={thumbSite}>
          Мой сайт))0)
        </WorkGridItem>
      </Section>
    </SimpleGrid>
  </Container>
);

export default Projects;

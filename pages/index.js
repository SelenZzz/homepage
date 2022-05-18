import {
  Link,
  List,
  ListItem,
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5';
import { Icon16LogoVk } from '@vkontakte/icons';
import Layout from '../components/layouts/article';
import Paragraph from '../components/paragraph';
import Section from '../components/section';
import { BioSection, BioYear } from '../components/bio';

const Page = () => {
  return (
    <Layout>
      <Container maxW="100%">
        <Box
          borderRadius="lg"
          boxShadow="md"
          bg={useColorModeValue('#AED6BC', '#82AC90')}
          p={3}
          mb={6}
          align="center"
        >
          Привет! Я Full Stack разработчик из Санкт-Петербурга
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Александр Ермак
            </Heading>
            <p>Разработчик, Музыкант</p>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/me.png"
              alt="my photo)"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Обо мне
          </Heading>
          <Paragraph>
            Пишу чистый и красивый код, изучаю машинное обучение, много времени уделяю написанию
            музыки. На данный момент мне{' '}
            {(new Date() - new Date('2001-10-08')) / (1000 * 60 * 60 * 24 * 365)} лет.
          </Paragraph>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Образование
          </Heading>
          <Paragraph>
            <BioSection>
              <BioYear>2019</BioYear>
              Лицей информационных технологий ДВФУ
            </BioSection>

            <BioSection>
              <BioYear>2023</BioYear>
              СПБГЭТУ ЛЭТИ
            </BioSection>
          </Paragraph>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Опыт работы
          </Heading>
          <Paragraph>
            <BioSection>
              <BioYear>2022</BioYear>
              ВКонтакте — Full Stack Developer
            </BioSection>
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Навыки
          </Heading>
          <Paragraph>
            Tensorflow, TypeScript, React, HTML5, CSS3, JavaCore, php, NodeJs, SQL
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Ссылки
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/SelenZzz" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoGithub />}>
                  @SelenZzz
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://vk.com/postrockreverb" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon16LogoVk />}>
                  @postrockreverb
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.youtube.com/channel/UCDGXH9Q6duum-uR68uNt58A" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoTwitter />}>
                  @heroinsadness
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/postrockreverb/" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoInstagram />}>
                  @postrockreverb
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;

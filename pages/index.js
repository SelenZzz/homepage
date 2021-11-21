import NextLink from 'next/link'
import { 
    Container, 
    Box, 
    Heading, 
    Image, 
    useColorModeValue,
    Button 
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import { DotList } from '../components/dot-list'

const Page = () => {
    return (
        <Layout>
            <Container maxW='100%'>
                <Box 
                    borderRadius='lg' 
                    boxShadow='md' 
                    bg={useColorModeValue('#AED6BC','#82AC90')} 
                    p={3} 
                    mb={6} 
                    align='center'
                >
                    Привет! Я Java-разработчик из Санкт-Петербурга
                </Box>

                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as='h2' variant='page-title'>
                            Александр Ермак
                        </Heading>
                        <p>Разработчик, Музыкант</p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0}}
                        ml={{ md: 6 }}
                        align='center'
                    >
                        <Image 
                            borderColor='whiteAlpha.800' 
                            borderWidth={2} 
                            borderStyle='solid' 
                            maxWidth='100px' 
                            display='inline-block' 
                            borderRadius='full' 
                            src='/images/me.jpg' 
                            alt='my photo)'
                        />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    
                    <Heading as='h3' variant='section-title'>
                        Обо мне
                    </Heading>
                    <Paragraph>
                        Пишу на Java чистый и красивый код,
                        изучаю машинное обучение и другие языки программирования, 
                        много времени уделяю написанию музыки.
                    </Paragraph>
                    <Paragraph>
                        
                        На данный момент мне {
                            (new Date() - new Date('2001-10-08'))/(1000*60*60*24*365) 
                            
                        } лет.
                    </Paragraph>
                    <Box align='center' my={4}>
                        <NextLink href='/projects'>
                            <Button 
                                rightIcon={<ChevronRightIcon />} 
                                //colorScheme='teal'
                                variant='outline'
                                boxShadow='md' 
                            >
                                Мои проекты
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as='h3' variant='section-title'>
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

                <Section delay={0.3}>
                    <Heading as='h3' variant='section-title'>
                        Разбираюсь в 
                    </Heading>
                    <Paragraph>
                        <DotList 
                            entries = {[
                                'Алгоритмы и струтуры данных', 
                                'Java Core', 
                                'ООП и Паттерны проектирования',
                                'SQL',
                                'Git',
                                'Unix',
                                'Базовые знания JavaScript, React, HTML, CSS',
                                'Музыка и все, что с ней связано'
                            ]}
                        />
                    </Paragraph>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page 
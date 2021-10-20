import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          p={3}
          mb={6}
          align="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Hello, I&apos;m a full-stack developer based in Vietnam
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Kyou - Trinh Phuc Thinh
            </Heading>
            <p>Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              maxWidth="100px"
              borderColor="whiteAlpha.800"
              borderStyle="Solid"
              display="inline-block"
              borderRadius="full"
              src="/images/takuya.jpeg"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Takuya is a freelance and a full-stack developer based in Osaka with
            a passion for building digital services/stuff he wants. He has a
            knack for all things launching products, from planning and designing
            all the way to solving real-life problems with code. When not
            online, he loves hanging out with his camera. Currently, he is
            living off of his own product called{' '}
            <NextLink href="/works/inkdrop">
              <Link>Inkdrop</Link>
            </NextLink>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1994</BioYear>
            Born in Ho Chi Minh, Vietnam
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Completed the Master's Program in the Graduate School of Information
            Science at Nara Institute of Science and Technology
            (奈良先端科学技術大学院大学情報科学研究科修士課程)
          </BioSection>
          <BioSection>
            <BioYear>2010</BioYear>
            Worked at Yahoo! Japan (ヤフー株式会社入社)
          </BioSection>
          <BioSection>
            <BioYear>2012 to present</BioYear>
            Works as a freelance
          </BioSection>
        </Section>
        <Section delay={0.8}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <BioSection>
            Art, Music, Drawing, Playing Drums, Photography, Leica, Machine
            Learning
          </BioSection>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page

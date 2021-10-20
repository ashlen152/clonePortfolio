import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbInkdrop from '../public/images/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/walknote_eyecatch.png'
import thumbTheFourPainter from '../public/images/the-four-painters_eyecatch.jpeg'
import thumbMenkiki from '../public/images/menkiki_eyecatch.png'
import thumbModeTokyo from '../public/images/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/styly_eyecatch.png'
import thumbPichu2 from '../public/images/pichu2_eyecatch.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
            A markdown note-talking app
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="walknote"
            thumbnail={thumbWalknote}
          >
            Music recommendation app for IOS
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="the-four-painters"
            title="The four painters"
            thumbnail={thumbTheFourPainter}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="menkiki" title="Menkiki" thumbnail={thumbMenkiki}>
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="modeTokyo"
            title="mode.tokyo"
            thumbnail={thumbModeTokyo}
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" title="Styly" thumbnail={thumbStyly}>
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="pichu2" title="Pichu*Pichu" thumbnail={thumbPichu2}>
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works

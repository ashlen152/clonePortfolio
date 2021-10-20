import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout>
      <Container>
        <Title>
          Inkdrop <Badge>2016</Badge>
        </Title>
        <P>
          A Markdown note-taking app with 100+ plugins, cross-platform and
          encrypted data sync support. The life-time revenue is more than $200k.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>WEBSITE</Meta>
            <Link href="https://www.inkdrop.app/">
              https://www.inkdrop.app/ <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>PLATEFORM</Meta>
            Windows/macOS/Linux/iOS/Android
          </ListItem>
          <ListItem>
            <Meta>PLATEFORM</Meta>
            Windows/macOS/Linux/iOS/Android
          </ListItem>
        </List>
        <WorkImage src="/images/inkdrop_eyecatch.png" alt="Inkdrop" />
      </Container>
    </Layout>
  )
}

export default Work

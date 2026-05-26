import { Container } from 'src/atomic/obj.grid/grid.style';
import profileImage from 'src/assets/img/profile-glasses.jpg';
import { Hbox } from 'src/atomic/obj.hbox/hbox.component';
import { Body, LinkStyled } from 'src/atomic/atm.typography/typography';
import { Separator } from 'src/atomic/atm.separator/separator.style';
import { ImageStyled } from 'src/atomic/atm.image/image.component';

const Home = () => (
  <Container>
    <Hbox>
      <Hbox.Item hAlign={'center'}>
        <ImageStyled
          src={profileImage}
          width={240}
          height={240}
          alt={'Palamim'}
        />
      </Hbox.Item>
    </Hbox>
    <Separator type={'subsection'} />
    <Hbox>
      <Hbox.Item>
        <Body>
          I&apos;m Leonardo Palamim. Currently working on AI engineering as a
          research practice, exploring agents, evaluation, and inference.
          Documenting what I see, study, build, and refine on this blog.
        </Body>
        <Body>
          6+ years in software engineering at early-stage startups in São Paulo,
          including{' '}
          <LinkStyled href="https://zeca.ai" target="_blank">
            Zeca.ai
          </LinkStyled>
          . Founded two companies of my own along the way (one folded, one
          pivoted).
        </Body>
        <Body>
          I graduated in mechanical engineering at Poli-USP. The engineering and
          systems way of thinking I learned there shapes how I approach AI
          engineering today.
        </Body>
        <Body>
          I read papers, books, and listen to podcasts, especially the ones that
          question how reality works.
        </Body>
        <Body>
          Best way to reach me:{' '}
          <LinkStyled
            href="https://www.linkedin.com/in/leopalamim/"
            target="_blank"
          >
            LinkedIn
          </LinkStyled>
          .
        </Body>
      </Hbox.Item>
    </Hbox>
  </Container>
);

export default Home;

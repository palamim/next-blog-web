import { H3 } from 'src/atomic/atm.typography/typography';
import SocialButtons from 'src/atomic/mol.social/social.component';
import { Row, Col } from 'src/atomic/obj.grid/grid.style';
import { Hbox } from 'src/atomic/obj.hbox/hbox.component';
import {
  HeaderMenu,
  HeaderMenuWrapper,
  NavLink,
} from './header.component.style';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const isHomeActive = pathname === '/';
  const isBlogActive = pathname === '/blog' || pathname.startsWith('/blog/');

  return (
    <HeaderMenuWrapper>
      <HeaderMenu>
        <Row>
          <Col>
            <Hbox>
              <Hbox.Item $vAlign={'center'} $noGrow>
                <H3>Palamim</H3>
              </Hbox.Item>
              <Hbox.Separator />
              <Hbox.Item $hAlign={'center'} $vAlign={'center'}>
                <Hbox>
                  <Hbox.Item $noGrow>
                    <NavLink href={'/'} $isActive={isHomeActive}>
                      Home
                    </NavLink>
                  </Hbox.Item>{' '}
                  <Hbox.Separator />
                  <Hbox.Item $noGrow>
                    <NavLink href={'/blog'} $isActive={isBlogActive}>
                      Blog
                    </NavLink>
                  </Hbox.Item>
                </Hbox>
              </Hbox.Item>
              <Hbox.Separator />
              <Hbox.Item $vAlign={'center'} $noGrow>
                <SocialButtons />
              </Hbox.Item>
            </Hbox>
          </Col>
        </Row>
      </HeaderMenu>
    </HeaderMenuWrapper>
  );
};

export default Header;

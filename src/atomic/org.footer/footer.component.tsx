import { Body } from "src/atomic/atm.typography/typography";
import SocialButtons from "src/atomic/mol.social/social.component";
import { FooterWrapper } from "./footer.component.style";

const Footer = () => (
  <FooterWrapper>
    <Body>© 2026 Leonardo Palamim. All rights reserved.</Body>
    <SocialButtons />
  </FooterWrapper>
);

export default Footer;

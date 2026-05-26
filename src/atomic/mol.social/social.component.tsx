import { Fragment } from "react";
import { Hbox } from "src/atomic/obj.hbox/hbox.component";
import { LinkStyled } from "src/atomic/atm.typography/typography";
import { Color } from "src/atomic/obj.constants/constants";
import { socials, type SocialItem } from "src/app/modules/socials";

const SocialButton = ({ social }: { social: SocialItem }) => {
  const Icon = social.icon;
  return (
    <LinkStyled href={social.link} target={"_blank"}>
      <Icon color={Color.GrayXDark} size={"2em"} />
    </LinkStyled>
  );
};

const SocialButtons = () => (
  <Hbox>
    {socials.map((social, index) => (
      <Fragment key={social.name}>
        {index > 0 && <Hbox.Separator />}
        <Hbox.Item>
          <SocialButton social={social} />
        </Hbox.Item>
      </Fragment>
    ))}
  </Hbox>
);

export default SocialButtons;

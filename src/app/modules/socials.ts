import type { ComponentType } from 'react';
import type { IconBaseProps } from 'react-icons';
import { FaXTwitter, FaGithub, FaLinkedin } from 'react-icons/fa6';

export interface SocialItem {
  name: string;
  link: string;
  icon: ComponentType<IconBaseProps>;
}

export const socials: SocialItem[] = [
  {
    name: 'X',
    link: 'https://x.com/leopalamim',
    icon: FaXTwitter,
  },
  {
    name: 'Github',
    link: 'https://github.com/palamim',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/leopalamim',
    icon: FaLinkedin,
  },
];

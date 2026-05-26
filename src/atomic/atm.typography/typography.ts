import styled from "styled-components";

import {
  Color,
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  Spacing,
} from "src/atomic/obj.constants/constants";

export const H1 = styled.h1`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XXLarge};
  font-weight: ${FontWeight.Regular};
`;

export const H2 = styled.h2`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Large};
  line-height: ${LineHeight.Large};
  font-weight: ${FontWeight.Bold};
  font-size: ${FontSize.Large};
  margin: ${Spacing.Large} 0 ${Spacing.Medium};
`;

export const H3 = styled.h3`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Medium};
  line-height: ${LineHeight.Medium};
  font-weight: ${FontWeight.Regular};
  margin: ${Spacing.Medium} 0 ${Spacing.Small};
`;

export const Body = styled.p`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Small};
  font-weight: ${FontWeight.Lighter};
  line-height: ${LineHeight.Medium};
  margin-bottom: 1em;
`;

export const LinkStyled = styled.a`
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

interface BodySecondaryProps {
  align?: string;
}

export const BodySecondary = styled.p<BodySecondaryProps>`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XXSmall};
  font-weight: ${FontWeight.Regular};
  color: ${Color.GrayDark};
  text-align: ${(props: BodySecondaryProps) => props.align || "left"};
  display: inline;
  word-break: break-word;
`;

export const Quote = styled.span`
  color: ${Color.Black};
`;

export const Enhance = styled.span`
  color: ${Color.Primary};
  font-weight: ${FontWeight.Bold};
`;

export const Bold = styled.span`
  color: ${Color.Black};
  font-weight: ${FontWeight.Bold};
`;

export const Italic = styled.span`
  font-style: italic;
`;

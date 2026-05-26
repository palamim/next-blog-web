import styled from "styled-components";
import { Color, Spacing } from "src/atomic/obj.constants/constants";

interface SeparatorProps {
  type?: "line" | "subsection" | "section";
}

const SeparatorSize = {
  line: Spacing.Small,
  subsection: Spacing.Large,
  section: Spacing.XXLarge,
};

export const Separator = styled.div<SeparatorProps>`
  padding-top: ${(props) =>
    props.type ? SeparatorSize[props.type] : Spacing.XSmall};
`;

export const LineSeparator = styled.div`
  margin: 0;
  padding: 0;
  height: 1px;
  width: 100%;
  background-color: ${Color.Gray};
  border: 1px solid transparent;
  border-radius: 1px;
`;

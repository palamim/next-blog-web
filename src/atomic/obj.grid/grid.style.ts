import styled from "styled-components";
import {
  Breakpoint,
  MAX_CONTENT_WIDTH,
  Spacing,
} from "src/atomic/obj.constants/constants";

export const Container = styled.div`
  max-width: ${MAX_CONTENT_WIDTH};
  margin: ${Spacing.Large} auto;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface ColProps {
  size?: number;
}

export const Col = styled.div<ColProps>`
  flex: ${({ size }) => size || 1};
  width: 100%;

  @media (max-width: ${Breakpoint.Mobile}) {
    flex: 1 1 100%;
  }
`;

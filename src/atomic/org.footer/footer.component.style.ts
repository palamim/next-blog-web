import styled from "styled-components";
import {
  ZIndex,
  Color,
  FOOTER_HEIGHT,
} from "src/atomic/obj.constants/constants";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${FOOTER_HEIGHT};
  z-index: ${ZIndex.Top};
  background: ${Color.GrayLight};
`;
